import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  let navigate = useNavigate();

  const moreDetailsHandler = (id) => {
    console.log("more details");
    return navigate(`/product/${id}`);
  };

  // console.log(props, "props ");
  return props.data.map((record) => {
    return (
      <Button
        onClick={() => {
          moreDetailsHandler(record.id);
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            display: "inline-block",
            margin: "15px",
          }}
        >
          <img
            src={record.images[0]}
            alt="Card Img Name"
            width="300px"
            height={"300px"}
          />
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              class="fw-bolder text-center fs-6"
            >
              {record.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              class="card-text lead fe-bold"
            >
              $.{record.price}
            </Typography>
          </CardContent>
          <CardActions>
            <button
              onClick={() => {
                moreDetailsHandler(record.id);
              }}
              // size="small"
              type="button"
              class="btn btn-secondary"
            >
              More Details
            </button>
          </CardActions>
        </Card>
        ;
      </Button>
    );
  });
}

export default ProductCard;

{
  /* <div className="col-md-3 d-flex">
<div class="card">
  <img
    src={record.images[0]}
    class="card-img-top"
    alt="product.img"
  ></img>
  <div class="card-body">
    <h5 class="cart-title">{record.title}</h5>
    <p class="card-text"> $.{record.price}</p>
    <button
      class="btn btn-primary"
      onClick={() => {
        moreDetailsHandler(record.id);
      }}
      size="small"
    >
      More Details
    </button>
  </div>
</div>
</div> */
}
