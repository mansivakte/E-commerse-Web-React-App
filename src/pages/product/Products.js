import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import style from "./Product.module.css";
import Loading from "../Loading";
import UncontrolledExample from "../../common/Slider";

function Products() {
  const dispatch = useDispatch();
  const [Product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState("");

  // const productList = useselecor()

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((parameters) => {
        console.log("parameters data", parameters.data);
        setProduct(parameters.data);
        setSearchApiData(parameters.data);
        parameters.data.map((records) => {
          // console.log("record Id", records.id);
        });
        setIsLoading(false);
        // dispatch product reducer la
        // console.log("parameters", parameters);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <UncontrolledExample />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="diaplay-6 fw-bolder text-center">Latest Products</h1>
            <hr></hr>
          </div>
        </div>
        <div className={style.body}>
          {isLoading ? <Loading /> : <ProductCard data={Product} />}
        </div>
      </div>
    </div>
  );
}

export default Products;

// const handleFilter = (e) => {
//   if (e.target.value == "") {
//     setProduct(searchApiData);
//   } else {
//     const filterResult = searchApiData.filter(
//       (item) =>
//         item.title.toLowerCase().includes(e.target.value) ||
//         item.category.name.toLowerCase().includes(e.target.value) ||
//         item.description.toLowerCase().includes(e.target.value)
//     );
//     setProduct(filterResult);
//   }
//   setFilterVal(e.target.value);
// };
