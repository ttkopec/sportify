import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class CustomTextField extends Component {
    state = {
        isValid: false,
        value: ''
    };

    handleChange = (event) => {
        const isValid = event.target.value.length > 0;

        if (this.props.validate)
            this.props.validate.setIsValid(this.props.validate.id, isValid);

        this.setState({
            isValid: isValid,
            value: event.target.value
        });
    };

    validate = () => this.state.isValid ? {} : {errorText: 'This field is required'};

    render() {
        return (
            <TextField hintText={this.props.hintText}
                       onChange={this.handleChange}
                       value={this.state.value}
                       style={{width: '100%'}}
                       {...this.validate()}
            />
        )
    }
}

CustomTextField.defaultProps = {
    hintText: ''
};

CustomTextField.propTypes = {
    hintText: PropTypes.string,
    validate: PropTypes.shape({
        id: PropTypes.string.isRequired,
        setIsValid: PropTypes.func.isRequired
    })
};