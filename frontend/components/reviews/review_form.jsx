import React from 'react';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';

class ReviewForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.review;
    }

    update(field) {
        return (e) => this.setState ({
            [field]: e.target.value
        });
    }

    render () {

        const sessionLinks = () => {
            return (
                <ul className='index-session-links'>
                    <li className='log'><Link className='index-login' to='/login'>Log In</Link></li>
                    <li className='sign'><Link className='index-signup' to='/signup'>Sign Up</Link></li>
                </ul>
            )
        }

        const dropDown = () => {

            return (
                <div className='review-form-drop-down'>
                    <DropDownMenuContainer />
                </div>
            )
        }
        return (
            <div className="review-form">
                <header className='review-form-header-'>
                    <div classname='review-form-header-bar'>
                        <img src={window.logo} />
                        {this.props.currentUser ? dropDown() : sessionLinks()}
                    </div>
                </header>
            </div>
        )
    }
}

export default ReviewForm;