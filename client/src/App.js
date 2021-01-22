import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SearchBar } from "./components";
import { Catalogo } from "./containers";
import generateStore from "./store.js";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>
        <SearchBar />
        <Switch>
          <Route exact path="/catalogo" component={Catalogo} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
