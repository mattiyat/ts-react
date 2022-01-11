import './home.css'
import Insight from '../../components/insight/Insight'
import Chart from '../../components/chart/Chart'
import { dummyData } from '../../dummyData'

export default function Home() {
  return (
    <div className="home">
      <Insight></Insight>
      <Chart data={dummyData} title="Cart Analytics" dataKey="uv" grid></Chart>
      <div className="homeWidgets"></div>
    </div>
  )
}
