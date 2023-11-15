
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import Patient from "views/Patient.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Lichkham from "./views/Lichkham.js"
import Order from "./views/Order"
import Medicine from './views/Medicine'
var routes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/patient",
    name: "Quản lý tài khoản",
  
    icon: "tim-icons icon-atom",
    component: <Patient/>,
    layout: "/admin",
  },
  {
    path: "/thuoc",
    name: "Quản lý Thuốc",
  
    icon: "tim-icons icon-pin",
    component: <Medicine/>,
    layout: "/admin",
  },
  {
    path: "/booking",
    name: "Quản lý lịch khám",
  
    icon: "tim-icons icon-bell-55",
    component: <Lichkham type='Lịch khám bệnh'/>,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Thanh toán",
    icon: "tim-icons icon-single-02",
    component: <Order type='Thanh toán'/>,
    layout: "/admin",
  },
 
];
export default routes;
