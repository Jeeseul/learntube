import React from 'react';
import { Link } from 'react-router-dom';

import ctaImg from '../../assets/img/cta/cta-bg2.jpg';

const CTA = () => {

    return (
        <div className="rs-cta">
            <div className="cta-img">
                <img src={ctaImg} alt="" />
            </div>
            <div className="cta-content text-center">
                <div className="sec-title mb-40 sm-mb-20">
                    <h2 className="title white-color extra-bold mb-16 sm-mb-5">Special Approach To Every Client</h2>
                    <h2 className="sub-title capitalize white-color mb-0">Personal &amp; Professional Skill develop</h2>
                </div>
                <div className="btn-part">
                    <Link className="readon2 transparent mr-20" to="/about">Personal Coaching</Link>
                    <Link className="readon2" to="/about">Group Coaching</Link>
                </div>
            </div>
        </div>
    );
}

export default CTA;