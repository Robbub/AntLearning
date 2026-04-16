import { Button } from 'antd';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function CloudPosButton({ children, onClick }: Props) {
    return (
        <Button
            style={{
                background: 'rgba(219, 20, 60, 0.9)',
                color: 'white',
                border: 'none',
                padding: '20px 16px',
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}