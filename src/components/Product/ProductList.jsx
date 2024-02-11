import { ProductCard } from "./ProductCard";

export const Product = ({ products }) => {
  return (
    <>
      <div className="product-header">
        <h1>Products</h1>
        <hr />
      </div>
      <div className="product-conatiner">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Product;
