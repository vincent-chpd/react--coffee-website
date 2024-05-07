import "../assets/stylesheets/Card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ img, title }) => {
  return (
    <div className="card-container">
      <img src={img} alt="" />
      <h4>{title}</h4>
    </div>
  );
};
