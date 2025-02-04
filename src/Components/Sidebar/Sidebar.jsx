import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Toggle Dropdown Menu
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Navigation Header */}
      <header className="navigation">
        <div className="nav-container">
          <div className="logo">
            <span>Zaheer Abbas</span>
          </div>
          <nav>
            <div className="nav-mobile">
              <button className="nav-toggle" onClick={toggleSidebar}>
                <span
                  className={`hamburger ${isSidebarOpen ? "" : "active"}`}
                ></span>
              </button>
            </div>
            <ul className="nav-list">
              <li>
                <a href="#">Logout</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Modification</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar-container ${isSidebarOpen ? "" : "collapsed"}`}>
        <div className="sidebar-nav">
          <ul>
            <li>
              <a href="#" title="Dashboard">
                <i className="fas fa-home"></i>
                {isSidebarOpen && <span> Dashboard</span>}
              </a>
            </li>
          </ul>

          {/* Products Dropdown */}
          <ul>
            <li className="dropdown">
              <a
                href="#"
                onClick={() => toggleDropdown("products")}
                title="Products"
              >
                <i className="fas fa-box"></i>
                {isSidebarOpen && <span> Products</span>}
                <i
                  className={`fas fa-angle-down ${
                    openDropdown === "products" ? "active" : ""
                  }`}
                ></i>
              </a>
              <ul
                className={`sub-menu ${
                  openDropdown === "products" ? "show" : ""
                }`}
              >
                <li>
                  <a href="#">
                    <i className="fas fa-plus"></i> Add Product
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-eye"></i> View Product
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-list"></i> List Product
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Sales Dropdown */}
          <ul>
            <li className="dropdown">
              <a href="#" onClick={() => toggleDropdown("sales")} title="Sales">
                <i className="fas fa-shopping-cart"></i>
                {isSidebarOpen && <span> Sales</span>}
                <i
                  className={`fas fa-angle-down ${
                    openDropdown === "sales" ? "active" : ""
                  }`}
                ></i>
              </a>
              <ul
                className={`sub-menu ${openDropdown === "sales" ? "show" : ""}`}
              >
                <li>
                  <a href="#">
                    <i className="fas fa-cash-register"></i> Add Sales
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chart-line"></i> View Sales
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-undo"></i> Return Sales
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Purchase Dropdown */}
          <ul>
            <li className="dropdown">
              <a
                href="#"
                onClick={() => toggleDropdown("purchase")}
                title="Purchase"
              >
                <i className="fas fa-shopping-cart"></i>
                {isSidebarOpen && <span> Purchase</span>}
                <i
                  className={`fas fa-angle-down ${
                    openDropdown === "sales" ? "active" : ""
                  }`}
                ></i>
              </a>
              <ul
                className={`sub-menu ${
                  openDropdown === "purchase" ? "show" : ""
                }`}
              >
                <li>
                  <a href="#">
                    <i className="fas fa-cash-register"></i> Add Purchase
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chart-line"></i> View Purchase
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-undo"></i> Return Purchase
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Customers Dropdown */}
          <ul>
            <li className="dropdown">
              <a
                href="#"
                onClick={() => toggleDropdown("customers")}
                title="Customers"
              >
                <i class="fa-solid fa-users"></i>
                {isSidebarOpen && <span> Customers</span>}
                <i
                  className={`fas fa-angle-down ${
                    openDropdown === "customers" ? "active" : ""
                  }`}
                ></i>
              </a>
              <ul
                className={`sub-menu ${
                  openDropdown === "customers" ? "show" : ""
                }`}
              >
                <li>
                  <a href="#">
                    <i className="fas fa-cash-register"></i> Add Customers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chart-line"></i> View Customers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-undo"></i> Return Customers
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Supplers Dropdown */}
          <ul>
            <li className="dropdown">
              <a
                href="#"
                onClick={() => toggleDropdown("supplers")}
                title="Supplers"
              >
                <i class="fa-brands fa-supple"></i>
                {isSidebarOpen && <span> Supplers</span>}
                <i
                  className={`fas fa-angle-down ${
                    openDropdown === "supplers" ? "active" : ""
                  }`}
                ></i>
              </a>
              <ul
                className={`sub-menu ${
                  openDropdown === "supplers" ? "show" : ""
                }`}
              >
                <li>
                  <a href="#">
                    <i className="fas fa-cash-register"></i> Add Supplers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chart-line"></i> View Supplers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-undo"></i> Return Supplers
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Accounts Dropdown */}
          <ul>
            <li className="dropdown">
              <a
                href="#"
                onClick={() => toggleDropdown("accounts")}
                title="Accounts"
              >
                <i class="fa-solid fa-user"></i>
                {isSidebarOpen && <span> Accounts</span>}
                <i
                  className={`fas fa-angle-down ${
                    openDropdown === "supplers" ? "active" : ""
                  }`}
                ></i>
              </a>
              <ul
                className={`sub-menu ${
                  openDropdown === "accounts" ? "show" : ""
                }`}
              >
                <li>
                  <a href="#">
                    <i className="fas fa-cash-register"></i> Add Accounts
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chart-line"></i> View Accounts
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-undo"></i> Return Accounts
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Settings */}
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
