import {Link} from "react-router-dom";
import foodFireLogo from "../public/assets/images/foodFireLogo.png";

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
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
