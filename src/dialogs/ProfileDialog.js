import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './favicon.ico';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import '../App.css';

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
                        <img src={logo} className={"center"}/>
                        <h4 className={"center-text"}>Tomasz Kopeć</h4>

                        <p className={"center-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
                            augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
                            aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec
                            venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui
                            id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus
                            leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget
                            neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et
                            mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at
                            aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.</p>
                    </div>
                </Dialog>
            </div>
        );
    }
}

ProfileDialog.propTypes = {};

export default ProfileDialog;