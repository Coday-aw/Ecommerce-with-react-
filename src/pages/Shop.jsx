import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/features/products/productSlice";
import ProductList from "../components/Product/ProductList";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  if (error) return <h1>{error}</h1>;

  return (
    <div className="page-container">
      <ProductList products={products} />
    </div>
  );
}
export default Shop;
