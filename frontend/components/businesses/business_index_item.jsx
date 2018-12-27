import React from 'react';
import { Link } from 'react-router-dom';



class IndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.searchBusinesses(e.currentTarget.value);
    }

    render() {

        let review = this.props.biz.reviewText;

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

        let tags = this.props.biz.businessTags.map((tag, idx) => {

            return (
                <button key={idx} onClick={this.handleClick} value={tag} className='business-tag'>{tag}</button>
            )
        })
        return (
            <header className='business-item-container'>
                <div className='index-item-img'><Link to={`/businesses/${this.props.biz.id}`} ><img className='business-index-img' src={this.props.biz.images[0]}/></Link></div>
                <div className='index-item-info'>
                    <div className='index-item-details'>
                        <div className='index-item-info-main'>
                            <div className='info biz-title'>{this.props.index + 1}. <Link to={`/businesses/${this.props.biz.id}`} >{this.props.biz.name}</Link></div>
                            <div className='info biz-avg-review'>
                                <div id={avgRating()} className='biz-rating-star'></div>
                                <div className='index-item-biz-raiting-count'>{this.props.biz.reviewIds.length} Reviews</div>
                            </div>
                            <div className='info biz-price'>
                                <div>{this.props.biz.price}</div>
                                <div>
                                    {tags}
                                </div>
                            </div>
                        </div>
                        <div className='index-item-info-side'>
                            <div className='info biz-phone'>{this.props.biz.phone_number}</div>
                            <div className='info biz-addres'>{this.props.biz.address}</div>
                            <div className='info biz-city'>{this.props.biz.city}, {this.props.biz.state}</div>
                        </div>
                    </div>
                    <div className='index-item-review'>"{review}"</div> 
                </div>
            </header>
        )
    }
}

export default IndexItem;

