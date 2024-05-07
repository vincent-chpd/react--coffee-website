import "../assets/stylesheets/Hero.css";
import "./Buttons.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero--text">
        <h1>Taste Best Coffee</h1>
        <h4>Sip joy, savour moments, love coffee </h4>
        <p>
          Welcome to **insert name** cafe, where passion meets perfection in
          every cup. Explore our exquisite range of handpicked blends and
          single-origin beans.
        </p>
        <div className="hero--btn">
          <button className="primary-btn">Order Now</button>
          <button className="secondary-btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
