import React from 'react';
import { Link } from 'react-router-dom';

class DropDownMenu extends React.Component {

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
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {

        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({
                showMenu: false
            }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render () {
        return (

            <div className="home-drop-down">
                <button onClick={this.showMenu}>
                    <div className='drop-down-button'>
                        <img src={window.dog} />
                        <i className="fas fa-caret-down"></i>
                    </div>
                </button>
                {
                this.state.showMenu ? (
                    <div>
                        <div className='arrow-up'></div>
                        <div 
                        className="menu" 
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}>
                            <div className='menu-user-info'>
                                <div className='menu-profile-pic'>
                                    <Link to='/'><img src={window.dog} /></Link>
                                </div>
                                <div className='menu-user-info'>
                                    <Link className='menu-user-name' to='/'>{this.props.currentUser.f_name } {this.props.currentUser.l_name[0]}</Link>
                                </div>
                            </div>
                            <div className='menu-log-out'>
                                <button className='menu-btn' onClick={this.props.logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                ) : (null)
                }
            </div>
        );
    }
}

export default DropDownMenu;