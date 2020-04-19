import React from 'react';
import Photo from '../../photo.svg';

class ImageFile extends React.Component {

    render() {

        return(

            <div>
                
                <div id="imageContent">    
                    <div className="imageView">
                        <img src={ this.props.data.url } alt={ this.props.data.title }/>
                    </div>
                    <div className="imageText">
                        <h3>{ this.props.data.title }</h3>
                        <p className="explanation">{ this.props.data.explanation }</p>
                        <a className="fullImageButton" href={ this.props.data.url } target="blank"><img src={Photo} className="iconInButton" alt="full screen icon"></img><span>See full Size</span></a>
                    </div>
                </div>

            
            </div>

        )
    }

}

export default ImageFile;

