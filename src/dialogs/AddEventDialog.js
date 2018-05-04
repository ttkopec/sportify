import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import '../App.css';

class AddEventDialog extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={() => {
                    this.props.addMarker();
                    this.handleClose();
                }}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
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
                    <DatePicker hintText="Select event date"/>
                </Dialog>
            </div>
        );
    }
}

export default AddEventDialog;