import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";

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

  const handleFilter = (e) => {
    if (e.target.value == "") {
      setProduct(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value) ||
          item.category.name.toLowerCase().includes(e.target.value) ||
          item.description.toLowerCase().includes(e.target.value)
      );
      setProduct(filterResult);
    }
    setFilterVal(e.target.value);
  };

  return (
    <div>
      {isLoading ? <h1>Loading.....!</h1> : <ProductCard data={Product} />}
      {/* <div className={style["search-box-style"]}>
        <input
          className={style.searchbox}
          placeholder="Search.."
          value={filterVal}
          onInput={(e) => handleFilter(e)}
        ></input>
      </div> */}
    </div>
  );
}

export default Products;
