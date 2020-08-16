import React, { Component } from "react";
import './Home.css';
import Sidebar from './Sidebar';
import Widget from "./Widget";
import Feed from './Feed';

import {connect} from 'react-redux';
import ListPost from './Posts/ListPost'
// import Login from '../Auth/Login';
// import AddPost from "../Components/Posts/AddPost";
// function Home() {
//   return (
//     <div className="app">
//       <Sidebar />
//       <Feed />
//       <Widget />
//     </div>
//   );
// }

// export default Home



class Home extends Component {
  // componentDidMount(){
  //   if(this.props.isAuthenticated){
  //     this.props.history.push('/login')
  //   }
  // }
  render() {
const {isAuthenticated} =this.props
  return (
    //inverted conditino
    <div style={{display:'flex'}}>
      <Sidebar/>
      {/* <AddPost/> */}
      {isAuthenticated? <Feed/>:<ListPost/>}
     <Widget/>
    </div>
  );
}

}
const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home)