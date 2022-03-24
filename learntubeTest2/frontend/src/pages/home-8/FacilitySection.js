import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

// Service Image Icons
import facilityImg from '../../assets/img/facilities/bg-1.png';

import icon1 from '../../assets/img/facilities/icon/1.png';
import icon2 from '../../assets/img/facilities/icon/2.png';
import icon3 from '../../assets/img/facilities/icon/3.png';

const Facility = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-facilities pt-100 pb-100 md-pt-70 md-pb-70">            
            <div className="container relative">
                <div className="img-part">
                    <img src={facilityImg} alt="Img" />
                    <div className="media-icon ">
                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                        <a className="popup-videos" onClick={() => { openModal(); }}>
                            <i className="fa fa-play"></i>
                        </a>
                    </div>
                </div>
                <div className="choose-part">
                    <div className="sec-title2 md-mb-30">
                        <div className="sub-title uppercase mb-10">
                            Top Courses
                        </div>
                        <h2 className="title mb-0">Our Facilities</h2>
                    </div>
                    <div className="our-facilities mb-15 md-mb-40">
                        <div className="icon-part">
                            <img src={icon1} alt="images" />
                        </div>
                        <div className="content-part pt-30 md-pt-0">
                            <div className="text-part">
                                <h2 className="title">Global Certificate</h2>
                                <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur adipisic,<br />
                                sed eius to mod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className="our-facilities mb-40">
                        <div className="icon-part">
                            <img src={icon2} alt="images" />
                        </div>
                        <div className="content-part pt-30 md-pt-0">
                            <div className="text-part">
                                <h2 className="title">Global Certificate</h2>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisic,<br />
                                    sed eius to mod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className="our-facilities ">
                        <div className="icon-part">
                            <img src={icon3} alt="images" />
                        </div>
                        <div className="content-part">
                            <div className="text-part">
                                <h2 className="title">Global Certificate</h2>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisic,<br />
                                    sed eius to mod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Facility;