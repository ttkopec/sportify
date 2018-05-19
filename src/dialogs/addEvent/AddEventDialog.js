import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import '../../App.css';
import LocationSearchInput from "./LocationSearchInput";
import CustomSelectField from './CustomSelectField';
import DataProvider from '../../data/DataProvider';
import CustomTextField from './CustomTextField';
import CustomDatePicker from './CustomDatePicker';

class AddEventDialog extends Component {
    state = {
        open: false,
        latLng: {},
        inputsValid: {
            eventName: false,
            categories: false,
            location: false,
            eventDate: false
        }
    };

    validateInputs = () => {
        return Object.values(this.state.inputsValid).every(isValid => isValid === true)
    };

    setIsValid = (inputName, isValid) => {
        const {inputsValid} = this.state;
        inputsValid[inputName] = isValid;

        this.setState({'inputsValid': inputsValid});
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        const {inputsValid} = this.state;
        Object.keys(inputsValid).forEach(inputKey => {
            inputsValid[inputKey] = false;
        });

        // TODO remove when eventDate input validation is implemented
        inputsValid['eventDate'] = true;

        this.setState({open: false, inputsValid: inputsValid});
    };

    handleAdd = (latLng) => {
        if (this.validateInputs()) {
            this.props.addMarker(latLng);
            this.handleClose();
        }
    };

    handleLocationSelect = (latLng) => {
        this.setState({latLng: latLng});
    };

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={() => this.handleAdd(this.state.latLng)}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <FloatingActionButton secondary={true} onClick={this.handleOpen} className='fab'>
                    <ContentAdd/>
                </FloatingActionButton>
                <Dialog
                    title="Add event"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <CustomTextField
                        validate={{setIsValid: this.setIsValid, id: 'eventName'}}
                        hintText='Event name'/>

                    <CustomSelectField
                        validate={{setIsValid: this.setIsValid, id: 'categories'}}
                        hintText='Select categories'
                        items={DataProvider.getEventCategories().map(category => category.name)}/>

                    <LocationSearchInput
                        validate={{setIsValid: this.setIsValid, id: 'location'}}
                        hintText='Search location'
                        handleLocationSelect={this.handleLocationSelect}/>

                    <CustomDatePicker
                        validate={{setIsValid: this.setIsValid, id: 'eventDate'}}
                        hintText='Select event date'/>
                </Dialog>
            </div>
        );
    }
}

AddEventDialog.propTypes = {
    addMarker: PropTypes.func.isRequired
};

export default AddEventDialog;