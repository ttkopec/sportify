import React, {Component} from 'react';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {withStyles} from 'material-ui/styles'
import Drawer from 'material-ui/Drawer';

import RaisedButton from 'material-ui/RaisedButton';
import GroupList from "../lists/GroupList";


class GroupsSlidingPanel extends Component {
    state = {
        isPaneOpen: false
    };

    render() {
        return (
            <div>
                <RaisedButton className="navButton"
                              onClick={this.handleToggle}>Groups</RaisedButton>
                <Drawer open={this.state.isPaneOpen}
                >
                    <GroupList/>
                </Drawer>
            </div>
        );
    }

    handleToggle = () => this.setState({isPaneOpen: !this.state.isPaneOpen});

}

export default GroupsSlidingPanel;
