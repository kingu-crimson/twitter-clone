import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import TweetCard from '../SharedComponents/tweetcard'

import './Profile.css'



const Profile = ({ user }) => {
    const [tweets, setTweets] = useState(null)
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        getTweets()
    }, [])

    const getTweets = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: user.id })
        }
        fetch('http://127.0.0.1:8000/user/details', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProfile(data)
                setTweets(data.tweets)
            })
    }


    return (
        <div className='profile'>
            <div className='home__img'></div>
            <div className='profile__details'>
                <div className='profile__img' style={{ backgroundImage: `url(${user.image})` }}>
                    <div className='details__info'>
                        <p className='profile__name'>{profile && profile.name}</p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{profile && profile.userTo.length}</span> Following</span></p>
                        <p><span className='follow'><span style={{ marginRight: '7px', fontWeight: '600' }}>{profile && profile.userFrom.length}</span> Followers</span></p>
                    </div>
                </div>

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




export default connect(mapStateToProps)(Profile)