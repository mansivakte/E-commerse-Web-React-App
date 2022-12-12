import { Fragment } from "react";
import Background from "./Background";
import Products from "./product/Products";
import UncontrolledExample from "../common/Slider";

const Home = (props) => {
  return (
    <Fragment>
      <UncontrolledExample />
      {/* <Background /> */}
      <Products />
    </Fragment>
  );
};

export default Home;
