import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button } from "@material-ui/core/";

import { SearchBar } from "../components";
import {
  obtenerProductos,
  filtrarProductos,
  aumetarReducir,
} from "../redux/actions";
import { ProductCard } from "../components";
import { NUEVO, USADO, MAYOR, MENOR } from "../redux/types";

export const Catalogo = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  const menor = useSelector((store) => store.products.menor);
  const mayor = useSelector((store) => store.products.mayor);
  const nuevo = useSelector((store) => store.products.nuevo);
  const usado = useSelector((store) => store.products.usado);
  const contador = useSelector((store) => store.products.contador);

  const [keyword, setKeyword] = useState("");
  const [state, setState] = useState([]);

  useEffect(() => {
    dispatch(obtenerProductos(keyword, contador));
    setState(products);
    if (menor) {
      if (mayor) {
        dispatch(filtrarProductos(MAYOR));
        document.getElementById("mayor").checked = 0;
      }
      setState(products.sort((a, b) => a.price - b.price));
    }
    if (mayor) {
      if (menor) {
        dispatch(filtrarProductos(MENOR));
        document.getElementById("menor").checked = 0;
      }
      setState(products.sort((a, b) => b.price - a.price));
    }

    if (nuevo) {
      if (usado) {
        dispatch(filtrarProductos(USADO));
        document.getElementById("usado").checked = 0;
      }
      setState(products.filter((producto) => producto.condition === "new"));
    }

    if (usado) {
      if (nuevo) {
        dispatch(filtrarProductos(NUEVO));
        document.getElementById("nuevo").checked = 0;
      }
      setState(products.filter((producto) => producto.condition === "used"));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, menor, mayor, nuevo, usado, contador]);

  return (
    <div className="container-fluid">
      <SearchBar setKeyword={setKeyword} />
      <div className="container m-auto">
        <Grid container spacing={3}>
          {state.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                img={product.thumbnail}
                condition={product.condition}
                stock={product.available_quantity}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <hr />
      {products.length !== 0 ? (
        <div className="d-flex justify-content-around mb-5">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(aumetarReducir("-"))}
          >
            Anterior
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(aumetarReducir("+"))}
          >
            Siguiente
          </Button>
        </div>
      ) : null}
    </div>
  );
};
