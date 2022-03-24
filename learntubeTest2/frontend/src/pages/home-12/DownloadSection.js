import React from 'react';
import { Link } from 'react-router-dom';

import downloadImg from '../../assets/img/download/m-app.png';

import icon1 from '../../assets/img/download/play.png';
import icon2 from '../../assets/img/download/apple.png';

const Download = () => {

    return (
        <div className="rs-download-app pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 md-mb-40">
                        <div className="img-part">
                            <img src={downloadImg} alt="" />

                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        <div className="sec-title3 mb-30">
                            <div className="sub-title green-color">Download Mobile App</div>
                            <h2 className=" title new-title">Learn anything - Any Time - Any Where ; Mobile/Desktop</h2>
                            <div className="new-desc">Lorem ipsum dolor sit amet, ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua sed eius to mod tempors incid idunt ut labore data management.</div>
                        </div>
                        <div className="mobile-img">
                            <div className="apps-image pr-20 sm-pr-4">
                                <Link to='#'><img src={icon1} alt="" /></Link>
                            </div>
                            <div className="apps-image">
                                <Link to='#'><img src={icon2} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;