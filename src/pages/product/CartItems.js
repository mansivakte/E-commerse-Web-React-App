import { useSelector } from "react-redux";
import style from "./CartItems.module.css";

const CartItems = () => {
  let amount = 0;

  const cartData = useSelector((state) => {
    console.log("state products", state.product);
    return state.product;
  });

  return (
    <>
      <h2>Shopping Cart</h2>

      <div className={style["cart-layout"]}>
        <div>
          {cartData.map((record) => {
            amount = amount + record.quantity * record.productPrice;

            return (
              <div>
                <div className={style["cartitem-style"]}>
                  {/* style={{ display: "flex", "justify-content": "space-evenly" }} */}

                  <div className={style["cart-style"]}>
                    <img
                      src={record.image}
                      alt="Card Img Name"
                      width="110px"
                      height={"150px"}
                    ></img>
                  </div>
                  <div className={style["cart-style"]}>
                    <p>Product Name: {record.productName}</p>
                    <p>Product Price: {record.productPrice}</p>
                    <p>Product quantity : {record.quantity}</p>
                  </div>

                  <div className={style["cart-style"]}>
                    <p> Amount: {record.quantity * record.productPrice}</p>
                  </div>
                </div>
                <hr></hr>
              </div>
            );
          })}
          <p className={style["total-amount"]}>
            <strong>Total Amount: {amount}</strong>
          </p>
        </div>
        <div>
          <h1>
            <strong>Buy Now</strong>
          </h1>
        </div>
      </div>
    </>
  );
};
export default CartItems;
/* { 
      <div>
        {cartData.map((record) => {
          console.log("Records", record);
          amount = amount + record.quantity * record.productPrice;

          return (
            <>
              <div
                style={{ display: "flex", "justify-content": "space-evenly" }}
              >
                <img
                  src={record.images[0]}
                  alt="Card Img Name"
                  width="300px"
                  height={"300px"}
                ></img>
                <p>Product Name: {record.productName}</p>
                <p>Product quantity : {record.quantity}</p>
                <p>Product Price: {record.productPrice}</p>
                <p>Amount: {record.quantity * record.productPrice}</p>
              </div>
              <hr></hr>
            </>
          );
        })}
      </div>
      <div>
        <p>Total Amount: {amount}</p>
      </div> */
