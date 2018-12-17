import React from 'react';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleSubmit (e) {
        e.precentDefault();
        this.props.action(this.state)
    }

    update(field) {
        return (e) => this.setState ({
            [field]: e.target.value
        });
    }

    render () {

        const sessionLinks = () => {
            return (
                <ul className='index-session-links review-form-session-links'>
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
                <header className='review-form-header'>
                    <div className='review-form-header-bar'>
                        <Link className='review-form-logo' to='/'><img src={window.logo} /></Link>
                        <div className='review-form-title'>{this.props.formType}</div>
                        {this.props.currentUser ? dropDown() : sessionLinks()}
                    </div>
                </header>
                <div className='review-form-main-wrapper'>
                    <div className='review-form-biz-name'>Business Name</div>
                    <div className='review-form-container'>
                        <div className='five-stars'>
                            <div id='one' className='star'></div>
                            <div id='two' className='star'></div>
                            <div id='three' className='star'></div>
                            <div id='four' className='star'></div>
                            <div id='five' className='star'></div>
                        </div>
                    </div>
                    <textarea name="" id="" placeHolder='Write your review here' cols="30" rows="10"></textarea>
                    <div className='review-form-button-wrapper'>
                        <button className='review-form-submit' onClick={this.handleSubmit}>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm;