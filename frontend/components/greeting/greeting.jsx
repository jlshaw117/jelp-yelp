import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from './drop_down_menu_container';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {

        return (
            <ul className='session-links'>
                <li><Link to='/login'>Login</Link></li>
                <li><Link className='signup' to='/signup'>Signup</Link></li>
            </ul>
        );
    };

    const greeting = () => {

        return (
            <div className='session-links'>
                <div className='sprites'>
                    <i className="fas fa-comment-alt fa-lg"></i>
                    <i className="fas fa-bell fa-lg"></i>
                </div>
                <DropDownMenuContainer />
            </div>
        );
    };

    return (
        <header className="home-header">
            <div className='overlay'></div>
            <nav className="home-nav-bar">
                <ul className='page-links'>
                    <li><Link to='/'>Write a Review</Link></li>
                    <li><Link to='/'>Events</Link></li>
                    <li><Link to='/'>Talk</Link></li>
                </ul>
                {currentUser ? greeting() : sessionLinks()}
            </nav>
            <div className='home-logo'>
                <Link className='logo-link' to='/'>Jelp</Link>
            </div>
            <div className="search-bar">
                <Link to='/businesses'>All Businesses</Link>
            </div>
        </header>
    );
};

export default Greeting