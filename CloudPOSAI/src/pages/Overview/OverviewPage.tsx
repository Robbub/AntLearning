import LayoutGrid from "../../components/ui/LayoutGrid";
import KpiCard from "../../components/ui/KpiCard";
import Chart from "../../components/ui/Chart";
import OverviewSalesForecastChart from "./items/OverviewSalesForecastChart";
import OverviewBestSellingProductsChart from "./items/OverviewBestSellingProductsChart";
import { DollarSign, TrendingUp, ShoppingCart, Users } from "lucide-react";
import Card from "../../components/ui/Card";
import { useState } from 'react';
import AppModal from "../../components/layout/AppModal";

export default function OverviewPage() {
    const [selectedOpen, setSelectedOpen] = useState<string | null>(null);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                    <h1 style={{ margin: 0 }}>Dashboard Overview</h1>
                    <h3 style={{ color: 'gray', fontWeight: 400 }}>Real-time insights across your retail operations</h3>
                </div>
            <LayoutGrid>
                <KpiCard
                    title="TOTAL REVENUE"
                    value="P284.5K"
                    delta="12"
                    icon={DollarSign}
                    span={3}
                    onClick={() => setSelectedOpen("Total Revenue")}
                />
                <KpiCard title="TRANSACTIONS" value="8,547" delta="8.2" icon={TrendingUp} span={3} />
                <KpiCard title="AVG. BASKET SIZE" value="P33.28" delta="2.4" deltaPositive={false} icon={ShoppingCart} span={3} />
                <KpiCard title="ACTIVE CUSTOMERS" value="2,431" delta="15.3" icon={Users} span={3} />

                <Chart
                    title="Sales Forecast"
                    subtitle="Revenue projection with scenario analysis"
                    span={12}
                >
                    <OverviewSalesForecastChart />
                </Chart>

                <Chart
                    title="Best Selling Products Trend"
                    subtitle="Top 8 Products by units sold (Last 30 days)"
                    span={6}>
                    <OverviewBestSellingProductsChart />
                </Chart>

                <Chart
                    title="Payment Method Trends"
                    subtitle="% of transactions by payment type (Last 8 weeks)"
                    span={6}
                >
                    <OverviewSalesForecastChart />
                </Chart>

                <Card
                    title="Staff Performance Leaderboard"
                    subtitle="Top 5 performers by revenue (Last 30 days)"
                    span={6}
                >
                    <Card
                        title="Sarah Martinez"
                        style={{ color: 'var(--text-gray)' }}
                    >
                        <span>P125,000 342 Transactions Avg. P367</span>
                    </Card>
                </Card>

                <Card
                    title="Anomaly Detection"
                    subtitle="Recent unusual activities"
                    span={6}
                >
                    <Card
                        title="Unusual refund pattern detected"
                        style={{ color: 'var(--text-gray)' }}
                    >
                        Store#12 P2,450 2 hours ago
                    </Card>
                </Card>
            </LayoutGrid>
            <AppModal
                    open={!!selectedOpen}
                    onClose={() => setSelectedOpen(null)}
                    title={selectedOpen ?? ""}
            >
                <p>WOO!</p>
            </AppModal>
        </div>
    )
}