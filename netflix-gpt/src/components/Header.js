import React from "react";
import {LOGO_URL, USER_DEFAULT_ICON} from "../public/common/constant";
import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => {
    return store.user;
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        console.error("An error occurred during sign-out:", error);
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 z-20 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex px-4">
          <img
            src={USER_DEFAULT_ICON}
            alt="user-icon"
            className="w-12 h-12 p-2"
          />
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
