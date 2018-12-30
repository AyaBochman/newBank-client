import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});


class accountOperation extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedOp: "",
        accountId: "",
        amount: ""
    //   currentAccount: {
    //     accountId: "",
    //     accountNumber: "",
    //     accountOwner: "",
    //     accountBalance: 0
    //   },
    
    };
    //resultMessage
    this.handleChange = this.handleChange.bind(this);
    this.makeOperation = this.makeOperation.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

//   handleInputChange = e => {
//     let currentAccount = {
//       ...this.state.currentAccount,
//       [e.currentTarget.name]: e.target.value
//     };

//     this.setState(prevState => ({
//       currentAccount
//     }));

//     // this.setState(prevState => ({
//     //   currentAccount: {
//     //     ...prevState.currentAccount,
//     //     [e.currentTarget.name]: e.target.value
//     //   }
//     // }));
//   };

handleChange = (e)=>{
    this.setState({
        selectedOp: e.target.value
    })
}


makeOperation = ()=>{
  let theAccount = {
    selectedOp: this.state.selectedOp,
    accountId: this.state.accountId,
    amount: this.state.amount

  }
    fetch("http://localhost:2200/operations", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(theAccount)
      })
        .then(result => {
          // console.log(result)
          return result;
        })
    
}


handleInputChange = (e)=>{
    this.setState({
        [e.target.name]: e.target.value,
    })
}


//   handleClose = () => {
//     this.setState(prevState => ({
//       isModalOpened: false
//     }));
//   };

//   createAccount = () => {
//     //modeling
//     fetch("http://localhost:2200/accounts", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(this.state.currentAccount)
//     })
//       .then(result => {
//         return result.json();
//       })
//       .then(result => {
//         this.setState({
//           isModalOpened: true,
//           resultMessage: result.message
//         });
//       });
//   };

  render() {
    const { classes } = this.props;
    // console.log(this.state.selectedOp)
    // console.log(this.state.accountId)
    // console.log(this.state.amount)
    console.log(this.state)
    return (
      <div>
        <h2> Account Operation </h2>

        <TextField
          id="accountId"
          name="accountId"
          label="accountId"
          className={classes.textField}
          value={this.state.accountId}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <TextField
          id="amount"
          label="amount"
          name="amount"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleInputChange}
          margin="normal"
        />
         <InputLabel htmlFor="outlined-age-simple">Operation</InputLabel>
         <Select
            value={this.state.selectedOp}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                // labelWidth={this.state.labelWidth}
                name="Operation"
                id="outlined-age-simple"
              />
            }
          >
          
            <MenuItem value={"widthdraw"}>Widthdraw</MenuItem>
            <MenuItem value={"deposit"}>Deposit</MenuItem>
       
          </Select>

            <Button variant="outlined" color="primary" onClick={this.makeOperation} className={classes.button}>
        Confirm
      </Button>

      </div>
    );
  }
}

accountOperation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(accountOperation);

