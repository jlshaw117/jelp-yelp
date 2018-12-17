import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';

class BusinessShow extends React.Component {

    componentDidMount () {
        // debugger
        this.props.fetchBusiness(this.props.match.params.businessId);
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

        const loggedInReview = () => {

            return (
                <div className='biz-show-new-review-container'>
                    <div className='biz-show-review-left'>
                        <div className='biz-show-user-profile-img'><Link to='/'><img src={window.dog} /></Link></div>
                        <div className='biz-show-user-details'>
                            <div className='biz-show-user-name'><Link to='/'>Demo U.</Link></div>                            
                        </div>
                    </div>
                    <div className='biz-show-review-right'>
                        <div className='five-stars'>
                            <div id='one' className='star'></div>
                            <div id='two' className='star'></div>
                            <div id='three' className='star'></div>
                            <div id='four' className='star'></div>
                            <div id='five' className='star'></div>
                        </div>
                        <div className='biz-show-start-review'>
                            <Link to='/' className='biz-show-strat-review-text'>Start your review of <span>Business Name</span></Link>
                        </div>
                    </div>
                </div>
            );
        };
        
        const loggedOutReview = () => {

            return (
                <div className='biz-show-new-review-container'>
                    <div className='biz-show-review-left'>
                        <div className='biz-show-no-user-profile-img'><img src={window.default_profile_img} /></div>
                        
                    </div>
                    <div className='biz-show-review-right'>
                        <div className='five-stars'>
                            <div id='one' className='star'></div>
                            <div id='two' className='star'></div>
                            <div id='three' className='star'></div>
                            <div id='four' className='star'></div>
                            <div id='five' className='star'></div>
                        </div>
                        <div className='biz-show-start-review'>
                            <Link to='/' className='biz-show-strat-review-text'>Start your review of <span>Business Name</span></Link>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <header className='business-index-header'>
                    <nav className='business-index-nav'>
                        <div className='index-logo'>
                            <Link className='logo-link' to='/'><img className='logo-img' src={window.logo} /></Link>
                        </div>
                        <div className='index-search-bar'></div>
                        <nav className="index-nav-bar">
                            {this.props.currentUser ? greeting() : sessionLinks()}
                        </nav>
                    </nav>
                </header>
                <div className='categories'>
                    <div className='categories-bar'>
                        <div className='category-container'>
                            <div className='category-item'>
                                <button className='category-button'>
                                    <div className='category-icon'><i className="fas fa-utensils category"></i></div>
                                    <div className='category-name'>Restaurants</div>
                                    <i className="fas fa-angle-down category"></i>
                                </button>
                                <div className='sub-cats'>
                                    <div className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Burgers</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Mexican</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Italian</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Sushi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='category-container'>
                            <div className='category-item'>
                                <button className='category-button'>
                                    <div className='category-icon'><i className="fas fa-home category"></i></div>
                                    <div className='category-name'>Home Services</div>
                                    <i className="fas fa-angle-down category"></i>
                                </button>
                                <div className='sub-cats'>
                                    <div className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Contracters</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Landscaping</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Electricians</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Movers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='category-container'>
                            <div className='category-item'>
                                <button className='category-button'>
                                    <div className='category-icon'><i className="fas fa-car category"></i></div>
                                    <div className='category-name'>Auto Services</div>
                                    <i className="fas fa-angle-down category"></i>
                                </button>
                                <div className='sub-cats'>
                                    <div className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Auto Repair</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Auto Sales</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Auto Detail</div>
                                    </div>
                                    <div className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Towing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='category-fill'></div>
                        <div className='category-item write-review'>
                            <Link className='review-link' to='/businesses'>
                                <i className="fas fa-pencil-alt category"></i>
                                <div className='review-font'>Write a Review</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='biz-wrapper'>
                    <div className='background-grey'></div>
                    <div className='biz-content-wrapper'>
                        <div className='biz-main-container'>
                            <div className='biz-top-content'>
                                <div className='biz-top-content-left'>
                                    <div className='biz-name'>Business Name{/*this.props.biz.name*/}</div>
                                    <div className='biz-show-reviews'>
                                        <div className='biz-avg-raiting'></div>
                                        <div className='biz-show-review-count'>0 Reviews</div>
                                    </div>
                                    <div className='biz-price'>$$$${/*this.props.biz.price*/}</div>
                                </div>
                                <div className='biz-top-content-right'>
                                    <div className='biz-buttons'>
                                        <Link to='/businesses/1/newReview' className='biz-review-button'>
                                            <i className="fas fa-star biz-star-review"></i>
                                            <div>Write a Review</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='biz-bottom-content'>
                                <div className='biz-show-map'></div>
                                <div className='biz-show-bottem-content-right'></div>
                            </div>
                        </div>
                        <div className='biz-content-bottem'>
                            <div className='biz-content-bottem-main'>
                                <div className='biz-content-bottem-reviews-title'>
                                    <div className='recomended-reviews'><span>Recommended Reviews</span> for Business Name</div>
                                </div>
                                {this.props.currentUser ? loggedInReview() : loggedOutReview()}
                            </div>
                            <div className='biz-content-bottem-side'>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessShow;