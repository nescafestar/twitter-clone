import React, { Component } from 'react'
// import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActions'


const styles = {
	textField: {
		width: '100%',
		marginBottom: 5
	},
	btnBlock: {
		textAlign: 'center',
		marginBottom: 10,
		marginTop: 20
	}
}

export class Login extends Component {
	constructor (props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			errors: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(){
		if(this.props.auth.isAuthenticated){
			this.props.history.push('/')
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.setState({ errors: nextProps.errors })
		}
		if(nextProps.auth.isAuthenticated){
			this.props.history.push('/')
		}
	}
	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSubmit (e) {
		e.preventDefault()
		const userData = {
			email: this.state.email,
			password: this.state.password,
		}
    // let history = useHistory();
  this.props.loginUser(userData)
  
}
	render () {
		const { classes } = this.props;
		const { errors } = this.state 
		return (
			<Paper  elevation={6} style={{borderRadius:'5px' ,backgroundColor:"var(--twitter-background)", paddingLeft:'15px', paddingRight:'15px'}}   >
				<form onSubmit={this.handleSubmit}>
					
					<TextField
						type="email"
						label="Email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						className={classes.textField}
						error={errors.email ? true : false } 
						helperText={errors.email ? errors.email : ''}
					/>
					<TextField
						label="Password"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						className={classes.textField}
						error={errors.password ? true : false }  
						helperText={errors.password ? errors.password : ''}
					/>
					
					<div className={classes.btnBlock} style={{paddingBottom:'10px'}}>
						<Button  type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: "var(--twitter-color)" }}>
							Submit
						</Button>
					</div>
				</form>
			</Paper>
		)
	}
}

const mapStateToProps = (state) => ({
	errors: state.errors,
	auth:state.auth
})


// export default withStyles(styles)(Login)


export default connect(mapStateToProps, { loginUser })(withRouter(withStyles(styles)(Login)))