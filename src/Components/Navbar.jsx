import "../assets/stylesheets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://t4.ftcdn.net/jpg/05/14/51/79/360_F_514517927_dXLi1DauUmrCaE3AkElsVgJ1jaYZMcSA.jpg"
        alt="Logo"
        id="logo"
      />
      <ul className="flex">
        <li>Home</li>
        <li>Gift</li>
        <li>Order</li>
        <li>Pay</li>
        <li>Store</li>
      </ul>
    </nav>
  );
};

export default Navbar;
