import React, {Component} from 'react';
import Map from "./Map";
import AddEventDialog from "../dialogs/AddEventDialog";

export default class MapComponent extends Component {
    state = {
        markers: {},
        id: 0
    };

    addMarker = (latitude, longitude) => {
        latitude = 50.05;
        longitude = 19.90;
        const _markers = this.state.markers;
        const _id = this.state.id;
        _markers[_id] = {lat: latitude, lng: longitude};

        this.setState({markers: _markers, id: _id + 1});
    };

    render() {
        return <div>
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `600px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                markers={this.state.markers}
            />
            <AddEventDialog addMarker={this.addMarker}/>
        </div>
    };
}