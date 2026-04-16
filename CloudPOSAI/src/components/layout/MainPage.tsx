import { Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';

const { Content } = Layout;

export default function MainPage() {
  const [collapsed, setCollapse] = useState(false);
  const HEADER_HEIGHT = 64;

  return (
    <Layout 
      style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        position: 'relative'
      }}>
      <Sidebar collapsed={collapsed} />
        <Layout style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div
            style={{
              position: 'absolute',
              top: HEADER_HEIGHT,
              left: 0,
              right: 0,
              height: 1,
              background: 'var(--border)',
              zIndex: 10,
              pointerEvents: 'none'
            }}
          />
          <AppHeader 
            collapsed={collapsed}
            setCollapse={setCollapse}
          />
          <Content style={{
            padding: 24,
            overflow: 'auto',
            background: 'var(--bg)'
          }}>
            <Outlet />
          </Content>
        </Layout>
    </Layout>
  );
}