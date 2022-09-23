import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [Product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((parameters) => {
        // console.log(parameters.data, "parameters data");
        setProduct(parameters.data);
        setIsLoading(false);
        // console.log("parameters", parameters);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <h2>Product Component</h2>
      {isLoading ? <h1>Loading.....!</h1> : <ProductCard data={Product} />}
    </>
  );
}

export default Products;
