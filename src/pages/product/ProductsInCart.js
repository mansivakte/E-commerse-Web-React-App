import { useSelector } from "react-redux";

const ProductInCart = () => {
  let amount = 0;

  const cartData = useSelector((state) => {
    return state.product;
  });

  return (
    <>
      <p>List of products in cart</p>
      <div>
        {cartData.map((record) => {
          amount = amount + record.quantity * record.productPrice;

          return (
            <>
              <div
                style={{ display: "flex", "justify-content": "space-evenly" }}
              >
                <p>Product Name: {record.productName}</p>
                <p>Product quantity : {record.quantity}</p>
                <p>Product Price: {record.productPrice}</p>
                <p>Amount: {record.quantity * record.productPrice}</p>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <p>Total Amount: {amount}</p>
      </div>
    </>
  );
};
export default ProductInCart;
