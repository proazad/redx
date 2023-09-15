import PropTypes from "prop-types";
const Item = ({item }) => {
  const { title, image, description } = item;
  return (
    <div className="card rounded-none text-center">
      <figure>
        <img src={image} alt={title} draggable="false" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-medium text-center">{title}</h2>
        <p> {description}</p>
      </div>
    </div>
  );
};
Item.propTypes = {
  item: PropTypes.object,
};
export default Item;

