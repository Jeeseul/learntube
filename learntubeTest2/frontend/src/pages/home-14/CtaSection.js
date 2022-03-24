import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {

    return (
        <div className="rs-cta home-style14">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12 md-mb-30">
                        <div className="content-part">
                            <span className="sub-text">Join With Us</span>
                            <h2 className="title">20% Offer Running - Join Today</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="btn-part text-end">
                            <Link className="readon2 cta-btn" to="/about">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;