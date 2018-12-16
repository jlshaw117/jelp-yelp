import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {

    componentDidMount () {
        // debugger
        this.props.fetchAllBusinesses();
    }

    render () {

        const sessionLinks = () => {

            return (
                <ul className='index-session-links'>
                    <li className='log'><Link className='index-login' to='/login'>Log In</Link></li>
                    <li className='sign'><Link className='index-signup' to='/signup'>Sign Up</Link></li>
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
            <h1>{this.props.biz.name}</h1>
        )
    }
}

export default BusinessShow;