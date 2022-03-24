import React from 'react';
import Slider from "react-slick";

import partnerLogo1 from '../../assets/img/brand/style2/1.png';
import partnerLogo2 from '../../assets/img/brand/style2/2.png';
import partnerLogo3 from '../../assets/img/brand/style2/3.png';
import partnerLogo4 from '../../assets/img/brand/style2/4.png';

const BrandHomeFive = () => {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="rs-partner pb-100 md-pb-70">
            <div className="container">
                <Slider {...sliderSettings}>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo1} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo2} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo3} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo4} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo2} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="partner-item">
                        <div className="logo-img">
                            <a href="#">
                                <img src={partnerLogo3} alt="" />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default BrandHomeFive;