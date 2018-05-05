import React, {Component} from 'react';
import SlidingPane from 'react-sliding-pane';


class EventsSlidingPanel extends Component {
    state = {
        isPaneOpen: false
    };

    render() {
        return (
            <div>
                <button className="navButton" onClick={() => this.setState({isPaneOpen: true})}>Events</button>

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
