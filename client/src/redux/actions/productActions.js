import axios from "axios";

import { OBTENER_PRODUCTOS } from "../types";

// export const obtenerProductos = (keyword, offset = 0) => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       `http://localhost:4000/api/search?q=${keyword}&offset=${offset}&limit=20`
//     );

//     dispatch({
//       type: OBTENER_PRODUCTOS,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

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
