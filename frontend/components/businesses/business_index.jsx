import React from 'react';
import BusinessIndexItem from './business_index_item';
import { Link } from 'react-router-dom';
import DropDownMenuContainer from '../drop_down_menu/drop_down_menu_container';
import CategoryDropDwon from '../drop_down_menu/category_drop_down';
import SearchBarContainer from '../search/search_bar_container';
import Map from '../map/map';

class BusinessIndex extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        if (!this.props.results) this.props.fetchAllBusinesses();
    }
    
    componentDidUpdate(preProps) {
        if (this.props.results !== preProps.results && !this.props.results) this.props.fetchAllBusinesses();
    }

    handleClick(e) {
        e.preventDefault();
        this.props.searchBusinesses(e.currentTarget.value);
    }

    render () {


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

        const result = () => {

            return (
                <div className='display-results-message'>
                    <div><span>Showing Results for:</span> {this.props.search}</div>
                </div>
            )
        }

        const noResult = () => {
            return (
                <div className='display-results-message'>
                    <div><span>There are no results for:</span> {this.props.search}</div>
                    <div><span>showing all businesses</span></div>
                </div>
            )
        }

        return (
            <div className='outer-wrapper'>
                <header className='business-index-header'>
                    <nav className='business-index-nav'>
                        <div className='index-logo'>
                            <Link className='logo-link' to='/'><img className='logo-img' src={window.logo} /></Link>
                        </div>
                        <div className='index-search-bar'>
                            <SearchBarContainer placeHolder='tacos, cheap dinner...' />
                        </div>
                        <nav className="index-nav-bar">
                            {this.props.currentUser ? greeting() : sessionLinks()}
                        </nav>
                    </nav>
                </header>
                <div className='categories'>
                    <div className='categories-bar'>
                        <div className='category-container'>
                            <div className='category-item'>
                                <button 
                                onClick={this.handleClick} 
                                value='Restaurant'
                                className='category-button'>
                                    <div className='category-icon'><i className="fas fa-utensils category"></i></div>
                                    <div className='category-name'>Restaurants</div>
                                    <i className="fas fa-angle-down category"></i>
                                </button>
                                <div className='sub-cats'>
                                    <button 
                                    onClick={this.handleClick}
                                    value='Burgers'
                                    className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Burgers</div>
                                    </button>
                                    <button 
                                    onClick={this.handleClick}
                                    value='Mexican'
                                    className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Mexican</div>
                                    </button>
                                    <button 
                                    onClick={this.handleClick}
                                    value='Italian'
                                    className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Italian</div>
                                    </button>
                                    <button 
                                    onClick={this.handleClick}
                                    value='Seafood'
                                    className='sub-cat'>
                                        <i className="fas fa-utensils category"></i>
                                        <div className='sub-cat-name'>Seafood</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='category-container'>
                            <div className='category-item'>
                                <button 
                                onClick={this.handleClick}
                                value='Home'
                                className='category-button'>
                                    <div className='category-icon'><i className="fas fa-home category"></i></div>
                                    <div className='category-name'>Home Services</div>
                                    <i className="fas fa-angle-down category"></i>
                                </button>
                                <div className='sub-cats'>
                                    <button
                                    onClick={this.handleClick}
                                    value='Contractor'
                                    className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Contractors</div>
                                    </button>
                                    <button
                                    onClick={this.handleClick}
                                    value='Landscaping'
                                    className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Landscaping</div>
                                    </button>
                                    <button 
                                    onClick={this.handleClick}
                                    value='Electrician'
                                    className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Electricians</div>
                                    </button>
                                    <button
                                    onClick={this.handleClick}
                                    value='Mover'
                                    className='sub-cat'>
                                        <i className="fas fa-home category"></i>
                                        <div className='sub-cat-name'>Movers</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='category-container'>
                            <div className='category-item'>
                                <button
                                onClick={this.handleClick}
                                value='Auto'
                                className='category-button'>
                                    <div className='category-icon'><i className="fas fa-car category"></i></div>
                                    <div className='category-name'>Auto Services</div>
                                    <i className="fas fa-angle-down category"></i>
                                </button>
                                <div className='sub-cats'>
                                    <button
                                    onClick={this.handleClick}
                                    value='Auto Repair'
                                    className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Auto Repair</div>
                                    </button>
                                    <button
                                    onClick={this.handleClick}
                                    value='Dealer'
                                    className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Dealers</div>
                                    </button>
                                    <button
                                    onClick={this.handleClick}
                                    value='Auto Detail'
                                    className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Auto Detail</div>
                                    </button>
                                    <button
                                    onClick={this.handleClick}
                                    value='Towing'
                                    className='sub-cat'>
                                        <i className="fas fa-car category"></i>
                                        <div className='sub-cat-name'>Towing</div>
                                    </button>
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
                    {this.props.results ? result() : noResult()}
                </div>
                <div className='index-main-content'>
                    <div className='index-main-content-container'>
                        <ul className='business-index'>
                            {indexItems}
                        </ul>
                        <div className='index-map'>
                            <Map businesses={this.props.businesses} center={{lat: 37.7758, lng: -122.435} } zoom='11'/>
                        </div>                
                    </div>
                </div>
            </div>
        );
    }
    
}

export default BusinessIndex;