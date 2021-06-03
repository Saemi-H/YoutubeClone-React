import React, { useState } from 'react';
import Detail from '../detailpage/Detail';
import {useHistory} from 'react-router-dom'


const VideoItem = ({video}) => {
  const history = useHistory();
    const {title, thumbnails} = video.snippet
    const [clicked, setClicked] = useState(false);
    const [selectedVideo, setSelectedVideo]=useState();
    const itemClick=()=>{
      console.log('itemclick', selectedVideo)
      setClicked(true)
    }
    const getVideoId=(id)=>{
      setSelectedVideo(id)
    }
    const handleClose =()=>{
      console.log('handleClose')
      setClicked(false)
    }

    return (
      // <li key={video.id} onClick={itemClick}>
          
      <li key={video.id} onClick={()=>{history.push("/detail"); getVideoId(video.id); itemClick()}}>
          
          <img src={`${thumbnails.default.url}`} alt="tumbnail" /> 
          <p>{title}</p>
      {clicked && <Detail selectedVideo={selectedVideo} handleClose={handleClose}/>}
       </li>
       
    );
};

export default VideoItem;