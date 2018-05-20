import React, {Component} from 'react';
import logo from './favicon.ico'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

class GroupList extends Component {
    state = {
        isDetails: false,
        value: 1,

    };
    handleChange = (event, index, value) => this.setState({isDetails: this.state.isDetails, value: value});

    render() {

        if (!this.state.isDetails) {
            return (
                <divs>
                    <h3 style={{textAlign: 'center'}}>Groups</h3>

                    <TextField
                        style={{margin: 20 + 'px'}}
                        placeholder="Search"
                        onChange={(e) => this.setState({searchfor: e.target.value})}
                        margin="normal"
                    />

                    <SelectField style={{margin: 20 + 'px'}}
                                 floatingLabelText="Groups type"
                                 value={this.state.value}
                                 onChange={this.handleChange}
                    >
                        <MenuItem value={1} primaryText="My Groups"/>
                        <MenuItem value={2} primaryText="Recent Groups"/>
                        <MenuItem value={3} primaryText="All Groups"/>
                    </SelectField>
                    <br/>
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
                </divs>);
        }
        else {
            return (
                <div>
                    <h3 style={{textAlign: 'center'}}>Group Details</h3>

                    <img src={logo} className={"center"}/>
                    <h4 className={"center-text"}>Group Name</h4>
                    <h4 className={"center-text"}>Description</h4>
                    <p className={"center-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
                        augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
                        aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec</p>
                    <h4 className={"center-text"}>Members</h4>

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

        if (this.state.isDetails === true) {
            this.setState({
                isDetails: false
            });
        } else {
            this.setState({
                isDetails: true
            });

        }
    };
}

export default GroupList;
