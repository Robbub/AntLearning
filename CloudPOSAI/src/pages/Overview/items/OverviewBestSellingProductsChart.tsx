import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Premium Coffee Beans', unitsSold: 2845 },
    { name: 'Organic Tea Set', unitsSold: 2156 },
    { name: 'Artisan Chocolate Box', unitsSold: 1987 },
    { name: 'Gourmet Pasta Pack', unitsSold: 1654 },
    { name: 'Imported Olive Oil', unitsSold: 1432 },
    { name: 'Premium Wine Selection', unitsSold: 1245 },
    { name: 'Specialty Cheese Board', unitsSold: 1098 },
    { name: 'Craft Beer Variety', unitsSold: 987 },
];

export default function OverviewBestSellingProductsChart() {
    const sortedData = [...data].sort((a, b) => b.unitsSold - a.unitsSold)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sortedData} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis type="number" stroke="var(--text-gray)" />
                <YAxis dataKey="name" type="category" stroke="var(--text-gray)" width={150} fontSize={12} />
                <Tooltip />
                <Bar
                    dataKey="unitsSold"
                    fill="var(--accent)"
                    radius={[0, 6, 6, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}