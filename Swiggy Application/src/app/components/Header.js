import {Link} from "react-router-dom";
import foodFireLogo from "../public/assets/images/foodFireLogo.png";
import useOnlineStatus from "../hooks/useOnlineStatus";
import {useContext} from "react";
import UserContext from "../utils/userContext";
import {useSelector} from "react-redux";

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
      </a>
    </>
  );
};
const Header = () => {
  const isOnline = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  console.log(cartItems);
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <h4> {!isOnline ? "🔴" : "🟢 "} </h4>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <strong>
                <Link to="/cart">Cart ({cartItems.length} items)</Link>
              </strong>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/login">
                <strong>{loggedInUser}</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
