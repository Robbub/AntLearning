import { Layout } from 'antd';

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header style={{ color: "#fff", fontSize: 20 }}>
      My Blog
    </Header>
  );
}