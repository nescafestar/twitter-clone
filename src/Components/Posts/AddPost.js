import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Avatar } from "@material-ui/core";
import '../Posts/AddPost.css'

const styles = {
	// paper: {
	// 	padding: 8
	// },
	// textField: {
	// 	width: '100%'
	// },
	// button: {
	// 	width: '100%',
	// 	marginTop: 20,
	// 	marginBottom: 10,
	// 	backgroundColor: 'var(--twitter-color)',
	// 	color: '#fff',
	// 	'&:hover': {
	// 		color: '#800080'
	// 	}
	// }
}

class AddPost extends Component {
	constructor (props) {
		super(props)
		this.state = {
			text: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange (e) {
		this.setState({ text: e.target.value })
	}

	handleSubmit (e) {
		e.preventDefault()

		const postData = {
			text: this.state.text
		}

		this.props.addPost(postData)
		this.setState({ text: ''})
	}

	render () {
		const { classes } = this.props
		return (
            <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src=""/>
                    <TextField style={{marginLeft:'10px'}}
					multiline
                    rowsMax="4"
					label="What's is new?"
					className={classes.textField}
					onChange={this.handleChange}
					value={this.state.text}
				/>
                </div>
                
                <div className="tweetBox__Options">
					<Button variant="outlined" 
					className="tweetBox__tweetButton"
					onClick={this.handleSubmit}>
					Tweet
				</Button>
                </div>
            </form>
        </div>
    
		)
	}
}



export default connect(null, { AddPost })(withStyles(styles)(AddPost))