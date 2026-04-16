import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';

const data = [
    { name: 'Monday', revenue: 4000 },
    { name: 'Tuesday', revenue: 5000 },
    { name: 'Wednesday', revenue: 5500 },
    { name: 'Thursday', revenue: 4900 },
    { name: 'Friday', revenue: 4900 },
    { name: 'Saturday', revenue: 5000 },
    { name: 'Sunday', revenue: 5000 },
];

export default function OverviewSalesForecastChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="var(--text-gray)" />
                <YAxis stroke="var(--text-gray)" />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--accent)"
                    stroke-width={2}
                    dot={true}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}