import { ActionType } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.STORE_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
