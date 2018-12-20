import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import HoursTable from '../hours_table/hours_table';
import PictureCarouselShow from '../picture_carousel/picture_carousel_show';

class BusinessShow extends React.Component {

    componentDidMount () {
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

        const newEditReviewButton = () => {
            let alreadyReviewed = false;
            let arrReviews = Object.values(this.props.reviews)
            let reviewId;
            if (this.props.currentUser) {
                for (let index = 0; index < arrReviews.length; index++) {
                    if (arrReviews[index].user_id === this.props.currentUser.id) {
                        alreadyReviewed = true;
                        reviewId = arrReviews[index].id
                    }
                }
            }
            if (this.props.currentUser) {
                if (alreadyReviewed) {
                    return (
                        <Link to={`/businesses/${this.props.biz.id}/editReview/${reviewId}`} className='biz-review-button'>
                            <i className="fas fa-star biz-star-review"></i>
                            <div>Edit Your Review</div>
                        </Link>
                    )
                } else {
                    return (
                        <Link to={`/businesses/${this.props.biz.id}/newReview`} className='biz-review-button'>
                            <i className="fas fa-star biz-star-review"></i>
                            <div>Write a Review</div>
                        </Link>
                    )
                } 
            }
            
        }

        const loggedInReview = () => {
            let alreadyReviewed;
            let arrReviews = Object.values(this.props.reviews)
            for (let index = 0; index < arrReviews.length; index++) {
                if (arrReviews[index].user_id === this.props.currentUser.id) alreadyReviewed = true;
            }
            if (alreadyReviewed) return <div></div>
            return (
                <div className='biz-show-new-review-container'>
                    <div className='biz-show-review-left'>
                        <div className='biz-show-user-profile-img'><Link to='/'><img className='user-profile-image' src={this.props.currentUser.photo} /></Link></div>
                        <div className='biz-show-user-details'>
                            <div className='biz-show-user-name'><Link to='/'>{this.props.currentUser.f_name} {this.props.currentUser.l_name[0]}.</Link></div>                            
                        </div>
                    </div>
                    <div className='biz-show-review-right'>
                        <div className='five-stars'>
                            <div id='five' className='star'></div>
                            <div id='four' className='star'></div>
                            <div id='three' className='star'></div>
                            <div id='two' className='star'></div>
                            <div id='one' className='star'></div>
                        </div>
                        <div className='biz-show-start-review'>
                            <Link to={`/businesses/${this.props.biz.id}/newReview`} className='biz-show-strat-review-text'>Start your review of <span>{this.props.biz.name}</span></Link>
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
                            <div id='five' className='star'></div>
                            <div id='four' className='star'></div>
                            <div id='three' className='star'></div>
                            <div id='two' className='star'></div>
                            <div id='one' className='star'></div>
                        </div>
                        <div className='biz-show-start-review'>
                            <Link to='/' className='biz-show-strat-review-text'>Start your review of <span>{this.props.biz.name}</span></Link>
                        </div>
                    </div>
                </div>
            );
        };

        if (this.props.biz === undefined) return null
        const bizReviews = this.props.biz.reviewIds.map((id) => {
            return this.props.reviews[id]
        });
        
        let avgRating = () => {
            let rating = parseFloat(this.props.biz.average_rating);
            let avg = Math.floor(rating * 2) / 2;
            
            switch (avg) {
                case 1:
                return 'avg-one';
                case 1.5:
                return 'avg-one-half';
                case 2:
                return 'avg-two';
                case 2.5:
                return 'avg-two-half';
                case 3:
                return 'avg-three';
                case 3.5:
                return 'avg-three-half';
                case 4:
                return 'avg-four';
                case 4.5:
                return 'avg-four-half';
                case 5:
                return 'avg-five';
                default:
                return 'avg-zero';
            }
        };
        
        return (
            <div className='outer-wrapper'>
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
                                    <div className='biz-name'>{this.props.biz.name}</div>
                                    <div className='biz-show-reviews'>
                                        <div id={avgRating()} className='biz-avg-rating'></div>
                                        <div className='biz-show-review-count'>{bizReviews.length} Reviews</div>
                                    </div>
                                    <div className='biz-price'>{this.props.biz.price}</div>
                                </div>
                                <div className='biz-top-content-right'>
                                    <div className='biz-buttons'>
                                        {newEditReviewButton()}
                                    </div>
                                </div>
                            </div>
                            <div className='biz-bottom-content'>
                                <div className='biz-show-map'></div>
                                <div className='biz-show-bottem-content-right'>
                                    <PictureCarouselShow images={this.props.biz.images} />
                                </div>
                            </div>
                        </div>
                        <div className='biz-content-bottem'>
                            <div className='biz-content-bottem-main'>
                                <div className='biz-content-bottem-reviews-title'>
                                    <div className='recomended-reviews'><span>Recommended Reviews</span> for {this.props.biz.name}</div>
                                </div>
                                {this.props.currentUser ? loggedInReview() : loggedOutReview()}
                                <ReviewIndexContainer reviews={bizReviews} users={this.props.users} />
                            </div>
                            <div className='biz-content-bottem-side'>
                                <HoursTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessShow;