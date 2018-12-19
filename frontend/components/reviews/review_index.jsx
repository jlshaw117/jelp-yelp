import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    
    if (props.reviews[0] === undefined) return null;
    const indexItems = props.reviews.map((review, idx) => {
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

        return (
            <div key={idx} className='review-index-item'>
                <div className='biz-show-review-left'>
                    <div className='biz-show-user-profile-img'><Link to='/'><img className='user-profile-image' src={props.users[review.user_id].photo} /></Link></div>
                    <div className='biz-show-user-details'>
                        <div className='biz-show-user-name'><Link to='/'>{props.users[review.user_id].f_name} {props.users[review.user_id].l_name[0]}.</Link></div>
                    </div>
                </div>
                <div className='review-index-item-right'>
                    <div id={rating()} className='small-star-rating'></div>
                    <div className='review-index-body'>{review.body}</div>
                </div>
            </div>
        )
    });
    
    return (
        <div className='review-index'>
            {indexItems}
        </div>
    )
};