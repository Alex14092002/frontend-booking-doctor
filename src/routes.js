
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
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/patient",
    name: "Quản lý tài khoản",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Patient/>,
    layout: "/admin",
  },
  {
    path: "/thuoc",
    name: "Quản lý Thuốc",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <Medicine/>,
    layout: "/admin",
  },
  {
    path: "/booking",
    name: "Quản lý lịch khám",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Lichkham type='Lịch khám bệnh'/>,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Thanh toán",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <Order type='Thanh toán'/>,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <Patient />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },
];
export default routes;
