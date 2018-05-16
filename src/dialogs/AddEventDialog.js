import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import '../App.css';
import LocationSearchInput from "./LocationSearchInput";

class AddEventDialog extends Component {
    state = {
        open: false,
        latLng: {}
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleAdd = (latLng) => {
        this.props.addMarker(latLng);
        this.handleClose();
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
                    <LocationSearchInput handleLocationSelect={this.handleLocationSelect}/>
                    <DatePicker hintText="Select event date"/>
                </Dialog>
            </div>
        );
    }
}

AddEventDialog.propTypes = {
    addMarker: PropTypes.func.isRequired
};

export default AddEventDialog;