import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Catalogo } from "./containers";
import generateStore from "./store.js";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Catalogo} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
