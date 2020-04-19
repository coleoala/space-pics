import React from 'react';
import Refresh from '../../refresh.svg';

class RefreshButton extends React.Component {

    render() {

        return(
            <a className="fullImageButton" onClick = {this.props.getImage}><img src={Refresh} className="iconInButton" alt="refresh icon"></img><span>Get new Image</span></a>
        );

    };


};

export default RefreshButton;