import React, {Component} from 'react';
import SlidingPane from 'react-sliding-pane';
import RaisedButton from 'material-ui/RaisedButton';



class EventsSlidingPanel extends Component {
    state = {
        isPaneOpen: false
    };

    render() {
        return (
            <div>
                <RaisedButton className="navButton" onClick={() => this.setState({isPaneOpen: true})}>Events</RaisedButton>

                <SlidingPane
                    className='some-custom-class'
                    overlayClassName='some-custom-overlay-class'
                    isOpen={this.state.isPaneOpen}
                    title='Events'
                    width='400px'
                    subtitle='Optional subtitle.'
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

export default EventsSlidingPanel;
