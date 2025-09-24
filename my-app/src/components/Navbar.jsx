import logo from "../assets/logo.png";
import "../App.css";
function Navbar() {
  return (
    <nav>
      <h1 className="app-name">Airbnb Rental</h1>
      <img src={logo} alt="logo.png" className="logo" />
    </nav>
  );
}

export default Navbar;
