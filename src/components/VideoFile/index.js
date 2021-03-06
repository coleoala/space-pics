import React from 'react';
import Video from '../../video.svg';
import RefreshButton from '../RefreshButton';

class VideoFile extends React.Component {

    render() {

        return(

            <div>
                
                <div id="imageContent">    
                    <div className="imageView">
                        <img src={ this.props.data.thumbnail_url } alt={ this.props.data.title }/>
                    </div>
                    <div className="imageText">
                        <h3>{ this.props.data.title }</h3>
                        <p className="explanation">{ this.props.data.explanation }</p>
                        <a className="fullImageButton" href={ this.props.data.url } target="blank"><img src={Video} className="iconInButton" alt="video player icon"></img><span>Watch Video</span></a>
                        <RefreshButton getImage={this.props.getImage} />
                    </div>
                </div>

            
            </div>

        )
    }

}

export default VideoFile;