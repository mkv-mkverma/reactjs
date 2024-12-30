import React from "react";
import {LOGO_URL} from "../public/common/constant";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 z-20">
      <img className="w-44" src={LOGO_URL} alt="logo" />
    </div>
  );
};

export default Header;
