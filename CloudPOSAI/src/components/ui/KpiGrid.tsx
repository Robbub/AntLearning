// NOT NEEDED, MAY DELETE LATER

import type { ReactNode } from "react";

export default function KpiGrid({ children }: { children: ReactNode}) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 16,
            }}
        >
            {children}
        </div>
    );
}