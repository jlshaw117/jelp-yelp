import React from 'react';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';
import { Link, Redirect } from 'react-router-dom';

class ReviewForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.review;
        // this.state = {
        //     review: props.review,
        //     redirect: false
        // };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.biz) this.props.fetchBusiness(this.props.match.params.businessId);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push(`/businesses/${this.props.biz.id}`), (err) => console.log(err));

    }

    update(field) {
        return (e) => this.setState ({
            [field]: field === 'rating' ? parseInt(e.target.value, 10) : e.target.value
        });
    }

    render () {

        // if (this.state.redirect) {
        //     return <Redirect to='/'/>
        // }

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

        const rating = () => {
            let str = '-star-review star review-form-stars'
            switch (this.state.rating) {
                case 1:
                    return 'selected one' + str
                case 2:
                    return 'selected two' + str
                case 3:
                    return 'selected three' + str
                case 4:
                    return 'selected four' + str
                case 5:
                    return 'selected five' + str
                default:
                    return '0';
            }
        }
        if (this.props.biz === undefined) return null
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
                        <div className='review-form-biz-name'><Link to={`/businesses/${this.props.match.params.businessId}`}>{this.props.biz.name}</Link></div>
                        <div className='review-form-container'>
                            <div className='review-stars-message'>
                                <div className='five-stars'>
                                    <button id='five' className={this.state.rating === 5 ? rating() : 'star review-form-stars'} onClick={this.update('rating')} value='5'>
                                        <div className='review-rating-message five'>Woohoo! As good as it gets!</div>
                                    </button>
                                    <button id='four' className={this.state.rating === 4 ? rating() : 'star review-form-stars'} onClick={this.update('rating')} value='4'>
                                        <div className='review-rating-message four'>Yay! I'm a fan.</div>
                                    </button>
                                    <button id='three' className={this.state.rating === 3 ? rating() : 'star review-form-stars'} onClick={this.update('rating')} value='3'>
                                        <div className='review-rating-message three'>A-OK.</div>
                                    </button>
                                    <button id='two' className={this.state.rating === 2 ? rating() : 'star review-form-stars'} onClick={this.update('rating')} value='2'>
                                        <div className='review-rating-message two'>Meh. I've experienced better.</div>
                                    </button>
                                    <button id='one' className={this.state.rating === 1 ? rating() : 'star review-form-stars'} onClick={this.update('rating')} value='1'>
                                        <div className='review-rating-message one'>Eak! Methinks not.</div>
                                    </button>
                                </div>
                                <div className='review-raitng-messages'>
                                    <div className='review-rating-message-default'>Select your rating</div>
                                </div>
                            </div>
                            <textarea required className="review-form-body" onChange={this.update('body')} placeholder='Your review helps others learn about great local businesses.' cols="67" rows="15"></textarea>
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