import React, { useState, useEffect } from "react";
import "../Sidebar/Sidebar.css";

import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <nav className={`sidebar ${isSidebarOpen ? "open" : "close"} ${isDark ? "dark" : "light"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">S4V1T4R</span>
              <span className="profession">DESARROLLADOR</span>
            </div>
          </div>

          <i
            className={
              isSidebarOpen
                ? "bx bx-chevron-left toggle"
                : "bx bx-chevron-right toggle"
            }
            onClick={handleSidebarToggle}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box lis">
              <i className="bx bx-search icon"></i>
              <span className="text nav-text">Dashboard</span>
            </li>

            <ul className="menu-links">
              <li className="nav-link li">
                <a href="#">
                  <i className="bx bx-bar-chart-alt-2 icon"><FiUsers /></i>
                  <Link to="/empleado">
                  <span className="text nav-text">Empleados</span>
                  </Link >
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="li">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode li " onClick={toggleDarkMode}>
          
                {isDark ? "Modo Claro" : "Modo Oscuro"}
            
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;