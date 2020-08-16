import axios from 'axios';
import {GET_ERRORS, SET_CURRENT_USER} from '../constants';
import setAuthHeader from '../utils/setAuthHeader'

export const loginUser = (userData) => dispatch => {
	axios.post('http://localhost:5000/api/users/login', userData)
	.then(res => {
		// console.log(userData)	
			const { token } = res.data 
			localStorage.setItem('jwtToken', token)
            setAuthHeader(token)
            console.log('---> hit dispatch')
			dispatch(getCurrentUser())
		})
		.catch(err => {
			// console.log(err);
			// dispatch({
			// 	type: GET_ERRORS,
			// 	payload: err.response.data
			// })
		})
}

export const registerUser = (userData, history) => dispatch => {
	axios.post('http://localhost:5000/api/users/register', userData)
		.then(res => {
			console.log('----> registering')
			history.push('/')})
		.catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}))
}

export const getCurrentUser = () => dispatch => {
	axios.get('http://localhost:5000/api/users')
	console.log('----> GETTing Current USER')
        .then(res => dispatch(setCurrentUser(res.data)))
        .catch(err => dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		}))
		
}

export const setCurrentUser = (data) => {
	console.log('----> setting user!')
	return {
		
		type: SET_CURRENT_USER,
		payload: data
	}
}

export const logoutUser=()=>dispatch=>{
	localStorage.removeItem('jwtToken')
	setAuthHeader()
	dispatch(setCurrentUser())
}