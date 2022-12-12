import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";
import Cart from "./Cart";

const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  // console.log("params", params);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((parameter) => {
        setDetails(parameter.data);
        // console.log("Parameters", parameter);
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
          <div className="col-md-6 ">
            <img
              src={details.images[0]}
              alt="Card Img Name"
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              {details.title}
              <span>
                <p className="lead">({details.category.name})</p>
              </span>
            </h1>
            <h2 className="display-6 fw-bold my-4">$.{details.price}</h2>
            <p className="lead">{details.description}</p>
            <Cart data={details} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
{
  /* <div className="col-md-6">
{" "}
<img
  src={details.images[0]}
  alt="Card Img Name"
  width="400px"
  height={"400px"}
/>
</div>
<div className="col-md-6">
<h1 className="display-5">{details.title}</h1>
<p className="lead fw-bolder">
  Rating <i className="fa fa-start"></i>
</p>
<h3 className="display-6 fw-bold my-4"> $.{details.price}</h3>
<p className="lead">{details.category.name}</p>
<p className="lead">{details.description}</p>
</div> */
}
