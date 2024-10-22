import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/app/components/footer";
import Header from "./src/app/components/header";
import Body from "./src/app/components/body";
// Header
// Footer
// Body
// About
// Error
// Contact
// login
// ResturantMenu

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
