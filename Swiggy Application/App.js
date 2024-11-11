import React, {lazy, Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/app/components/footer";
import Body from "./src/app/components/body";
import About from "./src/app/components/About";
import Profile from "./src/app/components/ProfileClass";
import Header from "./src/app/components/Header";
import ResturantMenu from "./src/app/components/ResturantMenu";
import Error from "./src/app/components/Error";
// for routing our page import createBrowserRouter and RouterProvider for providing router &
// Outlet for children component for nested routing
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./src/app/utils/userContext";

// login

// lazying loading
const Grocery = lazy(() => import("./src/app/components/Grocery"));

const AppLayout = () => {
  // authentication

  const {loggedInUser} = useContext(UserContext);
  const [userName, setUserInfo] = useState(loggedInUser);

  useEffect(() => {
    // Make an API call to get user data
    setTimeout(() => {
      const data = {
        name: "Manish Verma",
      };
      setUserInfo(data.name);
    }, 5000);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserInfo}}>
      <>
        {/* <UserContext.Provider value={{loggedInUser: "Elon Musk"}}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
        <Footer />
      </>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading groceries...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
