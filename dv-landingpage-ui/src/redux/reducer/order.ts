import { OrderRespose } from "../../dataType/order"
import { SAVE_ORDER } from "../type";

const initInvoice: OrderRespose[] = []

export default function order(state = initInvoice, action: any) {
  const data = action.payload
  switch (action.type) {
    case SAVE_ORDER:
      return data;
    default:
      return state;
  }
}