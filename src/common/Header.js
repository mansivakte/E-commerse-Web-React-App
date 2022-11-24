import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userEvent from "@testing-library/user-event";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Register from "../pages/Register";
import CartItems from "../pages/product/CartItems";
import SearchFun from "./SearchFun";
import style from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Header(props) {
  let navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const loginUser = useSelector((state) => state.user.name);

  const cartCount = useSelector((state) => state.product.length);

  // const countOfItems = useSelector((state) => state.cart.cart);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ my: 2 }}>
        MyStore
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Fragment>
      <Box className={style["header-style"]} sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton> */}
            <Typography
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <h2 className={style["wlc-style"]}> MyStore</h2>
            </Typography>
            <SearchFun />

            {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box> */}
            <Button
              color="inherit"
              onClick={() => {
                return navigate("/register");
              }}
            >
              <i> Register</i>
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("isUserLogin");
                return navigate("/login");
              }}
            >
              <i>Log Out</i>
            </Button>
            <h3 className={style["wlc-style"]}> Welcome {loginUser} </h3>
            {cartCount > 0 ? (
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.removeItem("isUserLogin");
                  return navigate("/cartitems");
                }}
              >
                <Badge color="secondary" badgeContent={cartCount}>
                  <ShoppingCartIcon />{" "}
                </Badge>{" "}
              </Button>
            ) : null}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          {/* <Typography>CONTAINER</Typography> */}
        </Box>
      </Box>

      {/* <div>
        <img
          className={style["main-image"]}
          src="Amazon-Great-Indian-Festival.jpg"
          alt="sale"
        ></img>
      </div> */}
    </Fragment>
  );
}

export default Header;
