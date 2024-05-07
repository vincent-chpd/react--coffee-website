import "../assets/stylesheets/Hero.css";
import "../assets/stylesheets/Buttons.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero--text">
        <h1>Summer at first sip</h1>
        <h4>Say hello to fun new flavours and classic favourites </h4>
        <div className="hero--btn">
          <button>Order Now</button>
        </div>
      </div>
      <img
        className="hero--img"
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-91829.jpg"
        alt="images of ice coffees"
      />
    </div>
  );
};

export default Hero;
