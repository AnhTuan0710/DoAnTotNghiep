import { combineReducers } from "redux";
import auth from "./auth";
import order from "./order";
import { Auth } from "../../dataType/auth";
import { OrderRespose } from "../../dataType/order";
import cart from "./cart";
import { CartRequest } from "../../dataType/cart";
;

export type RootState = {
  auth: Auth,
  order: OrderRespose[],
  cart: CartRequest
}
const rootReducers = combineReducers({
  auth,
  order,
  cart
});

export default rootReducers;