import PropTypes from "prop-types";
const Service = ({ service }) => {
  const { title, image, description } = service;
  return (
    <div className="card rounded-none">
      <figure>
        <img src={image} alt={title} draggable="false" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p> {description}</p>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object,
};
export default Service;
