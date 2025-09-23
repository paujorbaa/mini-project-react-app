import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
         <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li> 
      </ul>
    </aside>
  );
}

export default Sidebar;
