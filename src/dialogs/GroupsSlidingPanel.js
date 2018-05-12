import React, {Component} from 'react';
import SlidingPane from 'react-sliding-pane';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {withStyles} from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import GroupList from "../lists/GroupList";


class GroupsSlidingPanel extends Component {
    state = {
        isPaneOpen: false
    };

    render() {
        return (
            <div>
                < RaisedButton color="primary" className="navButton"
                               onClick={() => this.setState({isPaneOpen: true})}>Groups</RaisedButton>
                <SlidingPane
                    className='some-custom-class'
                    overlayClassName='some-custom-overlay-class'
                    isOpen={this.state.isPaneOpen}
                    title='Groups'
                    from={"left"}
                    subtitle='Optional subtitle.'
                    width='400px'
                    onRequestClose={() => {
                        this.setState({isPaneOpen: false});
                    }}>
                    <GroupList/>
                </SlidingPane>
            </div>
        );
    }
}

export default GroupsSlidingPanel;
