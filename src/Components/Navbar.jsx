import "../assets/stylesheets/Navbar.css";
import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar text-primary">
      <img
        src="https://t4.ftcdn.net/jpg/05/14/51/79/360_F_514517927_dXLi1DauUmrCaE3AkElsVgJ1jaYZMcSA.jpg"
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
