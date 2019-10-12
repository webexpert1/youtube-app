import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    // console.log(props.video)
    return (
       <div>
            <li className="list-group-item" onClick={() => onVideoSelected(video)}>
              <div className="video-list media">
                 <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                 </div>

                 <div className="media-body">
                   <div className="media-heading">
                      {video.snippet.title}
                   </div>
                 </div>
              </div>
            </li>
       </div>
    );
}

export default VideoListItem;