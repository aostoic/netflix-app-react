import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import dotenv from "dotenv";
dotenv.config();
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/details">
            <Details />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
