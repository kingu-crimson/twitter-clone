import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import TweetCard from '../../SharedComponents/tweetcard'

import './styles.css'

const UserProfile = ({ match, user }) => {
    const [tweets, setTweets] = useState(null)
    const [profile, setProfile] = useState(null)
    const [followers, setFollowers] = useState([])
    const [follow, setFollow] = useState(true)
    const id = match.params.id

    useEffect(() => {
        // console.log(match.params)
        getTweets()
    }, [match.params.id])

    const checkFollow = (profile) => {
        profile.userFrom.forEach((us) => {
            if (us.user_from === user.id) {
                setFollow(false)
            }
        })
    }

    const getTweets = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        }
        fetch('http://127.0.0.1:8000/user/details', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProfile(data)
                setTweets(data.tweets)
                setFollowers(data.userFrom)
                checkFollow(data)
            })
    }

    const followUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_from: user.id, user_to: profile.id })
        }
        fetch('http://127.0.0.1:8000/followers/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFollowers([...followers, data])
                setFollow(false)
            })
    }

    return (
        <div className='userprofile'>
            <div className='home__img'></div>
            <div className='profile__details'>
                <div className='profile__img' style={{ backgroundImage: `url(${profile && profile.image})` }}>
                    <div className='details__info'>
                        <p className='profile__name'>{profile && profile.name}</p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{profile && profile.userTo.length}</span> Following</span></p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{followers.length}</span> Followers</span></p>
                    </div>
                </div>
                <button onClick={followUser} className='profile__follow'>{follow ? 'Follow' : 'Unfollow'}</button>
            </div>
            <div className='tweets'>
                {
                    tweets && tweets.map((tweet, id) => <TweetCard key={id} tweet={tweet} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}


export default connect(mapStateToProps)(UserProfile)