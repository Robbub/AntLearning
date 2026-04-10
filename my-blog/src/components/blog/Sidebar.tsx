import { Layout } from 'antd';

const { Sider } = Layout;

type SidebarProps = {
  collapsed: boolean;
}

export default function Sidebar({ collapsed }: SidebarProps) {

  return (
    <>
      <Sider title="Analytics"
        collapsible trigger={null}
        collapsed={collapsed}
        width={240}
        style={ {background: 'white'} }
      >
        <p>Tech</p>
        <p>Programming</p>
      </Sider>
    </>
  );
}