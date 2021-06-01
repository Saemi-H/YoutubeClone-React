import React, { useState } from 'react';
import Detail from '../detailpage/Detail';
import {useHistory} from 'react-router-dom'


const VideoItem = ({video}) => {
  const history = useHistory();
    const {title, thumbnails} = video.snippet
    const [clicked, setClicked] = useState(false);
    const itemClick=()=>{
      console.log('itemclick')
      setClicked(true)
    }
    const handleClose =()=>{
      console.log('handleClose')
      setClicked(false)
    }

    return (
      // <li key={video.id} onClick={itemClick}>
          
      <li key={video.id} onClick={()=>history.push('/detail')}>
          
          <img src={`${thumbnails.default.url}`} alt="tumbnail" /> 
          <p>{title}</p>
          {/* {clicked && <Detail videoId={video.id} handleClose={handleClose} />} */}
       </li>
       
    );
};

export default VideoItem;