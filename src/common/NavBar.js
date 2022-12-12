import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Products from "../pages/product/Products";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Searchfun from "./SearchFun";

export default function NavBar() {
  let navigate = useNavigate();
  const cartCount = useSelector((state) => state.product.length);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="display-3 text-center blog-header-logo navbar-brand fw-bolder fs-1">
            MY Collection
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/aboutus">
                  AboutUs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/constactus">
                  Contact
                </a>
              </li>

              <Searchfun />
            </ul>
            <div className="buttons">
              <a href="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>
                Login
              </a>
              <a href="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-2"> </i>
                Register
              </a>
              {cartCount > 0 ? (
                <Button
                  color="inherit"
                  onClick={() => {
                    localStorage.removeItem("isUserLogin");
                    return navigate("/myhome.in/cart");
                  }}
                >
                  <Badge color="secondary" badgeContent={cartCount}>
                    <ShoppingCartIcon />{" "}
                  </Badge>{" "}
                </Button>
              ) : null}
              {/* {cartCount > 0 ? (
                <a href="/myhome.in/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-2"></i>
                  <Badge color="secondary" badgeContent={cartCount}></Badge>
                </a>
              ) : null} */}
            </div>
            {/* <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
