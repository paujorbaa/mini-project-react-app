import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav>
      <h1 className="app-name"></h1>
      <img src={logo} alt="logo.png" className="logo" />
    </nav>
  );
}

export default Navbar;

