const PageCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-card-img"
      />
      <p className="product-title">{product.title}</p>
    </div>
  );
};
export default PageCard;
