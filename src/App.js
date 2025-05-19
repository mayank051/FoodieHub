import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

//Code Splitting || Chunking || Dynamic Bundling || Lazy Loading || On Demand Loading
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  //Mocking to get the loggedinUser Details
  useEffect(() => {
    setUserInfo({
      name: "Mayank",
      email: "mayank@gmail.com",
      phone: "1234567890",
    });
  }, []);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
