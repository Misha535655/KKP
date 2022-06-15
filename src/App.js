import React, { Component } from "react";
import "./style.css";
import {
  Index,
  Info,
  Helper,
  Contacts,
  Magazine,
  Maps,
  Venki,
  Truna,
  Krest,
  Mogili,
  Dostavka,
  Katafalk,
  Morg,
  Ather,
  Tovar,
  Cart,
} from "./pages/import";
import { Header, Menu } from "./components/import";
import { Route, Redirect } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route basename="/KKP-Builds" />
        <Header />
        <Menu />
        <Route path="/" component={Index} exact />
        <Route path="/info" component={Info} exact />
        <Route path="/Maps" component={Maps} exact />
        <Route path="/Helper" component={Helper} exact />
        <Route path="/Contacts" component={Contacts} exact />
        <Route path="/Magazine" component={Magazine} exact />
        <Route path="/Venki" component={Venki} exact />
        <Route path="/Truna" component={Truna} exact />
        <Route path="/Krest" component={Krest} exact />
        <Route path="/Mogili" component={Mogili} exact />
        <Route path="/Dostavka" component={Dostavka} exact />
        <Route path="/Katafalk" component={Katafalk} exact />
        <Route path="/Morg" component={Morg} exact />
        <Route path="/Ather" component={Ather} exact />
        <Route path="/Tovar" component={Tovar} exact />
        <Route path="/Cart" component={Cart} exact />
      </div>
    );
  }
}
