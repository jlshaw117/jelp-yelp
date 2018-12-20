import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            terms: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        return (e) => this.setState({
            terms: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.searchBusinesses(this.state.terms)
        .then(() => this.props.history.push('/businesses'));
    }

    render() {

        return (
            <div className='search-bar-wrapper'>
                <div className ='input-wrapper'>
                    <div className='input-label'>Find</div>
                    <input type="text" className="search-input" placeholder={this.props.placeHolder} onChange={this.update()}/>
                </div>
                <button className='search-button' onClick={this.handleSubmit}><i className="fas fa-search"></i></button>
            </div>
        )
    }
}

export default SearchBar;