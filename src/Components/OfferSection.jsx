import { IoMdCart } from "react-icons/io";
import "../assets/stylesheets/OfferSection.css";

export const OfferSection = () => {
  return (
    <div className="offer-section flex container mx-auto my-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYY4i-snCwo8M8LRJ24eLXmGkqDDZDnBN2c_B-8whR-S7adYcnDn2ZHH418ioGylVjgeA&usqp=CAU"
        alt="image of slushies"
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
