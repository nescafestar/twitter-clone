import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
// import Axios from 'axios'

const styles = {
  textField: {
    width: "100%",
    marginBottom: 5,
  },
  btnBlock: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      repassword: "",
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      repassword: this.state.repassword,
    };
    // let history = useHistory();
    this.props.registerUser(userData, this.props.history);
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Paper
        elevation={6}
        style={{
          borderRadius: "5px",
          backgroundColor: "var(--twitter-background)",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Username"
            type="text"
            name="username"
            value={this.state.login}
            onChange={this.handleChange}
            className={classes.textField}
            error={errors.login ? true : false}
            helperText={errors.login ? errors.login : ""}
          />
          <TextField
            type="email"
            label="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            className={classes.textField}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email : ""}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className={classes.textField}
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password : ""}
          />
          <TextField
            label="Repeat password"
            type="password"
            name="repassword"
            onChange={this.handleChange}
            value={this.state.repassword}
            className={classes.textField}
            error={errors.repassword ? true : false}
            helperText={errors.repassword ? errors.password2 : ""}
          />
          <div className={classes.btnBlock}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: "var(--twitter-color)" }}
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(withStyles(styles)(Register))
);
