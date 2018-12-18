import React from 'react';
import { Link } from 'react-router-dom';



const indexItem = ({ biz, index }) => {

    let review = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia commodi debitis odit sed fugiat rerum dolorum omnis laudantium. Iusto dolores suscipit beatae incidunt nemo ratione quod dolore, dolorum sit facere.'

    let avgRating = () => {
        let rating = parseFloat(biz.average_rating);
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
        <header className='business-item-container'>
            <div className='index-item-img'><Link to={`/businesses/${biz.id}`} ><img className='business-index-img' src={biz.images[0]}/></Link></div>
            <div className='index-item-info'>
                <div className='index-item-details'>
                    <div className='index-item-info-main'>
                        <div className='info biz-title'>{index + 1}. <Link to={`/businesses/${biz.id}`} >{biz.name}</Link></div>
                        <div className='info biz-avg-review'>
                            <div id={avgRating()} className='biz-rating-star'></div>
                            <div className='index-item-biz-raiting-count'>{biz.reviewIds.length} Reviews</div>
                        </div>
                        <div className='info biz-price'>{biz.price}</div>
                    </div>
                    <div className='index-item-info-side'>
                        <div className='info biz-phone'>{biz.phone_number}</div>
                        <div className='info biz-addres'>{biz.address}</div>
                        <div className='info biz-city'>{biz.city}, {biz.state}</div>
                    </div>
                </div>
                <div className='index-item-review'>"{review}"</div> 
            </div>
        </header>
    )
}

export default indexItem;

