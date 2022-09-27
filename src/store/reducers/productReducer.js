import { PRODUCTS } from "../constant";

const initial_state = [];

const productReducer = (state = initial_state, action) => {
  switch (action.type) {
    case PRODUCTS: {
      const newState = [...state];

      const foundRecord = newState.find(
        (record) => action.productId == record.productId
      );

      // return record;
      if (foundRecord) {
        // update code
        foundRecord.quantity = action.quantity + foundRecord.quantity;

        const updatedList = newState.map((item) => {
          if (item.productId == foundRecord.productId) {
            return foundRecord;
          }
          return item;
        });
        return updatedList;
      } else {
        // insert code
        newState.push({
          quantity: action.quantity,
          productId: action.productId,
          productName: action.productName,
          productPrice: action.productPrice,
        });
      }
      return newState;
    }
    default:
      return state;
  }
};

export default productReducer;
