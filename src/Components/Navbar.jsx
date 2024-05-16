import "../assets/stylesheets/Navbar.css";
import { MdLocationPin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar text-primary">
      <div className="flex items-centere gap-10">
        <img
          src="https://cdn.vectorstock.com/i/500p/48/68/your-logo-here-placeholder-symbol-vector-34954868.jpg"
          alt="Logo"
          id="nav--logo"
        />

        <ul className="nav--links">
          <li>Home</li>
          <li>Menu</li>
          <li>Order</li>
          <li>Pay</li>
          <li>Store</li>
        </ul>
      </div>

      <div className="nav--search">
        <MdLocationPin />
        <h5>Find Store</h5>
        <input type="text" />
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
