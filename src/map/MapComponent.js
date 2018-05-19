import React, {Component} from 'react';
import Map from "./Map";
import 'react-sliding-pane/dist/react-sliding-pane.css';
import AddEventDialog from "../dialogs/addEvent/AddEventDialog";
import EventsSlidingPanel from "../EventsSlidingPanel"
import GroupsSlidingPanel from "../GroupsSlidingPanel"
import 'react-awesome-button/dist/styles.css';
import ProfileDialog from "../dialogs/ProfileDialog";


export default class MapComponent extends Component {
    state = {
        markers: {},
        id: 0
    };

    addMarker = (latLng) => {
        const _markers = this.state.markers;
        const _id = this.state.id;
        _markers[_id] = latLng;

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
            <div id="navBar">
                <GroupsSlidingPanel/>
                <ProfileDialog/>
                <EventsSlidingPanel/>
            </div>
        </div>


    };
}