import React from 'react';
import { Link } from 'react-router-dom';

class SampleBusinesses extends React.Component {

    componentDidMount() {
        this.props.fetchAllBusinesses();
    }

    render() {

        if (!this.props.businesses[0]) return null;
        const randIdx = (bizes) => {
            let indicies = [];
            while (indicies.length < 4) {
                let int = Math.floor(Math.random() * Math.floor(bizes.length));
                if (!indicies.includes(int)) indicies.push(int);
            }
            return indicies;
        };
        let indicies = randIdx(this.props.businesses);
        const biz1 = this.props.businesses[indicies[0]];
        const biz2 = this.props.businesses[indicies[1]];
        const biz3 = this.props.businesses[indicies[2]];
        const biz4 = this.props.businesses[indicies[3]];

        return (
            <div className='sample-businesses'>
                <div className='sample-businesses-wrapper'>
                    <div className='sample-header'>Check out These Businesses</div>
                    <div className='businesses-list'>
                        <Link to={`/businesses/${biz1.id}`}><div className='sample-business'>
                            <img src={biz1.images[1]} alt=""/>
                            <div className='sample-business-name'>{biz1.name}</div>
                        </div></Link>
                        <div className='sample-filler'></div>
                        <Link to={`/businesses/${biz2.id}`}><div className='sample-business'>
                            <img src={biz2.images[1]} alt=""/>
                            <div className='sample-business-name'>{biz2.name}</div>
                        </div></Link>
                        <div className='sample-filler'></div>
                        <Link to={`/businesses/${biz3.id}`}><div className='sample-business'>
                            <img src={biz3.images[1]} alt=""/>
                            <div className='sample-business-name'>{biz3.name}</div>
                        </div></Link>
                        <div className='sample-filler'></div>
                        <Link to={`/businesses/${biz4.id}`}><div className='sample-business'>
                            <img src={biz4.images[1]} alt=""/>
                            <div className='sample-business-name'>{biz4.name}</div>
                        </div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SampleBusinesses