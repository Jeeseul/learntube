import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {

    return (
        <div className="rs-cta home9-style">
            <div className="partition-bg-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 pl-90 md-pl-14">
                            <div className="sec-title3 mb-40 md-mb-10">
                                <div className="sub-title big">Campus Safety</div>
                                <h2 className="title white-color pr-70 sm-pr-0">COVID-19 information and updates</h2>
                                <div className="desc white-color mb-40">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem sum dolor sit amet.
                                </div>
                                <div className="btn-part">
                                    <Link className="readon yellow-btn transparent3" to="/about">Covid-19 Updates</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;