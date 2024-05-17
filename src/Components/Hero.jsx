import "../assets/stylesheets/Hero.css";
import "../assets/stylesheets/Buttons.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero--text">
        <h1>Taste Best Coffee</h1>
        <h4>Awaken your senses, one cup at a time. </h4>
        <p>
          Welcome where every visit is a journey through the aromatic world of
          exceptional coffee. Join us in savoring the finest blends and
          experiencing the warmth of our inviting ambiance. Start your day the
          right way, one cup at a time.
        </p>
        <div className="flex gap-4">
          <button className="primary-btn">Order Now</button>
          <button className="secondary-btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
