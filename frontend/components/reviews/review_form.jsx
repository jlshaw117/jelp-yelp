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
        e.preventDefault();
        this.props.action(this.state);
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
                    <div className='review-form-content-container'>
                        <div className='review-form-biz-name'><Link to={`businesses/${this.props.match.params.businessId}`}>Business Name</Link></div>
                        <div className='review-form-container'>
                            <div className='five-stars'>
                                <button id='one' className='star' onClick={this.update('rating')} value='1'></button>
                                <button id='two' className='star' onClick={this.update('rating')} value='2'></button>
                                <button id='three' className='star' onClick={this.update('rating')} value='3'></button>
                                <button id='four' className='star' onClick={this.update('rating')} value='4'></button>
                                <button id='five' className='star' onClick={this.update('rating')} value='5'></button>
                            </div>
                            <textarea required className="review-form-body" onChange={this.update('body')} placeholder='Write your review here' cols="67" rows="15"></textarea>
                        </div>
                        <div className='review-form-button-wrapper'>
                            <button className='review-form-submit' onClick={this.handleSubmit}>Post Review</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm;