import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { LandingPage, NotFound } from "./components/";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import xadia from "./reducers/";

let store = createStore(xadia);

class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
