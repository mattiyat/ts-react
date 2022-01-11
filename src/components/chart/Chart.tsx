import './chart.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

type ChartProps = {
  title: string
  data: any
  dataKey: string
  grid: boolean
}

export default function Chart({ title, data, dataKey, grid }: ChartProps) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name"></XAxis>
          <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
          <Tooltip></Tooltip>
          <CartesianGrid></CartesianGrid>
          <Legend></Legend>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
