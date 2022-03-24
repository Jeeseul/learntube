import React from 'react';

// About Image
import phnIcon from '../../assets/img/about/icon/1.png';
import mailIcon from '../../assets/img/about/icon/2.png';
import addressIcon from '../../assets/img/about/icon/3.png';
import bgImg from '../../assets/img/bg/about-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover', 
    'background-repeat': 'no-repeat', 
    'background-position': 'center'
}

const AboutThree = () => {

    return (
        <div className="rs-about style5 pt-110 pb-110 md-pt-70 md-pb-70" style={bgStyle}>            
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 md-mb-50">
                        <div className="about-content">
                            <div className="sec-title mb-46">
                                <h2 className="title mb-15">Don’t Hesitate to <br/>Contact Me</h2>
                                <div className="sub-title">Contact Me Now</div>
                            </div>
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
                                <li>
                                    <div className="img-part">
                                        <img src={addressIcon} alt="" />
                                    </div>
                                    <div className="desc">
                                        <span>Address</span> 
                                        <span className="address">228-5 Main Street, Georgia, USA</span>
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

export default AboutThree;