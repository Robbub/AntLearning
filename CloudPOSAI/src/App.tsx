import MainPage from './components/layout/MainPage.tsx';
import Login from "./pages/Login/Login.tsx";
import OverviewPage from './pages/Overview/OverviewPage.tsx';
import SalesForecastPage from './pages/SalesForecast/SalesForecastPage.tsx';
import CustomersPage from './pages/Customers/CustomersPage.tsx';
import PaymentsPage from './pages/Payments/PaymentsPage.tsx';
import ProductsPage from './pages/Products/ProductsPage.tsx';
import AnomaliesPage from './pages/Anomalies/AnomaliesPage.tsx';
import PeakHoursPage from './pages/PeakHours/PeakHoursPage.tsx';
import StaffPage from './pages/Staff/StaffPage.tsx';
import ChatShielaModal from './pages/ChatShiela/ChatShielaModal.tsx';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider } from './components/layout/ThemeContext.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AppProvider } from "./AppProvider";
import { type BranchMasterInterface, setBranchMasterList } from "./config";
import api from './api/client.ts';

const queryClient = new QueryClient();

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = localStorage.getItem('jwtToken');
    return token !== null;
  });

  useEffect(() => {
    if (isAuthenticated) {
      const fetchBranchData = async () => {
        try {
          console.log('Fetching branch data...');
          const { data } = await api.get<BranchMasterInterface[]>('/branchlist');
          console.log('Branch data received:', data);

          setBranchMasterList(data);
          setIsLoaded(true);
        } catch (error) {
          console.error('Error fetching branch data:', error);
          // Perhaps set isLoaded to true anyway, or handle error
          setIsLoaded(true);
        }
      }

      fetchBranchData();
    }
  }, [isAuthenticated]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider key="loaded">
        <ThemeProvider>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              components: {
                Modal: {
                  contentBg: 'var(--bg)',
                  headerBg: 'var(--bg)',
                  titleColor: 'var(--text)'
                },
                Tree: {
                  colorBorder: 'var(--accent)'
                }
              },
              token: {
                colorPrimary: 'red',
                colorBgBase: 'white',
                colorTextBase: 'black',
              },
            }}
          >
          {!isLoaded ? <div>Loading...</div> :
            !isAuthenticated ?
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
              </BrowserRouter> :
              <Routes>
                <Route path="/" element={<MainPage />}>
                  <Route index element={<OverviewPage />} />
                  <Route path="forecast" element={<SalesForecastPage />} />
                  <Route path="products" element={<ProductsPage />} />
                  <Route path="customers" element={<CustomersPage />} />
                  <Route path="staff" element={<StaffPage />} />
                  <Route path="peak-hours" element={<PeakHoursPage />} />
                  <Route path="anomalies" element={<AnomaliesPage />} />
                  <Route path="payments" element={<PaymentsPage />} />
                  <Route path="chat-shiela" element={<ChatShielaModal />} />
                </Route>
              </Routes>
          }
          </ConfigProvider>
        </ThemeProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;

