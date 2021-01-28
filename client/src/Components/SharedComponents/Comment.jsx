import React from 'react'

const Comment = ({ comment }) => {
    return (
        <div className='comments'>
            <div className='comments_img' style={{ backgroundImage: `url(${comment.userImage})` }}></div>
            <div className='comments_details'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className='comments_name'>{comment.user}</p>
                    <p className='comments_date'>{comment.created_at.split('T')[0]}</p>
                </div>
                <p>
                    {comment.content}
                </p>
            </div>
        </div>
    )
}

export default Comment