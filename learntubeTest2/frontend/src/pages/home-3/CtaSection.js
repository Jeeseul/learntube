import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import SectionTitle from '../../components/Common/SectionTitle';

const Cta = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-cta style2">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="partition-bg-wrap home2">
                <div className="container">
                    <div className="row y-bottom">
                        <div className="col-lg-6 pb-50 md-pt-100 md-pb-100">
                            <div className="video-wrap">
                                <a className="popup-videos" onClick={() => { openModal(); }}><i className="fa fa-play"></i> <h4 className="title mb-0">Take a Video  Tour at Educavo</h4></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-62 pt-134 pb-150 md-pl-14 md-pt-44 md-pb-50">
                            <SectionTitle
                                sectionClass="sec-title mb-40 md-mb-20"
                                titleClass="title mb-16 md-mb-10"
                                title="Admission Open for 2020"
                                descClass="desc"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis."
                            />
                            <div className="btn-part">
                                <Link className="readon2" to="/contact">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;