import React from 'react';
import ImageFile from '../ImageFile';
import VideoFile from '../VideoFile';


const ImageDisplay = ({ imageData }) => {
    
    
    return(
        <div>
            {imageData.map((data) => (
                
                data.media_type  === "image" ? <ImageFile data={data} /> : <VideoFile data={data} />

            ))}
       
        </div>
    )
}

export default ImageDisplay;