import { Layout } from 'antd';
import AppFooter from './AppFooter.tsx';
import type { ReactNode } from 'react';

const { Content } = Layout;

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <Layout style={{ minHeight: '100vh', minWidth: '100%' }}>

      <Content style={{ padding: 0 }}>
        {children}
      </Content>

      <AppFooter />
    </Layout>
  );
}