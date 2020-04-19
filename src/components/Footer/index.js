import React from 'react';
import stars from '../../stars.svg';

class Footer extends React.Component {
    
    render() {
        return(
            <div className="footer">
                <a className="footerLink" href="https://github.com/nasa/apod-api" target="blank">Made with NASA's APOD API</a>
                <a className="footerLink" href="https://www.nasa.gov" target="blank">Visit NASA.gov</a>
                <a className="footerIcon" href="https://www.tfes.org/" target="blank"><img src={stars} alt="stars icon"></img></a>
            </div>
        )
    }

}

export default Footer;