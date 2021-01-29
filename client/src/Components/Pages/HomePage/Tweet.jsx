import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack';


const Tweet = ({ user, tweets, setTweets }) => {
    const [content, setContent] = useState('')
    const { enqueueSnackbar } = useSnackbar();

    const submitTweet = (e) => {
        e.preventDefault()
        if (content.length > 0) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, user_id: user.id })
            }
            fetch('http://127.0.0.1:8000/tweet/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    // window.location.reload()
                    setTweets([data, ...tweets])
                    setContent('')
                })
        } else {

            enqueueSnackbar('Please write something', { variant: 'error', autoHideDuration: 1000 })
        }
    }

    return (

        <form className='tweet' onSubmit={submitTweet}>
            <p className='tweet__text'>Tweet Something</p>
            <div className='tweet__border'></div>
            <div className='tweet__pic' style={{ backgroundImage: `url(${user.image})` }}></div>
            <textarea className='tweet__input' placeholder='Write Something brooo ..' value={content} onChange={(e) => setContent(e.target.value)} />
            <button className='tweet__buttom'
                onClick={submitTweet}><p className='buttom__text'>Tweet</p></button>
        </form>

    )
}

const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(Tweet)