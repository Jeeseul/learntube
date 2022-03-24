import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import videoImg from '../../assets/img/about/about-video-bg-orange.png';

const AboutVideo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-about-video pt-110 pb-110 md-pt-70 md-pb-70">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="video-img-part media-icon orange-color2">
                    <img
                        src={videoImg}
                        alt="images"
                    />
                    <a className="popup-videos" onClick={() => { openModal(); }}>
                        <i className="fa fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;