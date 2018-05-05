import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import TextField from 'material-ui/TextField';

class LocationSearchInput extends Component {
    state = {
        address: ''
    };

    handleChange = (address) => {
        this.setState({address});
    };

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(this.props.handleLocationSelect)
            .catch(error => console.error('Error', error))
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps}) => (
                    <div>
                        <TextField
                            {...getInputProps({
                                hintText: 'Search locations'
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const style = suggestion.active
                                    ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                    : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                return (
                                    <div {...getSuggestionItemProps(suggestion, {style})}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

LocationSearchInput.propTypes = {
    handleLocationSelect: PropTypes.func.isRequired
};

export default LocationSearchInput;
