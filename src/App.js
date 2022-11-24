import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
// import Footer from "./common/Footer";
// import { Fragment } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/product/ProductDetails";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import myStore from "./store/store";
import ProductInCart from "./pages/product/CartItems";
import CartItems from "./pages/product/CartItems";
import Checkout from "./pages/product/Checkout";

function App() {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/details/:id" element={<ProductDetails />}></Route>
          <Route path="productincart" element={<ProductInCart />}></Route>
          <Route path="/cartitems" element={<CartItems />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
