import React from 'react';

import aboutImg from '../../assets/img/choose/home12/1.png';
import icon1 from '../../assets/img/choose/home12/icon/1.png';
import icon2 from '../../assets/img/choose/home12/icon/2.png';
import icon3 from '../../assets/img/choose/home12/icon/3.png';

import bgImg from '../../assets/img/bg/home12/why-learn-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const WhyChooseUs = () => {

    return (
        <div className="why-choose-us style3" style={bgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-40">
                        <div className="img-part">
                            <img src={aboutImg} alt="" />                        
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        <div className="sec-title3 mb-30">
                            <h2 className=" title new-title margin-0 pb-14">Why Learn Here</h2>
                            <div className="new-desc">Lorem ipsum dolor sit amet, ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua.</div>
                        </div>
                        <div className="services-part mb-20">
                            <div className="services-icon">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="services-text">
                                <h2 className="title"> Lower Learning Cost</h2>
                                <p className="services-txt">  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                            </div>
                        </div> 
                        <div className="services-part mb-20">
                            <div className="services-icon">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="services-text">
                                <h2 className="title"> Learn With Experts</h2>
                                <p className="services-txt">  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                            </div>
                        </div> 
                        <div className="services-part">
                            <div className="services-icon">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="services-text">
                                <h2 className="title">Different Course Variation</h2>
                                <p className="services-txt">  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;