import React from 'react';
import { Link } from 'react-router-dom';

class CategoryDropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault;
        this.setState({
            showMenu: true
        }, () => {
            document.addEventListener('mouseover', this.closeMenu);
        });
    }

    closeMenu () {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({
                showMenu: false
            }, () => {
                document.removeEventListener('mouseover', this.closeMenu);
            });
        }
    }

    render () {

        let subCategories = this.props.subCats.map((sub) => {
            return (
                <div className='sub'>
                    <div className='sub-icon'>{sub[0]}</div>
                    <div className='sub-name'>{sub[1]}</div>
                </div>
            )
        })
        return (
            <div className='drop-down'>
                <button className='category-button' onMouseOver={this.showMenu}>
                    <div className='category-icon'>{this.props.icon}</div>
                    <div className='category-name'>{this.props.name}</div>
                    <i className="fas fa-angle-down category"></i>
                </button>
                {
                    this.state.showMenu ? (
                        <div 
                        className='category-menu'
                        ref={(element) => {
                            this.dropdownMenu = element
                        }}>
                            {subCategories}
                        </div>
                    ) : (null)
                }
            </div>
        );
    }
}

export default CategoryDropDown;