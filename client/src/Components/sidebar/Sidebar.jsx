import React from "react";
import Logo from "../../Utils/images/RadicallX-Logo1.jpg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LanIcon from "@mui/icons-material/Lan";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav">
        <div className="sidebar_logo">
          <img src={Logo} alt="" />
        </div>
        <NavLink className="link" to={"/dashboard"}>
          <DashboardIcon className="icon" />
          <p className="navLink_para">Dashboard</p>
        </NavLink>
        <NavLink to={"/apprenticeship"} className="link">
          <LanIcon className="icon" />
          <p className="navLink_para">Apprenticeships</p>
        </NavLink>
        <NavLink to={"/internship"} className="link">
          <MenuBookIcon className="icon" />
          <p className="navLink_para">Internships</p>
        </NavLink>
        <NavLink to={"/jobs"} className="link">
          <WorkIcon className="icon" />
          <p className="navLink_para">Jobs</p>
        </NavLink>
        <NavLink to={"/settings"} className="link">
          <SettingsIcon className="icon" />
          <p className="navLink_para">Settings</p>
        </NavLink>
        <div className="user">
          <div className="user_img"></div>
          <p className="navLink_para">Adam Scott</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
