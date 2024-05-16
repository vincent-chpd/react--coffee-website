import { IoMdCart } from "react-icons/io";
import "../assets/stylesheets/OfferSection.css";

export const OfferSection = () => {
  return (
    <div className="offer-section container mx-auto my-10">
      <img
        src="https://sohocoffee.com/wp-content/uploads/bb-plugin/cache/Blog-Post-Image-Template-3-landscape.png"
        alt="image of slushies"
        className="offer--img"
      />
      <div className="offer--text">
        <h2>Lastest Offerings</h2>
        <h3>Get 50% Off On Frozen Refreshers</h3>
        <h4>
          Enjoy <strong>50% off</strong> on our delicious Frozen Refreshers!
          Dive into a flavour experience that everyone deserve to taste.
        </h4>
        <div>
          <button className="flex primary-btn">
            <IoMdCart />
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
