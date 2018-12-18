import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

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
                    <div className='biz-show-user-profile-img'><Link to='/'><img src={window.dog} /></Link></div>
                    <div className='biz-show-user-details'>
                        <div className='biz-show-user-name'><Link to='/'>Demo U.</Link></div>
                    </div>
                </div>
                <div className='review-index-item-right'>
                    <div id={rating()} className='small-star-rating'></div>
                    <p className='review-index-body'>{review.body}</p>
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