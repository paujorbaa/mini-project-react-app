import logo from "../assets/logo.png";
import "../App.css";
import { slide as Menu } from "react-burger-menu";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="outer-container">
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Sidebar />
      </Menu>

      <nav>
        <h1 className="app-name">Airbnb Rental</h1>
        <Link to="/">
          <img src={logo} alt="logo.png" className="logo" />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
