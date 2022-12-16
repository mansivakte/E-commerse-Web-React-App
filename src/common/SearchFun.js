import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../pages/product/ProductCard";

const Searchfun = () => {
  const [record, setRecord] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((parameters) => {
        setRecord(parameters.data);
        setSearchApiData(parameters.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleFilter = (e) => {
    if (e.target.value == "") {
      setRecord(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value) ||
          item.description.toLowerCase().includes(e.target.value) ||
          item.category.name.toLowerCase().includes(e.target.value)
      );
      setRecord(filterResult);
    }
    setFilterVal(e.target.value);
  };

  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={filterVal}
          onInput={(e) => handleFilter(e)}
        />
      </form>
    </div>
  );
};
export default Searchfun;
