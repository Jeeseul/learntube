import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';


import ctaImg from '../../assets/img/cta/home1.jpg';

const CTA = () => {

    return (
        <div className="rs-cta section-wrap gray-bg">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="img-part">
                        <img src={ctaImg} alt="Image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="content">
                        <SectionTitle
                            sectionClass="sec-title mb-40"
                            titleClass="title"
                            title="Admission Open for 2020"
                            descClass="desc"
                            description="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail in their duty through weakness. These cases are perfectly simple and easy every pleasure is to be welcomed and every pain avoided."
                        />
                        <div className="btn-part">
                            <Link className="readon banner-style uppercase" to="/contact">Apply Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;