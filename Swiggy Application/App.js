import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/app/components/footer";
import Header from "./src/app/components/header";
import Body from "./src/app/components/body";
import About from "./src/app/components/About";
import Profile from "./src/app/components/ProfileClass";
import ResturantMenu from "./src/app/components/ResturantMenu";
import Error from "./src/app/components/Error";
// for routing our page import createBrowserRouter and RouterProvider for providing router &
// Outlet for children component for nested routing
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// login

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
