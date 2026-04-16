import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Package, Users, Clock, AlertTriangle, DollarSign } from 'lucide-react';
import logo from '../../assets/cloudpos-logo.png';

const { Sider } = Layout;
const navigationItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Sales Forecast", url: "/forecast", icon: TrendingUp },
  { title: "Products", url: "/products", icon: Package },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Staff", url: "/staff", icon: Users },
  { title: "Peak Hours", url: "/peak-hours", icon: Clock },
  { title: "Anomalies", url: "/anomalies", icon: AlertTriangle },
  { title: "Payments", url: "/payments", icon: DollarSign },
]

type SidebarProps = {
  collapsed: boolean;
}

export default function Sidebar({ collapsed }: SidebarProps) {
  return (
    <>
      <Sider
        collapsible
        trigger={null}
        collapsed={collapsed}
        width={240}
        style={{
          background: 'var(--bg)',
          borderRight: '1px solid var(--border)'
        }}
      >
        {collapsed ? (
          <div style={{
            padding: 16,
            textAlign: 'center',
          }}>
            <img
              src={logo}
              alt="CloudPOS AI"
              style={{
                width: 24,
                height: 24,
                objectFit: 'contain'
              }}
            />
          </div>
        ) : (
          <div style={{
            padding: 16,
            fontWeight: 600,
            fontSize: 20,
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <img
              src={logo}
              alt="CloudPOS AI"
              style={{
                width: 24,
                height: 24,
                objectFit: 'contain'
              }}
            />
            {!collapsed && "CloudPOS AI"}
          </div>
        )}

        <p style={{ color: 'var(--text)', padding: '12px 12px', fontSize: 12 }}>Analytics</p>

        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.url}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: collapsed ? 'center' : 'flex-start',
                gap: collapsed ? 0 : 10,
                padding: '12px 16px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',

                color: isActive ? 'var(--accent)' : 'var(--text)',
                background: isActive ? 'var(--accent-bg)' : 'transparent',
                borderRight: isActive ? '3px solid var(--accent)' : '3px solid transparent'
              })}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-bg)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <Icon size ={18} />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </Sider>
    </>
  );
}