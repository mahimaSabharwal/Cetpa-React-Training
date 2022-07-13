import { combineReducers } from "redux";
import { productReducer } from "./storeProductsReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
});

export default rootReducer;
