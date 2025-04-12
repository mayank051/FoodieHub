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
    <div className="flex justify-between bg-pink-100 mb-2 shadow">
      <div className="logo-container">
        <Link to="/">
          <img className="w-36" src={LOGO_URL} />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status : {onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link>Cart</Link>
          </li>
          <button className="px-4" onClick={handleAuthClick}>
            {authButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
