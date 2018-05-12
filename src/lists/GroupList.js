import React, {Component} from 'react';
import logo from './favicon.ico'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
class GroupList extends Component {
    render() {
        return (
            <List>
                <ListItem
                    primaryText="Group 2"
                    //rightIcon={<ActionGrade color={pinkA200}/>} favorites star?
                    rightAvatar={<Avatar src={logo}/>}
                />
                <ListItem
                    primaryText="Group 1"
                    rightAvatar={<Avatar src={logo}/>}
                />
            </List>
        );
    }
}

export default GroupList;
