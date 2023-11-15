import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "views/Login";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import ProfilePatient from "views/ProfilePatient";
import Addmedicine from "views/AddMedicine";
import Editmedicine from "views/EditMedicine";
import Dashboard from "views/Dashboard";
import ProfileAdmin from "views/ProfileAdmin";

// Kiểm tra xem có ID trong localStorage hay không
const hasIdInLocalStorage = () => {
  const userId = localStorage.getItem("id");
  return !!userId; // Chuyển đổi thành giá trị boolean
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Routes>
          {/* Route cho trang đăng nhập */}
          <Route
            path="/"
            element={
              hasIdInLocalStorage() ? (
                <Navigate to="/admin/dashboard" />
              ) : (
                <Login />
              )
            }
          />
          {/* Route cho trang admin */}
          <Route
            path="/admin/*"
            element={
              hasIdInLocalStorage() ? <AdminLayout /> : <Navigate to="/" />
            }
          />

          <Route path="/profileadmin" element={<ProfileAdmin />} />
          <Route path="/uploadPatient/:id" element={<ProfilePatient />} />
          <Route path="/updateMedicine/:id" element={<Editmedicine />} />
          <Route path="/addmedicine" element={<Addmedicine />} />
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
