import React from 'react';
import { Link } from 'react-router-dom';

const CTATwo = () => {

    return (
        <div className="rs-cta effects-layer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-30">
                        <div className="effects-bg apply-bg mt-0">
                            <div className="content-part">
                                <h2 className="title">Become An Instructor</h2>
                                <div className="description mb-26">Lorem ipsum dolor sit amet, consectetur adipisi elit, sed eius to mod tempor incididunt ut labor
                                    ets.</div>
                                <div className="btn-part">
                                    <Link className="readon2 cta-btn" to="/about">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="effects-bg enroll-bg mt-0">
                            <div className="content-part">
                                <h2 className="title">Enroll Open for 2021</h2>
                                <div className="description mb-26">Lorem ipsum dolor sit amet, consectetur adipisi elit, sed eius to mod tempor incididunt ut labor
                                    ets.</div>
                                <div className="btn-part">
                                    <Link className="readon2 cta-btn" to="/about">Enroll Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTATwo;