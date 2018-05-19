import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import PropTypes from 'prop-types';

export default class CustomDatePicker extends Component {
    state = {
        isValid: false,
        value: undefined,
    };

    validate = () => this.state.isValid ? {} : {errorText: 'This field is required'};

    handleChange = (nil, date) => {
        const isValid = Boolean(date);

        if (this.props.validate)
            this.props.validate.setIsValid(this.props.validate.id, isValid);

        this.setState({
            isValid: isValid,
            value: date
        });
    };

    render() {
        return (
            <DatePicker hintText={this.props.hintText}
                        onChange={this.handleChange}
                        value={this.state.value}
                        style={{width: '100%'}}
                        {...this.validate()}
            />
        );
    }
}

CustomDatePicker.defaultProps = {
    hintText: '',
};

CustomDatePicker.propTypes = {
    hintText: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    validate: PropTypes.shape({
        id: PropTypes.string.isRequired,
        setIsValid: PropTypes.func.isRequired
    })
};