import React from 'react'
import './tweetcard.css'
import { Link } from "react-router-dom";
import AddCommentIcon from '@material-ui/icons/AddComment';
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
class Tweetcard extends React.Component {
    componentDidMount() {

    }
    render() {

        return (
            <>
                <div className='tweet-container'>
                    <div className='user'>
                    <div className='userimg'></div>
                    <h3 className='username'>TLGnoor</h3>
                    <small className='date'>12 april at 12:02</small>
                    </div>
                    <h3 className='content'>i went to alaska until i lost my way and went to africa instedsadasDJASDOIPASJDOIASJDASOIPJDSASOI   </h3>
                    <div className='postimg'></div>
                    <div className='counters'>
                        <small className='counter1'>200 comments</small>
                        <small className='counter2'>23k Retweets</small>
                        <small className='counter3'>234 Saved</small>
                    </div>
                    <div className='line'></div>
                    <button className='comments'><AddCommentIcon />Comments</button>
                    <button className='retweet'><SyncRoundedIcon />Retweet</button>
                    <button className='likes'><FavoriteBorderRoundedIcon />Likes</button>
                    <button className='saved'><BookmarkBorderRoundedIcon />Saved</button>
                    <div className='line'></div>
                    <div className='myuserimg'></div>
                    <form className='comment'>
                        <input className='comment' placeholder='Tweet your reply'></input>
                    </form>
                </div>
            </>
        )
    }
}


export default Tweetcard