import React from 'react';
import BusinessIndexItem from './business_index_item';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from '../greeting/drop_down_menu_container';
import CategoryDropDwon from '../drop_down_menu/category_drop_down';

class BusinessIndex extends React.Component {

    componentDidMount () {
        this.props.fetchAllBusinesses();
    }

    render () {

        const restaurants = [
            [<i class="fas fa-utensils"></i>, 'Burgers'],
            [<i class="fas fa-utensils"></i>, 'Mexican'],
            [<i class="fas fa-utensils"></i>, 'Italian'],
            [<i class="fas fa-utensils"></i>, 'Sushi']
        ];

        const homeServices = [
            [<i className="fas fa-home"></i>, "Contracters"],
            [<i className="fas fa-home"></i>, 'Electricians'],
            [<i className="fas fa-home"></i>, 'Landscaping'],
            [<i className="fas fa-home"></i>, 'Movers']
        ];

        const autoServices = [
            [<i className="fas fa-car"></i>, 'Auto Repair'],
            [<i className="fas fa-car"></i>, 'Car Dealers'],
            [<i className="fas fa-car"></i>, 'Auto Detailing'],
            [<i className="fas fa-car"></i>, 'Towing']
        ];

        let indexItems = this.props.businesses.map((biz, idx) => {
            return (
                <div key={idx}>
                    <BusinessIndexItem index={idx} biz={biz} />
                </div>
            )
        });

        const sessionLinks = () => {

            return (
                <ul className='index-session-links'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link className='signup' to='/signup'>Signup</Link></li>
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

        return (
            <div>
                <header className='business-index-header'>
                    <nav className='business-index-nav'>
                        <div className='index-logo'>
                            <Link className='logo-link' to='/'>Jelp</Link>
                        </div>
                        <div className='index-search-bar'></div>
                        <nav className="index-nav-bar">
                            {this.props.currentUser ? greeting() : sessionLinks()}
                        </nav>
                    </nav>
                </header>
                <div className='categories'>
                    <div className='categories-bar'>
                        <div className='category-item'><CategoryDropDwon 
                            icon={<i className="fas fa-utensils category"></i>}
                            name='Restaurants'
                            subCats={restaurants}/></div>
                        <div className='category-item'><CategoryDropDwon 
                            icon={<i className="fas fa-home category"></i>}
                            name='Home Services'
                            subCats={homeServices}/></div>
                        <div className='category-item'><CategoryDropDwon 
                            icon={<i class="fas fa-car category"></i>}
                            name='Auto Services'
                            subCats={autoServices}/></div>
                        <div className='category-fill'></div>
                        <div className='category-item'><span>Write a Review</span></div>
                    </div>
                </div>
                <div className='search-params-container'>
                
                </div>
                <div className='index-main-content'>
                    <div className='index-main-content-container'>
                        <ul className='business-index'>
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                            {indexItems}
                        </ul>
                        <div className='index-map'></div>                
                    </div>
                </div>
            </div>
        );
    }
    
}

export default BusinessIndex;