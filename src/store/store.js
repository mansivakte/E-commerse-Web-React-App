import { combineReducers, createStore } from "redux";

import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: loginReducer,
});

const store = createStore(rootReducer);

export default store;
