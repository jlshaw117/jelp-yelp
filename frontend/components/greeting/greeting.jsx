import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';
import SearchBarContainer from '../search/search_bar_container';
import SampleBusinessesContainer from '../home/sample_businesses_container';
import Footer from '../footer/footer';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {

        return (
            <ul className='session-links'>
                <li><Link className='home-login' to='/login'>Login</Link></li>
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
        <div className='outer-wrapper'>
            <div className='outer-wrapper-home'>
                <div className='inner-wrapper'>
                    <header className="home-header">
                        <div className='overlay'></div>
                        <nav className="home-nav-bar">
                            <ul className='page-links'>
                                <li><a href='https://github.com/jlshaw117/jelp-yelp' target='_blank'>View the Code</a></li>
                                <li><Link to='/'>Events</Link></li>
                                <li><Link to='/'>Talk</Link></li>
                            </ul>
                            {currentUser ? greeting() : sessionLinks()}
                        </nav>
                        <div className='home-logo'>
                            <Link className='logo-link' to='/'><img src={window.logo} alt=""/></Link>
                        </div>
                        <div className="home-search-bar">
                            <SearchBarContainer placeHolder='burgers, barbers, spas...' />
                        </div>
                    </header>
                </div>
            </div>
            <SampleBusinessesContainer />
            <Footer />
        </div>
    );
};

export default Greeting