import React from "react";
import { FaWindowClose } from "react-icons/fa";
import {useHistory} from 'react-router-dom';
import VideoList from "../videoList/videoList";
import "./styleDetail.css";

const Detail = ({ selectedVideo, handleClose }) => {
    const history = useHistory();
    console.log("detail",selectedVideo)
    return (
        <div className="detail-body">
             <iframe type="text/html"  title="Youtube Video Player"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            frameBorder="0"
            allowFullScreen></iframe> 
            {/* <FaWindowClose onClick={handleClose} /> */}
            <section className="main">
            <FaWindowClose onClick={()=>history.push("/")} />
           
          </section>
          <section className="video-list">
              
          </section>
        </div>
    );
};

export default Detail;
