import React, { useState, useEffect } from 'react'
import Tweets from '../Home/Tweets'

import './Explore.css'
const Explore = () => {

    const [tweets, setTweets] = useState(null)
    // console.log('changed', tweets)

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
                // console.log(data)
                setTweets(data)
            })
    }

    return (
        <div className='explore'>
            <Tweets tweets={tweets} />
        </div>
    )
}



export default Explore