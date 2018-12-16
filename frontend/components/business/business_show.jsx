import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {

    componentDidMount () {
        // debugger
        this.props.fetchAllBusinesses();
    }

    render () {

        return (
            <h1>{this.props.biz.name}</h1>
        )
    }
}

export default BusinessShow;