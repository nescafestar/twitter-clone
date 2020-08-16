import React from 'react';
import "../Components/Widget.css";
// import {
//   TwitterTimelineEmbed,
//   TwitterTweetEmbed,
// } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
{/* 
        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="litTweeper"
          options={{ height: 400 }}
        /> */}
        
      </div>
    </div>
  );
}

export default Widget;