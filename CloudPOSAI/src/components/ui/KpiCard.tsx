import type { LucideIcon } from 'lucide-react';

type KpiCardProps = {
    title: string;
    value: string | number;
    delta?: string;
    deltaPositive?: boolean;
    icon: LucideIcon;
    span: number;
    onClick?: () => void;
    active?: boolean;
};

export default function KpiCard({
    title,
    value,
    delta,
    deltaPositive = true,
    icon,
    span = 12,
    onClick,
    active
}: KpiCardProps) {
    const Icon = icon;

    return (
        <div
            className={`kpi-card ${onClick ? 'clickable' : ''} ${active ? 'active' : ''}`}
            onClick={onClick}
            style={{
                gridColumn: `span ${span}`,
                borderRadius: 12,
                padding: 16,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span
                    style={{
                        fontSize: 12,
                        color: 'var(--text)',
                        opacity: 0.7
                        }}
                >
                    {title}
                </span>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'baseline',
                        gap: 8
                    }}
                >
                    <h2
                        style={{
                            margin: 0
                        }}
                    >
                        {value}
                    </h2>

                    {delta && (
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 500,
                                color:  deltaPositive ? 'var(--delta-positive)' : 'red',
                            }}
                        >
                            {deltaPositive ? '↑' : '↓'} {delta}% vs the last period
                        </span>
                    )}
                </div>
            </div>
            <div style={{
                    background: 'var(--accent-bg)',
                    // border: '1px solid var(--accent-border)',
                    borderRadius: 10,
                    padding: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Icon size={28} color='var(--accent)'/>
            </div>
        </div>
    );
}