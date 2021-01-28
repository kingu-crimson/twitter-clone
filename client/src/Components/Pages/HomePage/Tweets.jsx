import React, { useEffect, useState } from 'react'
import TweetCard from '../../SharedComponents/tweetcard'

const Tweets = () => {
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
        <div className='tweets'>
            {
                tweets && tweets.map((tweet, id) => <TweetCard key={id} tweet={tweet} />)
            }
        </div>
    )
}

export default Tweets