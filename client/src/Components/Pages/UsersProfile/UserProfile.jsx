import React from 'react'

import './styles.css'

const UserProfile = ({ match }) => {

    const id = match.params.id

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default UserProfile