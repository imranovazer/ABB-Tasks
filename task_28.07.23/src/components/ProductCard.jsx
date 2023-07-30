import PropTypes from "prop-types";

class ProductCard extends React.Component {
  render() {
    const { name, price, imagePath, sku, color } = this.props.product;

    return (
      <div className="product-card">
        <img src={imagePath} alt={name} />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>SKU: {sku}</p>
        <p>Color: {color}</p>
        {/* Add the Add to Cart and Favorites functionality here */}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
