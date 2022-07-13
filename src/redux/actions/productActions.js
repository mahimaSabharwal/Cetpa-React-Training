import { ActionType } from "../contants/action-types";

export const storeProducts = (products) => {
  return {
    type: ActionType.STORE_PRODUCTS,
    payload: products,
  };
};
