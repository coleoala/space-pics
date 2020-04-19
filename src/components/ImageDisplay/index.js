import React from 'react';
import ImageFile from '../ImageFile';
import VideoFile from '../VideoFile';


class ImageDisplay extends React.Component {

    render() {

        return(

            <div>

                {this.props.imageData.map((data) => (
                    
                    data.media_type  === "image" ? <ImageFile data={data} getImage={this.props.getImage} /> : <VideoFile data={data} getImage={this.props.getImage} />
                    
                ))}
       
            </div>

        );

    };

};

export default ImageDisplay;