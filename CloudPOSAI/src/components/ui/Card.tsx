import type { ReactNode } from 'react';

type CardProps = {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    style?: React.CSSProperties;
    span?: number;
};

export default function Card({
    title,
    subtitle,
    children,
    style,
    span = 12
}: CardProps) {
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
                gap: 12,
                ...style
            }}
        >
            {(title || subtitle) && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
                >
                    {title && (
                        <h3
                            style={{
                                margin: 0,
                                fontSize: 16,
                                fontWeight: 600,
                                color: 'var(--text-h)'
                            }}
                        >
                            {title}
                        </h3>
                    )}

                    {subtitle && (
                        <span
                            style={{
                                fontSize: 12,
                                color: 'var(--text)',
                                opacity: 0.7,
                            }}
                        >
                            {subtitle}
                        </span>
                    )}
                </div>
            )}

            <div>{children}</div>
        </div>
    )
}