import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Tweet from './Tweet'
import Tweets from './Tweets'

import './Home.css'
const Home = () => {

    const [tweets, setTweets] = useState(null)

    useEffect(() => {
        getTweets()
    }, [])

    const getTweets = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('http://127.0.0.1:8000/tweet/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTweets(data)
            })
    }

    return (
        <div className='home'>
            {/* <div className='home__img'></div> */}
            <Tweet tweets={tweets} />
            <Tweets tweets={tweets} />
        </div>
    )
}



export default Home