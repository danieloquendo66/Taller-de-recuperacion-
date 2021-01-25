import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button } from "@material-ui/core/";

import { SearchBar } from "../components";
import { obtenerProductos } from "../redux/actions";
import { ProductCard } from "../components";

export const Catalogo = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);
  const [keyword, setKeyword] = useState("");
  const [state, setState] = useState([]);

  useEffect(() => {
    dispatch(obtenerProductos(keyword));

    setState(products);
    setState(products.filter((product) => product.condition === "new"));
  }, [keyword]);

  return (
    <div className="container-fluid">
      <SearchBar setKeyword={setKeyword} products={products} />
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
          <Button variant="contained" color="secondary">
            Anterior
          </Button>
          <Button variant="contained" color="primary">
            Siguiente
          </Button>
        </div>
      ) : null}
    </div>
  );
};
