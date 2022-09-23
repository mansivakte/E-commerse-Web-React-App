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
import axios from "axios";

function Register() {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 400,
    margin: "20px auto",
    backgroundColor: "#F5F5F5",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const firstNameChangeHadler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHadler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHadler = (event) => {
    setEmail(event.target.value);
  };
  const addressChangeHadler = (event) => {
    setAddress(event.target.value);
  };
  const phoneChangeHadler = (event) => {
    setPhone(event.target.value);
  };
  const userNameChangeHadler = (event) => {
    setUserName(event.target.value);
  };
  const passwordChangeHadler = (event) => {
    setPassword(event.target.value);
  };

  const registerHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: { firstname: firstname, lastname: lastname },
        email: email,
        phone: phone,
        address: { city: address },
        username: userName,
        password: password,
      })
      .then((parameters) => {
        console.log(parameters, "parameter in post axios");
        localStorage.setItem("isUserLogin", 1);
        return;
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Register</h2>
        </Grid>

        <form onSubmit={registerHandler}>
          <TextField
            label="First Name"
            placeholder="Enter first name"
            variant="outlined"
            type="text"
            value={firstname}
            onChange={firstNameChangeHadler}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            placeholder="Enter last name"
            variant="outlined"
            type="text"
            value={lastname}
            onChange={lastNameChangeHadler}
            fullWidth
            required
          />

          <TextField
            label="Email"
            placeholder="Enter Email ID"
            variant="outlined"
            type="email"
            value={email}
            onChange={emailChangeHadler}
            fullWidth
            required
          />
          <TextField
            label="Address"
            placeholder="Enter address"
            variant="outlined"
            type="text"
            value={address}
            onChange={addressChangeHadler}
            fullWidth
          />
          <TextField
            label="Phone"
            placeholder="Enter phone"
            type="number"
            value={phone}
            onChange={phoneChangeHadler}
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="UserName"
            placeholder="Enter username"
            variant="outlined"
            type="text"
            value={userName}
            onChange={userNameChangeHadler}
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={passwordChangeHadler}
            variant="outlined"
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
export default Register;
