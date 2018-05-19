import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

export default class CustomSelectField extends Component {
    state = {
        isValid: false,
        values: [],
    };

    validate = () => this.state.isValid ? {} : {errorText: 'This field is required'};

    handleChange = (event, index, values) => {
        const isValid = values.length > 0;

        if (this.props.validate)
            this.props.validate.setIsValid(this.props.validate.id, isValid);

        this.setState({
            isValid: isValid,
            values: values
        });
    };

    menuItems(values) {
        return this.props.items.map((name) => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={values && values.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
        ));
    }

    render() {
        return (
            <SelectField
                multiple={true}
                hintText={this.props.hintText}
                value={this.state.values}
                onChange={this.handleChange}
                style={{display: 'block', width: '100%'}}
                {...this.validate()}
            >
                {this.menuItems(this.state.values)}
            </SelectField>
        );
    }
}

CustomSelectField.defaultProps = {
    hintText: '',
    items: ['Default']
};

CustomSelectField.propTypes = {
    hintText: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    validate: PropTypes.shape({
        id: PropTypes.string.isRequired,
        setIsValid: PropTypes.func.isRequired
    })
};