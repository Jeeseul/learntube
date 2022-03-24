import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Tilty from 'react-tilty';
import AOS from 'aos';

import wave from '../../assets/img/banner/banner-line.png';
import circle from '../../assets/img/banner/banner-circle.png';
import dots from '../../assets/img/banner/banner-dots.png';
import bgImg from '../../assets/img/bg/home4.jpg';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    'background-size': 'cover',
    'background-position': 'center',
    'height': '100vh',
    'display': 'grid',
    'align-items': 'center',
}



const BannerStyleFour = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style4" style={bgStyle}>
                <div className="container relative">
                    <div className="row relative">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="banner-line-shape">
                                <Tilty perspective={100}>
                                    <img
                                        src={wave}
                                        alt=""
                                        data-aos="flip-left"
                                        data-aos-duration="3000"
                                    />
                                </Tilty>
                            </div>
                            <div className="banner-content pb-14">
                                <h1 className="banner-title white-color" data-aos="fade-left" data-aos-duration="1000">Distance Learning Build Your Skill</h1>
                                <div className="desc white-color mb-40" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">The other hand, we denounce with righteous indignation and <br /> dislike men who are so beguiled and demoralized</div>
                                <div className="banner-btn z-index-1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                                    <Link className="readon2 banner-style" to="/about">Discover More</Link>
                                </div>
                            </div>
                            <div className="banner-circle-shape">
                                <Tilty>
                                    <img
                                        className="rotateme"
                                        src={circle}
                                        alt=""
                                    />
                                </Tilty>
                            </div>
                        </div>
                    </div>
                    <div className="banner-dots-shape">
                        <Tilty>
                            <img
                                src={dots}
                                alt=""
                            />
                        </Tilty>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
}

export default BannerStyleFour;