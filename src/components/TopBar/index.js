import React from 'react';
import Logo from '../../logo.svg';

class TopBar extends React.Component {

    render() {
        return(
            <div className="topBar">
            <img className="logo" src={Logo}/>
            <h1>Astronomy Images</h1>
          </div>
        )
    }

}

export default TopBar;