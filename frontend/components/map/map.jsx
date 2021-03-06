import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    createMap(center, zoom) {
        zoom = parseInt(zoom);
        const mapOptions = {
            center,
            zoom
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    componentDidMount () {
        this.createMap(this.props.center, this.props.zoom);
        this.props.businesses.forEach((biz) => {
            this.placeMarker(biz);
        });
    }

    componentDidUpdate() {
        this.createMap(this.props.center, this.props.zoom);
        this.props.businesses.forEach((biz) => {
            this.placeMarker(biz);
        });
    }

    placeMarker(biz) {
        let pos = { lat: biz.lat, lng: biz.long };
        new google.maps.Marker({
            position: pos,
            map: this.map
        });

    }

    render() {

        return (
            <div className='google-map' ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default Map;