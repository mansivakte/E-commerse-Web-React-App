import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";

const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((parameter) => {
        setDetails(parameter.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading.....!</h1>
      ) : (
        <div className={style.productdetails}>
          <div>
            <img
              src={details.images[0]}
              alt="Card Img Name"
              width="300px"
              height={"300px"}
            />
          </div>
          <div>
            <h3>Product Details</h3>
            <p>Product Id : {details.id}</p>
            <p>Product Title: {details.title}</p>
            <p>Product Price: {details.price}</p>
            <p>Product Category Name: {details.category.name}</p>
            <p>Product Description: {details.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
