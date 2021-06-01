import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "./styleDetail.css";

const Detail = ({ videoId, handleClose }) => {
    return (
        <div className="detail-body">
            <FaWindowClose onClick={handleClose} />
            {/* <iframe id="player" type="text/html" width="640" height="390"
            src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
            frameborder="0"></iframe>  */}
            여기는 디테일이에요
        </div>
    );
};

export default Detail;
