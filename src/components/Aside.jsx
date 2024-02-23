import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
import overViewChartActive from "./images/chart.svg";
import overViewChart from "./images/chart-ac.svg";
import userGroup from "./images/Users-Group-Rounded.svg";
import userGroupActive from "./images/Users-Group-Rounded-ac.svg";
import Logout from "./images/Logout.svg";
import { ArrowBackIosNew } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { auth } from "../rtk/slice/authSlice";

function Aside() {
  const location = useLocation();
  const dispatch = useDispatch()
  // Handle submenu Active class
  const [submenuActive, setSubmenuActive] = useState({});
  const handleSubmenuClick = (submenuLabel) => {
    setSubmenuActive((prevActive) => ({
      ...prevActive,
      [submenuLabel]: !prevActive[submenuLabel],
    }));
  };

  // collapse sidebar on clicking collapse button
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  // collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      setSidebarCollapsed(window.innerWidth < 993);
    };
    // Collapse when Resizing the screen
    window.addEventListener("resize", handleResize);
    // Collapse when reloading in small screen
    window.addEventListener("load", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={!isSidebarCollapsed?window.innerWidth <= 768? "side-collapse":"":""}>
        <Sidebar
          collapsed={isSidebarCollapsed}
          width={`${isSidebarCollapsed ? "40px" : "250px"}`}
          className={`sidebar ${
            isSidebarCollapsed
              ? "collapsed-sidebar"
              :""
          }`}
        >
          <Menu className="menu-container">
            <MenuItem
              component={<NavLink to="/" />}
              className="firstMenu"
              icon={
                <img
                  src={
                    location.pathname === "/"
                      ? overViewChartActive
                      : overViewChart
                  }
                  alt="Overview"
                  width="20px"
                />
              }
            >
              Overview
            </MenuItem>

            <SubMenu
              onClick={() => handleSubmenuClick("Users")}
              className={`bg-white my-1 mx-1 dropdown ${
                submenuActive["Users"] ? "active" : ""
              }`}
              label="Users"
              icon={
                <img
                  className=""
                  src={!submenuActive["Users"] ? userGroup : userGroupActive}
                  width="25"
                  alt=""
                />
              }
            >
              <MenuItem
                className="menue"
                component={<NavLink to="/usercharts" />}
              >
                {" "}
                User Charts
              </MenuItem>
              <MenuItem
                className="menue"
                component={<NavLink to="/usersprofile" />}
              >
                User Profile
              </MenuItem>
            </SubMenu>
          </Menu>
          <div className="sidebar-footer">
            <button onClick={()=>dispatch(auth(false))}>
              <img src={Logout} />
              <span>{isSidebarCollapsed ? "" : "Logout"}</span>
            </button>
          </div>
          <div className="collapsePutton">
            <button onClick={handleToggleSidebar}>
              {isSidebarCollapsed ? <ArrowForwardIos /> : <ArrowBackIosNew />}
            </button>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
export default Aside;
