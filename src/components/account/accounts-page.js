import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroller";

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

class AccountsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { accounts: [], skip: 0, take: 20, loadMore: true };
    this.getAccounts = this.getAccounts.bind(this);
  }

  componentDidMount() {
    // fetch("http://10.103.50.39:2200/accounts/0/10")
    //   .then(result => {
    //     return result.json();
    //   })
    //   .then(result => {
    //     this.setState({
    //       accounts: result
    //     });
    //   });
  }

  getAccounts() {
    fetch(
      `http://localhost:2200/accounts/${this.state.skip}/${this.state.take}`
    )
      .then(result => {
        return result.json();
      })
      .then(result => {
        let _loadMore = true;
        if (this.state.take + this.state.accounts.length > 100) {
          _loadMore = false;
        }
        this.setState(prevState => ({
          ...prevState,
          loadMore: _loadMore,
          accounts: [...prevState.accounts, ...result],
          skip: prevState.accounts.length + prevState.take
        }));
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <div className="row">
          <InfiniteScroll
            loadMore={this.getAccounts}
            hasMore={this.state.loadMore}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {this.state.accounts.map((curAccount, index) => {
              return (
                <div
                  key={index}
                  className="col-3"
                  style={{
                    padding: "5px"
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: "10px",
                      height: "150px",
                      boxShadow: "5px 10px"
                    }}
                  >
                    <Link to={`/account/${curAccount.id}`}>
                      <h1> {curAccount.id} </h1>
                    </Link>
                    <div>{curAccount.owner} </div>
                  </div>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AccountsPage);
