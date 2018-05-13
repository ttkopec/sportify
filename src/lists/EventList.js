import React, {Component} from 'react';
import logo from './favicon.ico'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class EventList extends Component {
    render() {
        return (
            <div>
                <h3 style={{textAlign: 'center'}}>Events</h3>
                <List>
                    <ListItem
                        primaryText="Event 2"
                        //rightIcon={<ActionGrade color={pinkA200}/>} favorites star?
                        rightAvatar={<Avatar src={logo}/>}
                    />
                    <ListItem
                        primaryText="Event 1"
                        rightAvatar={<Avatar src={logo}/>}
                    />
                </List>
            </div>
        );
    }
}

export default EventList;
