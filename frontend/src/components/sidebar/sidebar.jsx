import "./sidebar.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import DvrIcon from '@mui/icons-material/Dvr';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">black-coffer</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                    <GridViewIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <SupervisedUserCircleIcon  className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <DvrIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon"/>
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <VpnKeyIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <AssignmentIndIcon className="icon"/>
                        <span>Profiles</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
            
        </div>
    )
}

export default Sidebar