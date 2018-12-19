import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(id) {
        console.log('hi',this.props);
        return () => this.props.deleteReview(id);
    }

    render() {
    
        if (this.props.reviews[0] === undefined) return null;
        const indexItems = this.props.reviews.map((review, idx) => {
            const rating = () => {
                switch (review.rating) {
                    case 5:
                        return 'five';
                    case 4:
                        return 'four';
                    case 3:
                        return 'three';
                    case 2:
                        return 'two';
                    case 1:
                        return 'one';
                    default:
                        break;
                }
            };

            const reviewFormLinks = () => {
                return (
                    <div className='review-form-links'>
                        <Link to={`/businesses/${review.business_id}/editReview/${review.id}`}>
                            <i className="fas fa-pencil-alt category"></i>
                        </Link>
                        <button onClick={this.clickHandler(review.id)} className='delete-review'><i class="far fa-trash-alt"></i></button>
                    </div>
                )
            }

            return (
                <div key={idx} className='review-index-review-container'>
                    <div className='review-index-item'>
                        <div className='biz-show-review-left'>
                            <div className='biz-show-user-profile-img'><Link to='/'><img className='user-profile-image' src={this.props.users[review.user_id].photo} /></Link></div>
                            <div className='biz-show-user-details'>
                                <div className='biz-show-user-name'><Link to='/'>{this.props.users[review.user_id].f_name} {this.props.users[review.user_id].l_name[0]}.</Link></div>
                            </div>
                        </div>
                        <div className='review-index-item-right'>
                            <div id={rating()} className='small-star-rating'></div>
                            <div className='review-index-body'>{review.body}</div>
                        </div>
                    </div>
                    <div className='review-index-item-footer'>
                        {
                            review.user_id === this.props.currentUser.id ? reviewFormLinks() : <div></div>
                        }
                    </div>
                </div>
            )
        });
        
        return (
            <div className='review-index'>
                {indexItems}
            </div>
        )
    }
};

export default ReviewIndex;