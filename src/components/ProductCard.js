import { useState } from "react";
import { productList } from "../utils/constant";
import Product from "./Product";

export const ProductCard = () => {
  // local state variable listOfProduct
  const [listOfProduct, setListOfProduct] = useState(productList);

  return (
    <div>
      <button
        onClick={() => {
          const filteredProduct = listOfProduct.filter(product => product.rating.rate >= 4);
          setListOfProduct(filteredProduct);
        }} style={{ marginTop: "10px" }}
      >
        Top rated product
      </button>

      <div className="product_card">
        {listOfProduct.map(product => {
          return <Product key={product.id} product={product} 
        />;
        })}
      </div>
    </div>
  );
};
