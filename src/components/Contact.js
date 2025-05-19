import React from "react";
import UserContext from "../utils/UserContext";

const ContactPage = () => {
  return (
    <UserContext.Consumer>
      {({ userInfo }) => (
        <div>
          <div>
            <span>User Name: {userInfo.name} </span>
          </div>
          <div>
            <span>User Email: {userInfo.email}</span>
          </div>
          <div>
            <span>User Phone: {userInfo.phone}</span>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default ContactPage;
