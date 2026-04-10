import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Sidebar from '../components/blog/Sidebar';

const { Header, Content } = Layout;

export default function BlogPage() {
  const [collapsed, setCollapse] = useState(false);

  return (
    <Layout style={{ height: '100vh'}}>
      <Sidebar collapsed={collapsed} />
        <Layout style={{ flex: 1 }}>
          <Header style={{ background: 'white' }}>
            <Button onClick={() => setCollapse(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            Header
          </Header>
          <Content style={{ padding: 24, overflow: 'auto' }}>
              {[...Array(50)].map((_, i) => (
                <p key={i}>Line {i + 1}</p>
              ))}
          </Content>
        </Layout>
    </Layout>
  );
}