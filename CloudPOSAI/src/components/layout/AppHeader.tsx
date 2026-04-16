import { Layout, Button } from 'antd';
import { Bot, PanelLeft, SunMoon } from 'lucide-react';
import CloudPosButton from '../items/Button';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import AppModal from './AppModal';
import ChatShielaModal from '../../pages/ChatShiela/ChatShielaModal';

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  setCollapse: (value: boolean) => void;
}

export default function AppHeader({
  collapsed,
  setCollapse,
}: Props) {
  const { theme, setTheme } = useTheme();
  const [selectedOpen, setSelectedOpen] = useState(false);

  return (
    <Header
      style={{
        color: 'var(--text)',
        background: 'var(--bg)',
        fontSize: 20,
        // borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <div>
        <Button style={{ border: 'trasparent' }}
          onClick={() => setCollapse(!collapsed)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00ccff';
            e.currentTarget.style.color = 'var(--bg)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text)'
          }}
          icon={<PanelLeft size={16}/>}
        />
      </div>
      
      <div
        style={{
          alignItems: 'left',
          display: 'flex',
          gap: 16
        }}>
        <CloudPosButton
          onClick={() => setSelectedOpen(true)}
        >
          <Bot size={16}/>
          Chat Shiela
        </CloudPosButton>

        <SunMoon size={24}
          onClick={() => 
            setTheme(t => t === 'light' ? 'dark' : 'light')
          }
        >
          Toggle Theme ({theme})
        </SunMoon>
      </div>
          <AppModal
            open={!!selectedOpen}
            onClose={() => setSelectedOpen(false)}
            title={""}
          >
            <ChatShielaModal />
          </AppModal>
    </Header>
  );
}