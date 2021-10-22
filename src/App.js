import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import ReactDOM from "react-dom";

import React, { useLayoutEffect } from "react";

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    console.log("top");
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
