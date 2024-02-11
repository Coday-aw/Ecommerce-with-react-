import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Product/ProductCard.css";
import ProductCard from "../Product/ProductCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://js2-ecommerce-api.vercel.app/api/products"
      );
      setProducts(res.data.slice(0, 9));
      console.log(products);
    };
    getProducts();
  }, []);
  return (
    <>
      <div className="product-header">
        <h1>Best Seller</h1>
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
export default BestSeller;
