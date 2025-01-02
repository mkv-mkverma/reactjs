import React, {useEffect} from "react";
import {LOGO_URL, USER_DEFAULT_ICON} from "../public/common/constant";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
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

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

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
          <button type="button" className="text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
