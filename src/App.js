import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import JwtDecode  from 'jwt-decode';
import Store from './store';
import Main from './Layout/Main';
import Home from './Components/Home';
import Register from './Auth/Register';
import Login from './Auth/Login';
import store from './store';
import { logoutUser, getCurrentUser } from './actions/authActions';
import setAuthHeader from './utils/setAuthHeader';

let jtoken=localStorage.getItem('jwtToken');
if(jtoken){
  const currentTime=Date.now()/1000
  const decode=JwtDecode(localStorage.getItem('jwtToken'))
  
  if(currentTime> decode.exp){
    store.dispatch(logoutUser())
    window.location.href='/'
  }else{
    setAuthHeader(localStorage.getItem('jwtToken'))
    store.dispatch(getCurrentUser)
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
                <BrowserRouter>
        <Main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
        </Main>
        </BrowserRouter>
      
      </Provider>
      )}
}

export default App;
