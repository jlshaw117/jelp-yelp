import React from 'react';
import BusinessIndexItem from './business_index_item';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';
import CategoryDropDwon from '../drop_down_menu/category_drop_down';

class BusinessIndex extends React.Component {

    componentDidMount () {
        this.props.fetchAllBusinesses();
    }

    render () {

        // const restaurants = [
        //     [<i className="fas fa-utensils"></i>, 'Burgers'],
        //     [<i className="fas fa-utensils"></i>, 'Mexican'],
        //     [<i className="fas fa-utensils"></i>, 'Italian'],
        //     [<i className="fas fa-utensils"></i>, 'Sushi']
        // ];

        // const homeServices = [
        //     [<i className="fas fa-home"></i>, "Contracters"],
        //     [<i className="fas fa-home"></i>, 'Electricians'],
        //     [<i className="fas fa-home"></i>, 'Landscaping'],
        //     [<i className="fas fa-home"></i>, 'Movers']
        // ];

        // const autoServices = [
        //     [<i className="fas fa-car"></i>, 'Auto Repair'],
        //     [<i className="fas fa-car"></i>, 'Car Dealers'],
        //     [<i className="fas fa-car"></i>, 'Auto Detailing'],
        //     [<i className="fas fa-car"></i>, 'Towing']
        // ];

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
                        {/* <div className='category-item'><CategoryDropDwon 
                            icon={<i className="fas fa-utensils category"></i>}
                            name='Restaurants'
                            subCats={restaurants}/></div>
                        <div className='category-item'><CategoryDropDwon 
                            icon={<i className="fas fa-home category"></i>}
                            name='Home Services'
                            subCats={homeServices}/></div>
                        <div className='category-item'><CategoryDropDwon 
                            icon={<i className="fas fa-car category"></i>}
                            name='Auto Services'
                            subCats={autoServices}/></div> */}
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
                <div className='search-params-container'>
                
                </div>
                <div className='index-main-content'>
                    <div className='index-main-content-container'>
                        <ul className='business-index'>
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