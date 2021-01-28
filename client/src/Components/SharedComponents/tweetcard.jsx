import React from 'react'
import './tweetcard.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import AddCommentIcon from '@material-ui/icons/AddComment';
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';


const Tweetcard = ({ tweet, user }) => {

    return (

        <div className='tweet-container'>
            <Link to={user.id === tweet.user_id ? `/profile` : `/profile/${tweet.user_id}`}>
                <div className='user'>
                    <div className='userimg' style={{ backgroundImage: `url(${tweet.userImage})` }}></div>
                    <h3 className='username'>{tweet.user}</h3>
                    <small className='date'>12 april at 12:02</small>
                </div>
            </Link>
            <h3 className='content'>{tweet.content}   </h3>
            {
                tweet.image.length > 0 && <div className='postimg' style={{ backgroundImage: `url(${tweet.image})` }}></div>
            }
            <div className='counters' style={{ marginTop: '15px' }}>
                <small className='counter1' style={{ marginRight: '22px' }}>{tweet.comments.length} comments</small>
                {/* <small className='counter2'>23k Retweets</small> */}
                <small className='counter3'>{tweet.tweet_likes.length} Likes</small>
            </div>
            {/* <div className='line'></div> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '15px' }}>
                <button style={{ display: 'flex', alignItems: 'center' }}><AddCommentIcon />Comments</button>
                {/* <button className='retweet'><SyncRoundedIcon />Retweet</button> */}
                <button style={{ display: 'flex', alignItems: 'center' }}><FavoriteBorderRoundedIcon />Likes</button>
                <button style={{ display: 'flex', alignItems: 'center' }}><BookmarkBorderRoundedIcon />Saved</button>
            </div>

            {/* <div className='line'></div> */}
            <div className='myuserimg' style={{ marginTop: '10px', backgroundImage: `url(${user.image})` }}></div>
            <form className='comment' style={{ marginTop: '15px' }}>
                <input className='comment' placeholder='Tweet your reply'></input>
            </form>
        </div>

    )

}

const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}


export default connect(mapStateToProps)(Tweetcard)