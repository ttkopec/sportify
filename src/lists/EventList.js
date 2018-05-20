import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import logo from './favicon.ico'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';


class EventList extends Component {
    state = {
        isDetails: false,
        value: 1,
    };


    handleChange = (event, index, value) => this.setState({isDetails: this.state.isDetails, value: value});


    render() {

        if (!this.state.isDetails) {
            return (
                <div>

                    <h3 style={{textAlign: 'center'}}>Events</h3>

                    <TextField
                        style={{margin: 20 + 'px'}}
                        placeholder="Search"
                        onChange={(e) => this.setState({searchfor: e.target.value})}
                        margin="normal"
                    />

                    <SelectField style={{margin: 20 + 'px'}}
                                 floatingLabelText="Events type"
                                 value={this.state.value}
                                 onChange={this.handleChange}
                    >
                        <MenuItem value={1} primaryText="My Events"/>
                        <MenuItem value={2} primaryText="Recent Events"/>
                        <MenuItem value={3} primaryText="All Events"/>
                    </SelectField>
                    <br/>
                    <List>
                        <ListItem
                            primaryText="Event 2"
                            onClick={this.toggleEventDetails}
                            //rightIcon={<ActionGrade color={pinkA200}/>} favorites star?
                            rightAvatar={<Avatar src={logo}/>}
                        />
                        <ListItem
                            primaryText="Event 1"
                            onClick={this.toggleEventDetails}
                            rightAvatar={<Avatar src={logo}/>}
                        />
                    </List>
                </div>);
        }
        else {
            return (
                <div>
                    <h3 style={{textAlign: 'center'}}>Event Details</h3>

                    <img src={logo} className={"center"}/>
                    <h4 className={"center-text"}>Event Name</h4>
                    <h4 className={"center-text"}>Description</h4>
                    <p className={"center-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
                        augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
                        aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec</p>
                    <h4 className={"center-text"}>Members</h4>

                    <List>
                        <ListItem
                            primaryText="Member 2"
                            onClick={this.toggleEventDetails}
                            //rightIcon={<ActionGrade color={pinkA200}/>} favorites star?
                            rightAvatar={<Avatar src={logo}/>}
                        />
                        <ListItem
                            primaryText="Member 1"
                            onClick={this.toggleEventDetails}
                            rightAvatar={<Avatar src={logo}/>}
                        />
                    </List>


                </div>
            );
        }
    }

    toggleEventDetails = () => {

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

export default EventList;
