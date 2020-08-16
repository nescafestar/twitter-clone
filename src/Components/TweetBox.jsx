import React from 'react';
import { Avatar,Button } from "@material-ui/core";
import TweetBoxOption from './TweetBoxOption';
import '../Components/TweetBox.css';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollIcon from '@material-ui/icons/Poll';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EventNoteIcon from '@material-ui/icons/EventNote';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src=""/>
                    <input type="text" placeholder="Whats happening?"/>
                </div>
                
                <div className="tweetBox__Options">
                <TweetBoxOption active Icon={InsertPhotoOutlinedIcon}/>
                <TweetBoxOption active Icon={GifOutlinedIcon}/>
                <TweetBoxOption active Icon={PollIcon}/>
                <TweetBoxOption active Icon={InsertEmoticonIcon}/>
                <TweetBoxOption active Icon={EventNoteIcon}/>
                <Button  className="tweetBox__tweetButton">Tweet</Button>
                </div>
            </form>
        </div>
    )
};

export default TweetBox
