import { CartRequest } from "../../dataType/cart";
import { CLEAR_CART, UPDATE_CART } from "../type";

export const updateCart = (data: CartRequest) => ({
  type: UPDATE_CART,
  payload: data
})

export const clearCart = () => ({
  type: CLEAR_CART
})