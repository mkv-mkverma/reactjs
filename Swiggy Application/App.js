import React, {lazy, Suspense} from "react";
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

// login

// lazying loading
const Grocery = lazy(() => import("./src/app/components/Grocery"));

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
