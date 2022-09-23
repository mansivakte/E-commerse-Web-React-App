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
    return navigate(`/details/${id}`);
  };

  // console.log(props, "props ");
  return props.data.map((record) => {
    return (
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
          <Typography gutterBottom variant="h5" component="div">
            {record.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $.{record.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              moreDetailsHandler(record.id);
            }}
            size="small"
          >
            More Details
          </Button>
        </CardActions>
      </Card>
    );
  });
}

export default ProductCard;
