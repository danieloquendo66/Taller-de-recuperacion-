import axios from "axios";

import {
  OBTENER_PRODUCTOS,
  MAYOR,
  MENOR,
  NUEVO,
  USADO,
  MAS,
  MENOS,
} from "../types";

export function obtenerProductos(keyword, offset = 0) {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/search?q=${keyword}&offset=${offset}`
      );
      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const filtrarProductos = (key) => (dispatch) => {
  switch (key) {
    case MAYOR:
      dispatch({
        type: MAYOR,
      });
      break;
    case MENOR:
      dispatch({
        type: MENOR,
      });
      break;

    case NUEVO:
      dispatch({
        type: NUEVO,
      });
      break;

    case USADO:
      dispatch({
        type: USADO,
      });
      break;
    default:
      break;
  }
};

export const aumetarReducir = (key) => (dispatch) => {
  switch (key) {
    case "+":
      dispatch({
        type: MAS,
      });
      break;
    case "-":
      dispatch({
        type: MENOS,
      });
      break;
    default:
      return;
  }
};
