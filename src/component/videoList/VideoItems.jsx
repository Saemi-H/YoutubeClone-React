import React from "react";
import VideoItem from "./VideoItem";

const VideoItems = ({ videolist }) => {
    return (
        <div>
            <ul>
                {videolist.map(video => (
                    
                        <VideoItem video={video} />
               
                ))}
            </ul>
        </div>
    );
};

export default VideoItems;
