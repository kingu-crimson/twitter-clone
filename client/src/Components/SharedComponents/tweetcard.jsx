import React, { useState, useEffect } from 'react'
import './tweetcard.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack';

import AddCommentIcon from '@material-ui/icons/AddComment';
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';


import Comment from './Comment'


const Tweetcard = ({ tweet, user, userImage }) => {
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [comment, setComment] = useState('')
    const [commentShow, setCommentShow] = useState(false)

    const { enqueueSnackbar } = useSnackbar();

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
                setLikes(data.tweet_likes)
                setBookmarks(data.tweet_bookmarks)
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

    const postLike = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tweet_id: tweet.id, user_id: user.id })
        }
        fetch('http://127.0.0.1:8000/like/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    setLikes([...likes, data])
                } else {
                    throw Error
                }

            }).catch(() => enqueueSnackbar('You can only like once', { variant: 'error', autoHideDuration: 1500 }))
    }

    const addBookMark = (e) => {
        e.preventDefault()
        if (user.id !== tweet.user_id) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tweet_id: tweet.id, user_id: user.id })
            }
            fetch('http://127.0.0.1:8000/favorite/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.id) {
                        setBookmarks([...bookmarks, data])
                        enqueueSnackbar('Saved to your bookmarks', { variant: 'success', autoHideDuration: 1500 })
                    } else {
                        throw Error
                    }
                }).catch(() => enqueueSnackbar('Already Added to your bookmarks', { variant: 'error', autoHideDuration: 1500 }))

        } else {
            enqueueSnackbar(`maaan its your tweet, you can't add it MR ${user.name}`, { variant: 'warning', autoHideDuration: 1500 })
        }

    }

    return (

        <div className='tweet-container'>
            <Link to={user.id === tweet.user_id ? `/profile` : `/profile/${tweet.user_id}`}>
                <div className='user'>
                    <div className='userimg' style={{ backgroundImage: `url(${user.id === tweet.user_id ? userImage : tweet.userImage})` }}></div>
                    <h3 className='username'>{tweet.user}</h3>
                    <small className='date'>{tweet.created_at.split('T')[0]}</small>
                </div>
            </Link>
            <h3 className='content'>{tweet.content}   </h3>
            {
                tweet.image.length > 0 && <img className='postimg' src={tweet.image} alt='tweet img' />
            }
            <div className='counters' style={{ marginTop: '15px' }}>
                <small className='counter1' style={{ marginRight: '22px' }}>{comments.length} comments</small>
                <small className='counter2' style={{ marginRight: '22px' }}>{bookmarks.length} Saved</small>
                <small className='counter3'>{likes.length} Likes</small>
            </div>

            <div className='tweet__icons' >
                <div onClick={() => setCommentShow(!commentShow)}><AddCommentIcon style={comments.length ? { color: 'green', marginRight: '7px' } : { marginRight: '7px' }} /><p>Comments</p></div>
                <div onClick={postLike} ><FavoriteBorderRoundedIcon style={likes.length ? { color: 'red', marginRight: '7px' } : { marginRight: '7px' }} /><p>Likes</p></div>
                <div onClick={addBookMark} ><BookmarkBorderRoundedIcon style={bookmarks.length ? { color: 'Blue', marginRight: '7px' } : { marginRight: '7px' }} /><p>Saved</p></div>
            </div>


            <div style={{ display: 'flex' }}>
                <div className='myuserimg' style={{ marginTop: '10px', backgroundImage: `url(${userImage})` }}></div>
                <form onSubmit={postComments} style={{ marginTop: '15px', width: '91%' }}>
                    <input className='comment' placeholder='Tweet your reply' onChange={(e) => setComment(e.target.value)} value={comment}></input>
                </form>
            </div>
            {
                commentShow && comments && comments.map((comment, i) => <Comment key={i} comment={comment} />)
            }

        </div>

    )

}

const mapStateToProps = ({ user: { user, image } }) => {
    return {
        user,
        userImage: image
    }
}


export default connect(mapStateToProps)(Tweetcard)