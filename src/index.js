
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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path='/profileadmin' element={<ProfileAdmin/>}/>
          
        <Route path="/uploadPatient/:id" element={<ProfilePatient/>}/>
        <Route path="/updateMedicine/:id" element={<Editmedicine/>}/>
        <Route path="/addmedicine" element={<Addmedicine/>}/>
        
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
