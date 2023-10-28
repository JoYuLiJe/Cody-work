import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>School Website - React Router Demo</h1>
            <nav className='d-flex justify-content-around'>
                {/* <p>Home</p>*/}
                <link to ="/">Home</link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
            </nav>
        </header>
    )
}


export default Header;
