import React from 'react';
import '../Components/TweetBoxOption.css';

function TweetBoxOption({active,Icon}) {
    return (
        <div className={`tweetBoxOption ${active && "tweetBoxOption--active"}`}>
            <Icon/>
        </div>

)
}

export default TweetBoxOption
