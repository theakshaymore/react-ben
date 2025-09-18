const PageCard = ({ product }) => {
  return (
    <div key={product.id}>
      <img
        src={product.image}
        alt={product.image}
        className="product-card-img"
      />
      <p>{product.price}</p>
    </div>
  );
};
export default PageCard;
