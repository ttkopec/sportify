import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import TextField from 'material-ui/TextField';

class LocationSearchInput extends Component {
    state = {
        isValid: false,
        address: ''
    };

    validate = () => this.state.isValid ? {} : {errorText: 'This field is required'};

    handleChange = (address) => {
        const isValid = address.length > 0;

        if (this.props.validate)
            this.props.validate.setIsValid(this.props.validate.id, isValid);

        this.setState({
            isValid: isValid,
            address: address
        });
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
                                hintText: this.props.hintText,
                                style: {width: '100%'},
                                ...this.validate()
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

LocationSearchInput.defaultProps = {
    hintText: ''
};

LocationSearchInput.propTypes = {
    hintText: PropTypes.string,
    handleLocationSelect: PropTypes.func.isRequired,
    validate: PropTypes.shape({
        id: PropTypes.string.isRequired,
        setIsValid: PropTypes.func.isRequired
    })
};

export default LocationSearchInput;
