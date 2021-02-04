import React, { useState, useEffect } from 'react'
import Tweets from '../Home/Tweets'
import SearchIcon from '@material-ui/icons/Search';

import './Explore.css'
const Explore = () => {

    const [tweets, setTweets] = useState(null)
    const [input, setInput] = useState('')

    useEffect(() => {
        getTweets()
    }, [])


    const searchTweets = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: input })
        }
        fetch('http://127.0.0.1:8000/tweet/search', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('succes', data)
                setTweets(data)
            })
    }

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
            <form className='explore__search'>
                <input className='search__input' type='text' placeholder='Search ..' value={input} onChange={(e) => setInput(e.target.value)} />
                <SearchIcon className='search__icon' onClick={searchTweets} />
            </form>
            <Tweets tweets={tweets} />
        </div>
    )
}



export default Explore