import {
  OBTENER_PRODUCTOS,
  MAYOR,
  MENOR,
  NUEVO,
  USADO,
  MAS,
  MENOS,
} from "../types";

const initialState = {
  products: [],
  menor: false,
  mayor: false,
  nuevo: false,
  usado: false,
  contador: 0,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        products: action.payload,
      };
    case MAYOR:
      return {
        ...state,
        mayor: !state.mayor,
      };

    case MENOR:
      return {
        ...state,
        menor: !state.menor,
      };

    case NUEVO:
      return {
        ...state,
        nuevo: !state.nuevo,
      };

    case USADO:
      return {
        ...state,
        usado: !state.usado,
      };

    case MAS:
      return {
        ...state,
        contador: (state.contador += 20),
      };

    case MENOS:
      return {
        ...state,
        contador: state.contador >= 20 ? (state.contador += 20) : 0,
      };

    default:
      return state;
  }
};
