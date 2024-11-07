import {Link} from "react-router-dom";
import foodFireLogo from "../public/assets/images/foodFireLogo.png";
import useOnlineStatus from "../hooks/useOnlineStatus";

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

  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <h2>{!isOnline ? "🔴" : "🟢 "} </h2>
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
              <Link to="/grocery">Grocery</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
