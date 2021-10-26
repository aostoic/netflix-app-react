import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import SearchContext from "./Search/context";
import { useSearch } from "../hooks/useSearch";
import DetailsMovie from "./DetailsMovie";

const Routes = () => {
  const searchText = useSearch();

  return (
    <div className="background-app">
      <SearchContext.Provider value={searchText}>
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={DetailsMovie} exact path="/details" />
          </Switch>
        </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
};

export default Routes;
