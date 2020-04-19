import React from 'react';
import refresh from '../../refresh.svg';

class TopBar extends React.Component {

    refresh = () => {
        this.props.getImage();
    };

    render() {
        return(
            <div className="topBar">
            <button className="refreshButton" onClick = {this.refresh}><img src={refresh} alt="refresh icon"></img></button>
            <h1>Astronomy Images</h1>
          </div>
        )
    }

}

export default TopBar;