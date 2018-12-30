import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import accountActivities from './account-activities'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Account extends Component {
  constructor(props) {
    super(props);
    const fileName = "debug.log";
    this.state = {
      id: this.props.match.params.id,
      account: null,
      download: `http://localhost:2200/operations/export_operations/${fileName}`
    };

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:2200/accounts/${this.state.id}`)
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({
          account: result
        });
      });
  }

  goBack() {
    console.log(this.props.history);
    this.props.history.push("/accounts");
  }

  render() {
    const { classes } = this.props;
    return (

    
      <div className="container">
        <div>
          {/* <Link to={`/account/${this.state.id}/activities`}> Account Activities </Link> */}
        </div>
        <div>
          {/* <Route
            key="activities"
            path={`${this.state.id}/activities`}
            component={accountActivities}
          /> */}
              {/* <Route
                key="account"
                exact={true}
                path="/account/:id/activities"
                component={accountActivities}
              /> */}
        </div>
        <div className="row">
          <button onClick={this.goBack} className="btn btn-primary">
            {" "}
            &lt;{" "}
          </button>

          <h2 style={{ background: "lightblue", height: "46" }}>
            Account Id: {this.state.id}
            {this.state.account && (
              <div>balance:{this.state.account.balance}</div>
            )}
            {!this.state.account && <div>loading...</div>}
          </h2>
        </div>
        <div class="row">
        {/* activities here */}
        <h3>account {this.state.id} activities</h3>



        </div>
        <br />
        <a href={this.state.download}>download log file </a>
      </div>
    );
  }
}

export default withStyles(styles)(Account);
