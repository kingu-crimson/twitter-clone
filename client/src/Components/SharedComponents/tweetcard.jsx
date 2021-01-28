import React, { useState, useEffect } from 'react'
import './tweetcard.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import AddCommentIcon from '@material-ui/icons/AddComment';
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';

import Comment from './Comment'


const Tweetcard = ({ tweet, user }) => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        getComments()
    }, [])

    const getComments = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: tweet.id })
        }
        fetch('http://127.0.0.1:8000/tweet/details', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setComments(data.comments)
            })
    }

    const postComments = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tweet_id: tweet.id, user_id: user.id, content: comment })
        }
        fetch('http://127.0.0.1:8000/comment/', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setComment('')
                setComments([...comments, data])
            })
    }

    return (

        <div className='tweet-container'>
            <Link to={user.id === tweet.user_id ? `/profile` : `/profile/${tweet.user_id}`}>
                <div className='user'>
                    <div className='userimg' style={{ backgroundImage: `url(${tweet.userImage})` }}></div>
                    <h3 className='username'>{tweet.user}</h3>
                    <small className='date'>{tweet.created_at.split('T')[0]}</small>
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
            <form onSubmit={postComments} className='comment' style={{ marginTop: '15px' }}>
                <input className='comment' placeholder='Tweet your reply' onChange={(e) => setComment(e.target.value)} value={comment}></input>
            </form>
            {
                comments && comments.map((comment, i) => <Comment key={i} comment={comment} />)
            }

        </div>

    )

}

const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}


export default connect(mapStateToProps)(Tweetcard)