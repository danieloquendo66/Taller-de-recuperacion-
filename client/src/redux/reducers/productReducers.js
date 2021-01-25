import { OBTENER_PRODUCTOS } from "../types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
