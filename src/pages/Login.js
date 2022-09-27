import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ADD_USER, ADD_PRODUCTS, LOGIN_USER } from "../store/constant";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // const productList = useSelector((state) => state.product.productList);
  //
  // useEffect(() => {
  //   if (!productList.length) {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((responce) => {
  //         console.log("responce", responce.data);
  //         dispatch({
  //           type: ADD_PRODUCTS,
  //           products: responce.data,
  //         });
  //       });
  //   }
  // }, []);

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const userNameChangeHadler = (event) => {
    setUserName(event.target.value);
  };

  useEffect(() => {}, []);

  const passwordChangeHadler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: userName,
        password: password,
      })
      .then((parameters) => {
        setLoading(false);
        dispatch({
          type: LOGIN_USER,
          name: userName,
          token: parameters.data.token,
        });
        return navigate("/home");
      })
      .catch(() => {
        setLoading(false);
        setShowLoginError(true);
      });
  };

  useEffect(() => {
    const loginStatus = localStorage.getItem("isUserLogin");
    if (loginStatus) {
      window.location = "/home";
    }
  }, []);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Login</h2>
          {showLoginError ? <p>Invalid Username or password</p> : null}
        </Grid>

        <form onSubmit={loginHandler}>
          <TextField
            label="username"
            placeholder="Enter username"
            variant="outlined"
            fullWidth
            required
            value={userName}
            onChange={userNameChangeHadler}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={passwordChangeHadler}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            disabled={loading}
          >
            {loading ? "Loading" : "Login"}
          </Button>
        </form>
        <Typography>
          <Link href="">Forgot password ?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
// {
//   isLoading ? <h1>Loading.....!</h1> : <ProductCard data={Product} />;
// }
