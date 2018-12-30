import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import AccountsPage from "./components/account/accounts-page";
import BankDetails from "./components/bank-details/bank-details";
import addAccount from "./components/account/add-account";
import Header from "./components/header/header";
import Account from "./components/account/account";
import accountOperation from "./components/operations/operations"

class App extends Component {
  componentDidMount() {
    console.log("app loaded!!!");
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div />
          <div>
            <Switch>
              <Route key="accounts" exact path="/accounts" component={AccountsPage} />
              <Route key="operations" path="/operations" component={accountOperation} />
              <Route
                key="bank-details"
                path="/bank-details"
                component={BankDetails}
              />
              <Route
                key="add-account"
                path="/add-account"
                component={addAccount}
              />
              <Route
                key="account"
                exact={true}
                path="/account/:id"
                component={Account}
              />
              {/* <Redirect from="/" to="/accounts" /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
