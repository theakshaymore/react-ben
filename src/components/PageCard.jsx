const PageCard = ({ product }) => {
  return (
    <div>
      <div key={product.id}>
        <img src={product.thumbnailUrl} alt={product.title} />
        <p>{product.title}</p>
      </div>
    </div>
  );
};
export default PageCard;
