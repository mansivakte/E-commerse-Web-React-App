import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import NavBar from "./common/NavBar";
import { Footer } from "./common/Footer";
// import { Fragment } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/product/ProductDetails";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import myStore from "./store/store";
import ProductInCart from "./pages/product/CartItems";
import CartItems from "./pages/product/CartItems";
import Checkout from "./pages/product/Checkout";
import Products from "./pages/product/Products";

function App() {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <NavBar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/constactus" element={<Contact />}></Route>
          <Route path="/products/" element={<Products />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="productincart" element={<ProductInCart />}></Route>
          <Route path="/myhome.in/cart" element={<CartItems />}></Route>
          <Route path="/myhome.in/buy" element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
