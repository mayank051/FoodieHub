import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  const handleAuthClick = () => {
    setAuthButton((prev) => (prev === "Login" ? "Logout" : "Login"));
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="auth-btn" onClick={handleAuthClick}>
            {authButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
