import {Divider, Paper, TextField} from "material-ui";
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './favicon.ico';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import '../App.css';

const style = {
    marginLeft: '2px',
};

class ProfileDialog extends Component {
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
                label="Exit"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton className="navButton" onClick={this.handleOpen}>Profile</RaisedButton>
                <Dialog
                    autoDetectWindowHeight={true}
                    autoScrollBodyContent={true}
                    repositionOnUpdate={true}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <div className={"center"}>
                        <img src={logo} className={"center"} style={{marginBottom: '10px'}}/>
                        <Paper zDepth={2}>
                            <TextField defaultValue="Tomasz"
                                       floatingLabelText="First name"
                                       style={style}
                                       underlineShow={false}/>
                            <Divider/>
                            <TextField defaultValue="Kopec"
                                       floatingLabelText="Lastname"
                                       style={style}
                                       underlineShow={false}/>
                            <Divider/>
                            <TextField defaultValue="Group1, Group2, Group3"
                                       floatingLabelText="Groups"
                                       style={style}
                                       underlineShow={false}/>
                            <Divider/>
                            <TextField defaultValue="tkopec@gmail.com"
                                       floatingLabelText="Email address"
                                       style={style}
                                       underlineShow={false}/>
                            <Divider/>
                        </Paper>
                    </div>
                </Dialog>
            </div>
        );
    }
}

ProfileDialog.propTypes = {};

export default ProfileDialog;