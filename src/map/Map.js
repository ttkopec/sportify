import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{lat: 50.049683, lng: 19.944544}}>
        {Object.entries(props.markers).map(([id, position]) =>
            <Marker key={id} position={position}/>)}
    </GoogleMap>
));

Map.propTypes = {
    markers: PropTypes.shape({
        id: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number
        })
    }).isRequired
};

export default Map