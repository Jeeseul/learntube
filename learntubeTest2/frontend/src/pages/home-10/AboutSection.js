import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/img/about/home9/about.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about style9 pt-100 pb-100 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 md-mb-40">
                        <div className="img-part">
                            <img
                                src={aboutImg}
                                alt='Image'
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-100 md-pl-14 col-md-12">
                        <div className="content">
                            <div className="sub-title mb-20">
                                About Us
                            </div>
                            <h2 className="sl-title mb-40 md-mb-20">We are leading discovery and innovation since 1905</h2>
                            <p className="desc mb-50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem sum dolor sit amet.
                            </p>
                        </div>
                        <div className="btn-part">
                            <Link className="readon yellow-btn" to="/about">Discover More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;