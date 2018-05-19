import React, {Component} from 'react';
import logo from './favicon.ico'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class GroupList extends Component {
    state = {
        isDetails: false
    };

    render() {

        if (this.state.isDetails) {
            return (
                <div onClick={this.toggleGroupDetails}>
                    <h3 style={{textAlign: 'center'}}>Groups</h3>
                    <List>
                        <ListItem
                            primaryText="Group 2"
                            onClick={this.toggleGroupDetails}
                            //rightIcon={<ActionGrade color={pinkA200}/>} favorites star?
                            rightAvatar={<Avatar src={logo}/>}
                        />
                        <ListItem
                            primaryText="Group 1"
                            onClick={this.toggleGroupDetails}
                            rightAvatar={<Avatar src={logo}/>}
                        />
                    </List>
                </div>);
        }
        else {
            return (
                <div onClick={this.toggleGroupDetails}>
                    <h3 style={{textAlign: 'center'}}>Group Details</h3>

                    <img src={logo} className={"center"}/>
                    <h4 className={"center-text"}>Group Name</h4>
                    <h4 className={"center-text"}>Members</h4>
                    <p className={"center-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
                        augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
                        aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec</p>
                    <List>
                        <ListItem
                            primaryText="Member 2"
                            onClick={this.toggleGroupDetails}
                            //rightIcon={<ActionGrade color={pinkA200}/>} favorites star?
                            rightAvatar={<Avatar src={logo}/>}
                        />
                        <ListItem
                            primaryText="Member 1"
                            onClick={this.toggleGroupDetails}
                            rightAvatar={<Avatar src={logo}/>}
                        />
                    </List>


                </div>
            );
        }
    }

    toggleGroupDetails = () => {
        this.setState({
            isDetails: false
        });
    };
}

export default GroupList;
