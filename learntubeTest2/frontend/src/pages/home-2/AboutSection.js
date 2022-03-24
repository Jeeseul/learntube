import React from 'react';

import authorImg from '../../assets/img/about/ceo.png';
import authorSign from '../../assets/img/about/sign.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about style1 pb-100 md-pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 order-last">
                        <div className="notice-bord style1">
                            <h4 className="title">Notice Board</h4>
                            <ul>
                                <li>
                                    <div className="date"><span>20</span>June</div>
                                    <div className="desc">Lorem Ipsum is simply dummy text of the printing and setting</div>
                                </li>
                                <li>
                                    <div className="date"><span>22</span>Aug</div>
                                    <div className="desc">Lorem Ipsum is simply dummy text of the printing and setting</div>
                                </li>
                                <li>
                                    <div className="date"><span>14</span>May</div>
                                    <div className="desc">Lorem Ipsum is simply dummy text of the printing and setting</div>
                                </li>
                                <li>
                                    <div className="date"><span>31</span>Sept</div>
                                    <div className="desc">Lorem Ipsum is simply dummy text of the printing and setting</div>
                                </li>
                                <li >
                                    <div className="date"><span>28</span>Oct</div>
                                    <div className="desc">Lorem Ipsum is simply dummy text of the printing and setting</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 pr-50 md-pr-14">
                        <div className="about-part">
                            <div className="sec-title mb-40">
                                <div className="sub-title primary">About Us</div>
                                <h2 className="title">World Best Virtual Learning Network Educavo eLearning</h2>
                                <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enims ad minim veniam.Lorem sum dolor sit amet, consectetur adipisicing.</div>
                            </div>
                            <div className="sign-part">
                                <div className="img-part">
                                    <img src={authorImg} alt="CEO Image" />
                                </div>
                                <div className="author-part">
                                    <span className="sign mb-10">
                                        <img src={authorSign} alt="Sign" />
                                    </span>
                                    <span className="post">CEO & Founder of Educavo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;