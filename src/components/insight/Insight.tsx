import './insight.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export default function Insight() {
  return (
    <div className="insight">
      <div className="insightItem">
        <span className="insightItemTitle">Pickups</span>
        <div className="insightItemContainer">
          <span className="insightItemCount">4,000</span>
          <span className="insightItemRate">
            -200<ArrowDropDownIcon></ArrowDropDownIcon>
          </span>
        </div>
        <span className="insightItemText">Compared to last month</span>
      </div>
      <div className="insightItem">
        <span className="insightItemTitle">Pickups</span>
        <div className="insightItemContainer">
          <span className="insightItemCount">4,000</span>
          <span className="insightItemRate">
            -200<ArrowDropDownIcon></ArrowDropDownIcon>
          </span>
        </div>
        <span className="insightItemText">Compared to last month</span>
      </div>
      <div className="insightItem">
        <span className="insightItemTitle">Pickups</span>
        <div className="insightItemContainer">
          <span className="insightItemCount">4,000</span>
          <span className="insightItemRate">
            -200<ArrowDropDownIcon></ArrowDropDownIcon>
          </span>
        </div>
        <span className="insightItemText">Compared to last month</span>
      </div>
    </div>
  )
}
