import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
                <span className={`hamburger ${isSidebarOpen ? "active" : ""}`}></span>
              </button>
            </div>
            <ul className="nav-list">
              <li><a href="#">Logout</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Modification</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar-container ${isSidebarOpen ? "collapsed" : ""}`}>
        <div className="sidebar-nav">
          <ul>
            <li><a href="#"><i className="fas fa-home"></i><span> Dashboard</span></a></li>
          </ul>

          {/* Products Dropdown */}
          <ul>
            <li>
              <a href="#" onClick={() => toggleDropdown("products")}>
                <i className="fas fa-box"></i><span> Products</span>
                <i className={`fas fa-angle-down ${openDropdown === "products" ? "active" : ""}`}></i>
              </a>
              <ul className={`sub-menu ${openDropdown === "products" ? "show" : ""}`}>
                <li><a href="#"><i className="fas fa-plus"></i> Add Product</a></li>
                <li><a href="#"><i className="fas fa-eye"></i> View Product</a></li>
                <li><a href="#"><i className="fas fa-list"></i> List Product</a></li>
              </ul>
            </li>
          </ul>

          {/* Sales Dropdown */}
          <ul>
            <li>
              <a href="#" onClick={() => toggleDropdown("sales")}>
                <i className="fas fa-shopping-cart"></i><span> Sales</span>
                <i className={`fas fa-angle-down ${openDropdown === "sales" ? "active" : ""}`}></i>
              </a>
              <ul className={`sub-menu ${openDropdown === "sales" ? "show" : ""}`}>
                <li><a href="#"><i className="fas fa-cash-register"></i> Add Sales</a></li>
                <li><a href="#"><i className="fas fa-chart-line"></i> View Sales</a></li>
                <li><a href="#"><i className="fas fa-undo"></i> Return Sales</a></li>
              </ul>
            </li>
          </ul>

          {/* Purchase Dropdown */}
          <ul>
            <li>
              <a href="#" onClick={() => toggleDropdown("purchase")}>
                <i className="fas fa-shopping-cart"></i><span> Purchase</span>
                <i className={`fas fa-angle-down ${openDropdown === "purchase" ? "active" : ""}`}></i>
              </a>
              <ul className={`sub-menu ${openDropdown === "purchase" ? "show" : ""}`}>
                <li><a href="#"><i className="fas fa-plus"></i> Add Purchase</a></li>
                <li><a href="#"><i className="fas fa-eye"></i> View Purchase</a></li>
                <li><a href="#"><i className="fas fa-list"></i> List Purchase</a></li>
              </ul>
            </li>
          </ul>

          {/* Suppliers Dropdown */}
          <ul>
            <li>
              <a href="#" onClick={() => toggleDropdown("suppliers")}>
                <i className="fas fa-users"></i><span> Suppliers</span>
                <i className={`fas fa-angle-down ${openDropdown === "suppliers" ? "active" : ""}`}></i>
              </a>
              <ul className={`sub-menu ${openDropdown === "suppliers" ? "show" : ""}`}>
                <li><a href="#"><i className="fas fa-plus"></i> Add Supplier</a></li>
                <li><a href="#"><i className="fas fa-eye"></i> View Supplier</a></li>
                <li><a href="#"><i className="fas fa-list"></i> List Supplier</a></li>
              </ul>
            </li>
          </ul>

          {/* Accounts Dropdown */}
          <ul>
            <li>
              <a href="#" onClick={() => toggleDropdown("account")}>
                <i className="fas fa-credit-card"></i><span> Accounts</span>
                <i className={`fas fa-angle-down ${openDropdown === "account" ? "active" : ""}`}></i>
              </a>
              <ul className={`sub-menu ${openDropdown === "account" ? "show" : ""}`}>
                <li><a href="#"><i className="fas fa-plus"></i> Add Account</a></li>
                <li><a href="#"><i className="fas fa-eye"></i> View Account</a></li>
                <li><a href="#"><i className="fas fa-list"></i> List Account</a></li>
              </ul>
            </li>
          </ul>

          {/* Settings */}
          <ul>
            <li><a href="#"><i className="fas fa-cog"></i><span> Settings</span></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
