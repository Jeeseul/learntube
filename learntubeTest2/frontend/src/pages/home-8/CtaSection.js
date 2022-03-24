import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {

    return (
        <div className="rs-cta style7">
            <div className="partition-bg-wrap">
                <div className="container">
                    <div className="row md-pl-pr pt-100 md-pt-70 pb-100 md-pb-80">
                        <div className="col-lg-6 pl-62 md-pl-15 col-md-12 md-pb-70">
                            <div className="sec-title2 mb-40">
                                <h2 className="title white-color mb-16">Students Orientation 2020</h2>
                                <div className="desc white-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis.</div>
                            </div>
                            <div className="btn-part">
                                <Link className="readon border-less" to="/contact">Apply Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-62 md-pl-15 col-md-12 md-pt-80">
                            <div className="sec-title2 mb-40">
                                <h2 className="title white-color mb-16">Admission Open for 2020</h2>
                                <div className="desc white-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis.</div>
                            </div>
                            <div className="btn-part">
                                <Link className="readon border-less" to="/contact">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;