import { useState, useEffect } from "react";
import axios from "axios";
import style from "./SearchFun.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchFun = () => {
  const [record, setRecord] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((params) => {
        console.log("Params Data", params.data);
        setRecord(params.data);
        setSearchApiData(params.data);
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
    <div className={style["search-box-style"]}>
      <input
        className={style.searchbox}
        placeholder="Search.."
        value={filterVal}
        onInput={(e) => handleFilter(e)}
      ></input>
    </div>
  );
};
export default SearchFun;
