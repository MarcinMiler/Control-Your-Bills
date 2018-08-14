import * as React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area
} from 'recharts'

const data = [
    { name: 'Jan', total: 4000 },
    { name: 'Feb', total: 3000 },
    { name: 'Mar', total: 2000 },
    { name: 'Apr', total: 2780 },
    { name: 'May', total: 1890 },
    { name: 'Jun', total: 2390 },
    { name: 'Jul', total: 3490 }
]

const tickStyle = {
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeight: 500
}

export const AreaCharts: React.SFC<{}> = () => (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ed4cd3" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#ed4cd3" stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" vertical={false} />
            <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={tickStyle}
            />
            <YAxis axisLine={false} tickLine={false} tick={tickStyle} />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="total"
                strokeWidth={3}
                stroke="#ed4cd3"
                fillOpacity={1}
                fill="url(#colorUv)"
            />
        </AreaChart>
    </ResponsiveContainer>
)
