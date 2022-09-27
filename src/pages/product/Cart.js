import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "../../store/constant";

export default function Cart(props) {
  console.log("PROPS.data", props.data);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>Add To Cart</h4>
      <div>
        <Button>
          <ButtonGroup>
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              <Badge color="secondary" badgeContent={itemCount}>
                <ShoppingCartIcon />
              </Badge>
            </Button>
            <Button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Button>
        <Button
          onClick={() => {
            dispatch({
              type: PRODUCTS,
              quantity: itemCount,
              productId: props.data.id,
              productName: props.data.title,
              productPrice: props.data.price,
            });
          }}
        >
          Add To Cart
        </Button>
        <Button variant="contained">BUY NOW</Button>
      </div>
    </div>
  );
}
