import React, { Component } from "react";


export default class accountActivities extends Component {
  constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
        account: null,
        // download: `http://localhost:2200/operations/export_operations/${fileName}`
      }
  }

  // http://localhost:3000/account/248523/activities
  componentDidMount() {
    fetch(`http://localhost:2200/accounts/${this.state.id}/activities`)
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({
          account: result
        });
      });
  }
  render() {
    return <h1> Account Activities </h1>;
  }
}
