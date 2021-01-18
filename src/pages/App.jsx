import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Pages */
import Home from "./Home.jsx";
import Result from './Result.jsx'

/* Componentes */
import Navbar from "../components/Navbar.jsx"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/result/" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
