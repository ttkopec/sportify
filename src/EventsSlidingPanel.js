import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import EventList from './lists/EventList';

class EventsSlidingPanel extends Component {
    state = {
        isPaneOpen: false
    };

    render() {
        return (
            <div>
                <RaisedButton className="navButton"
                              onClick={this.handleToggle}>Events</RaisedButton>
                <Drawer open={this.state.isPaneOpen}
                        openSecondary={true}
                >
                    <EventList/>
                </Drawer>
            </div>
        );
    }

    handleToggle = () => this.setState({isPaneOpen: !this.state.isPaneOpen});
}

export default EventsSlidingPanel;
