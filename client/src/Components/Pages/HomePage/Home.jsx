import React from 'react'
import { Link } from "react-router-dom";
import Tweet from './Tweet'

import './Home.css'
class Home extends React.Component {
    componentDidMount() {

    }
    render() {

        return (
            <div className='home'>
                {/* <div className='home__img'></div> */}
                <Tweet />
            </div>
        )
    }
}



export default Home