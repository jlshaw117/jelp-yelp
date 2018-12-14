import React from 'react';
import BusinessIndexItem from './business_index_item';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from '../greeting/drop_down_menu_container';

class BusinessIndex extends React.Component {

    componentDidMount () {
        this.props.fetchAllBusinesses();
    }

    render () {

        let indexItem = this.props.businesses.map((biz, idx) => {
            return (
                <li key={idx}><BusinessIndexItem biz={biz} /></li>
            )
        });

        const sessionLinks = () => {

            return (
                <ul className='index-session-links'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link className='signup' to='/signup'>Signup</Link></li>
                </ul>
            );
        }

        const greeting = () => {

            return (
                <div className='index-session-links'>
                    <div className='index-sprites'>
                        <i className="fas fa-comment-alt fa-lg"></i>
                        <i className="fas fa-bell fa-lg"></i>
                    </div>
                    <DropDownMenuContainer />
                </div>
            );
        };

        return (
            <div>
                <header className='business-index-header'>
                    <nav className='business-index-nav'>
                        <div className='index-logo'>
                            <Link className='logo-link' to='/'>Jelp</Link>
                        </div>
                        <div className='index-search-bar'></div>
                        <nav className="index-nav-bar">
                            {this.props.currentUser ? greeting() : sessionLinks()}
                        </nav>
                    </nav>
                </header>
                <div className='categories'>
                    <div className='categories-bar'>
                        <div className='category-item'><span>Home Services</span></div>
                        <div className='category-item'><span>Restaurants</span></div>
                        <div className='category-item'><span>Auto Services</span></div>
                        <div className='category-fill'></div>
                        <div className='category-item'><span>Write a Review</span></div>
                    </div>
                </div>
                <div className='search-params-container'></div>
                <ul className='business-index'>
                    {indexItem}
                </ul>
            </div>
        );
    }
    
}

export default BusinessIndex;