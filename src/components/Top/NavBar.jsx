import { Globe, Menu } from "lucide-react";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/airbnb-logo.png" alt="Airbnb" />
      </div>

      <div className="right-menu">
        <span>Become a host</span>

        <button className="icon-btn">
          <Globe size={18} />
        </button>

        <button className="menu-btn">
          <Menu size={18} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;