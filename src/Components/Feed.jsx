import React from "react";
import "../Components/Feed.css";
import TweetBox from '../Components/TweetBox';
import Post from '../Components/Post';

function Feed() {
  // const [posts,setPosts]=useState([]); 
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

    {/* TweetBox */}
    <TweetBox />
    {/* posts */}
    <Post 
    displayName="Anonymous User"
    username="Anon_User"
    verfied={true}
    text="Hello User!"
    avatar= ""
    image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"

    />
    </div>
  );
}

export default Feed;
