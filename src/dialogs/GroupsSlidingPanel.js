import React, {Component} from 'react';
import SlidingPane from 'react-sliding-pane';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


class GroupsSlidingPanel extends Component {
    state = {
        isPaneOpen: false
    };

    render() {
        return (
            <div>
                <button className="navButton" onClick={() => this.setState({isPaneOpen: true})}>Groups</button>

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
                    <br/>
                    <img src={'img.png'}/>
                </SlidingPane>
            </div>
        );
    }
}

export default GroupsSlidingPanel;
