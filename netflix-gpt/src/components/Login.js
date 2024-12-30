// create .js file then type rafce and tab
import React, {useState} from "react";
import Header from "./Header";
import {BACKGROUND_URL} from "../public/common/constant";
import {Link} from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND_URL}
          alt="logo"
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>
      <form className="w-4/12 p-12 absolute my-36 mx-auto right-0 left-0 bg-black bg-opacity-75 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-4 my-2 bg-black text-white border border-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
        )}

        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-4 my-2 bg-black text-white border border-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-2 bg-black text-white border border-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="p-3 my-2 bg-red-800 hover:bg-red-900 w-full rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center m-2 text-gray-500">OR</p>
        <button
          type="submit"
          className="p-3 my-2 bg-gray-600 bg-opacity-50 hover:bg-opacity-45 w-full rounded-md"
        >
          Use a sign-in code
        </button>
        <div className="text-center p-2">
          <Link to="/">Forgot password?</Link>
        </div>
        <div className="py-6 ">
          <span className="text-gray-500">
            {" "}
            {isSignIn ? "New to Netflix? " : "Already registered? "}{" "}
          </span>
          <Link
            to="/"
            className="font-bold"
            onClick={() => {
              setIsSignIn((prev) => !prev);
            }}
          >
            {isSignIn ? "Sign up now." : "Sign In"}
          </Link>
        </div>
        <div className="text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Link to="/" className="text-blue-700">
            Learn more.
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
