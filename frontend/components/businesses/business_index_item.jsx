import React from 'react';
import { Link } from 'react-router-dom';



const indexItem = ({ biz, index }) => {

    let review = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia commodi debitis odit sed fugiat rerum dolorum omnis laudantium. Iusto dolores suscipit beatae incidunt nemo ratione quod dolore, dolorum sit facere.'

    return (
        <header className='business-item-container'>
            <div className='index-item-img'><Link to={`/businesses/${biz.id}`} ><img className='business-index-img' src={biz.photo}/></Link></div>
            <div className='index-item-info'>
                <div className='index-item-details'>
                    <div className='index-item-info-main'>
                        <div className='info biz-title'>{index + 1}. <Link to={`/businesses/${biz.id}`} >{biz.name}</Link></div>
                        <div className='info biz-avg-review'>
                            <div className='biz-raiting-star'></div>
                            <div className='index-item-biz-raiting-count'>0 Reviews</div>
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

