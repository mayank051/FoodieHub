import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const handleAuthClick = () => {
    setAuthButton((prev) => (prev === "Login" ? "Logout" : "Login"));
  };
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button className="auth-btn" onClick={handleAuthClick}>
            {authButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
