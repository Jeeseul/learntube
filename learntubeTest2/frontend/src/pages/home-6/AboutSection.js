import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/Common/SectionTitle';

// About Image
import AboutImage from '../../assets/img/about/home5/about-main.png';
import circleShape from '../../assets/img/about/home5/about-circle-bg.png';
import smallCircleShape from '../../assets/img/about/home5/small-circle-shape.png';
import deepShape from '../../assets/img/about/home5/about-deep-bg.png';

import phnIcon from '../../assets/img/about/icon/1.png';
import mailIcon from '../../assets/img/about/icon/2.png';

const About = (props) => {

    return (
        <div id="rs-about" className="rs-about style4 pt-100 pb-100 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 md-mb-50">
                        <div className="img-part">
                            <img className="about-main" src={AboutImage} alt="About Image" />
                            <img className="circle-bg shape" src={circleShape} alt="About Image" />
                            <img className="small-circle shape animated pulse infinite" src={smallCircleShape} alt="About Image" />
                            <img className="deep-bg shape" src={deepShape} alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-44"
                                subtitleClass="sub-title"
                                subtitle="Personal & Professional Coach"
                                titleClass="title mb-14 sm-mb-6"
                                title="Hi I'm Alex Carry!"
                                descClass="desc mb-26"
                                description="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minimn the other hand denounce. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled"
                                secondDescClass="desc"
                                secondDescription="When nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business"
                            />
                            {/* Section Title End */}
                            <ul className="contact-part">
                                <li>
                                    <div className="img-part">
                                        <img src={phnIcon} alt="" />
                                    </div>
                                    <div className="desc">
                                        <span>Phone Number</span>
                                        <span><a href="tel:(123)-456-7890">(123)-456-7890</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-part">
                                        <img src={mailIcon} alt="" />
                                    </div>
                                    <div className="desc">
                                        <span>Email Address</span>
                                        <span><a href="mailto:info@mail.com">info@mail.com</a></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;