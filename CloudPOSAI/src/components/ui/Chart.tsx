import type { ReactNode } from "react";

type ChartProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
    span?: number;
};

export default function Chart({
    title,
    subtitle,
    children,
    span = 12
}: ChartProps) {
    return (
        <div
            style={{
                gridColumn: `span ${span}`,
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: 16,
                // boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12
            }}
        >
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}
            >
                <h2 style={{ margin: 0, fontWeight: 600 }}>{title}</h2>
                <span style={{ margin: 0, color: 'var(--text-gray)' }}>{subtitle}</span>
            </div>

            <div style={{ width: '100%', height: 300 }}>
                {children}
            </div>
        </div>
    );
}