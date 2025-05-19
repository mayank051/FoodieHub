import { createContext } from "react";

const UserContext = createContext({
  name: "",
  email: "",
  phone: "",
});

export default UserContext;
