import React from 'react'
import { Link } from "react-router-dom";
import Tweet from './Tweet'

import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            {/* <div className='home__img'></div> */}
            <Tweet />
        </div>
    )
}



export default Home