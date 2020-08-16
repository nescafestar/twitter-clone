import React, { Component } from 'react'
// import Feed from '../Feed'
// import TweetBox from '../TweetBox'
import AddPost from './AddPost'
export class ListPost extends Component {
    render() {
        return (
            <div style={{ "flex":"0.4"}}>
            {/* <TweetBox/> */}
                <AddPost/>
            </div>
        )
    }
}

export default ListPost
