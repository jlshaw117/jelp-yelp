import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 12
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.props.businesses.forEach((biz) => {
            this.placeMarker(biz);
        });
        // this.MarkerManager = new MarkerManager(this.map);
        // this.MarkerManager.updateMarkers(this.props.businesses);

    }

    componentDidUpdate() {
        // this.placeMarkers();
        this.props.businesses.forEach((biz) => {
            this.placeMarker(biz);
        });
    }

    placeMarker(biz) {
        let pos = { lat: biz.long, lng: biz.lat };
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