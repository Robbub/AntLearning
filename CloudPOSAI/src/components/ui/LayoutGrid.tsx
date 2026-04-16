import type { ReactNode } from 'react';

export default function LayoutGrid({ children }: { children: ReactNode }) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 16
            }}
        >
            {children}
        </div>
    )
}