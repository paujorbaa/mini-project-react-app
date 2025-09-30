import { Link } from "react-router-dom";
import "../App.css";
import AboutPage from "../pages/AboutPage";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to= "/apartmentformpage">Add Your Item</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

// Should go inside navbar to make the burger menu
