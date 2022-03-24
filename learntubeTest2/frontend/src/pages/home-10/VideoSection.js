import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import bgImg from '../../assets/img/video/video2.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center center',
}

const Videos = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-video-home9" style={bgStyle}>
            <div className="img-part media-icon yellow-color">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                <a className="popup-videos" onClick={() => { openModal(); }}>
                    <i className="fa fa-play"></i>
                </a>
            </div>
        </div>
    );
}

export default Videos;