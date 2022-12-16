import { Fragment } from "react";
import Background from "./Background";
import Products from "./product/Products";
import { Footer } from "../common/Footer";

const Home = (props) => {
  return (
    <Fragment>
      <Background />

      <Products />
      <Footer />
    </Fragment>
  );
};

export default Home;
