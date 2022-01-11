import './sidebar.css'
import { LineStyle } from '@mui/icons-material'
import MapIcon from '@mui/icons-material/Map'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SummarizeIcon from '@mui/icons-material/Summarize'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Menu 1 */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dispatching Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <DeleteSweepIcon className="sidebarIcon"></DeleteSweepIcon>Assets
            </li>
            <li className="sidebarListItem">
              <LocalShippingIcon className="sidebarIcon"></LocalShippingIcon>
              Dispatching
            </li>
            <li className="sidebarListItem">
              <MapIcon className="sidebarIcon"></MapIcon>Maps
            </li>
            <li className="sidebarListItem">
              <SummarizeIcon className="sidebarIcon"></SummarizeIcon>Reports
            </li>
          </ul>
        </div>
        {/* Menu 2 */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Assets Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <DeleteSweepIcon className="sidebarIcon"></DeleteSweepIcon>Assets
            </li>
            <li className="sidebarListItem">
              <LocalShippingIcon className="sidebarIcon"></LocalShippingIcon>
              Dispatching
            </li>
            <li className="sidebarListItem">
              <MapIcon className="sidebarIcon"></MapIcon>Maps
            </li>
            <li className="sidebarListItem">
              <SummarizeIcon className="sidebarIcon"></SummarizeIcon>Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
