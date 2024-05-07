import "../assets/stylesheets/Navbar.css";
import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar text-primary">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/474px-Starbucks_Corporation_Logo_2011.svg.png?20230513193844"
        alt="Logo"
        id="nav--logo"
      />

      <ul className="nav--links">
        <li>Home</li>
        <li>Gift</li>
        <li>Order</li>
        <li>Pay</li>
        <li>Store</li>
      </ul>

      <div className="nav--search">
        <MdLocationPin />
        <h3>Find Store</h3>
        <input type="text" />
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
