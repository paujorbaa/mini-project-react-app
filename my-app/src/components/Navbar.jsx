import logo from "../assets/logo.png";
import "../App.css";
import { slide as Menu } from "react-burger-menu";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <div id="outer-container">
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Sidebar />
      </Menu>

      <nav>
        <h1 className="app-name">Airbnb Rental</h1>
        <img src={logo} alt="logo.png" className="logo" />
      </nav>
    </div>
  );
}

export default Navbar;

// <Sidebar /> should be a part of navbar as a burger menu.
