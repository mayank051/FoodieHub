import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { name, email, phone } = userInfo;

  const handleChange = (key, e) => {
    const { value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div>
      <h3 className="font-bold align-middle">Hello {name}</h3>
      <div>
        <span>User Name: </span>
        <input
          id="name"
          className="border-1 m-2 border-black"
          value={name}
          onChange={(e) => handleChange("name", e)}
        />
      </div>
      <div>
        <span>User Email: </span>
        <input
          id="email"
          className="border-1 m-2 border-black"
          value={email}
          onChange={(e) => handleChange("email", e)}
        />
      </div>
      <div>
        <span>User Phone: </span>
        <input
          id="phone"
          className="border-1 m-2 border-black"
          value={phone}
          onChange={(e) => handleChange("phone", e)}
        />
      </div>
    </div>
  );
};

export default Profile;
