import SectionTitle from '../../components/Common/SectionTitle';

// WhyChooseUs Images
import normalLogo1 from '../../assets/img/technology/style4/main-img/1.png';
import normalLogo2 from '../../assets/img/technology/style4/main-img/2.png';
import normalLogo3 from '../../assets/img/technology/style4/main-img/3.png';
import normalLogo4 from '../../assets/img/technology/style4/main-img/4.png';
import normalLogo5 from '../../assets/img/technology/style4/main-img/5.png';
import normalLogo6 from '../../assets/img/technology/style4/main-img/6.png';

import hoverLogo1 from '../../assets/img/technology/style4/hover-img/1.png';
import hoverLogo2 from '../../assets/img/technology/style4/hover-img/2.png';
import hoverLogo3 from '../../assets/img/technology/style4/hover-img/3.png';
import hoverLogo4 from '../../assets/img/technology/style4/hover-img/4.png';
import hoverLogo5 from '../../assets/img/technology/style4/hover-img/5.png';
import hoverLogo6 from '../../assets/img/technology/style4/hover-img/6.png';

import bgImg from '../../assets/img/bg/index-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const Technology = () => {

    return (
        <div className="rs-technology style2 pt-110 pb-114 md-pt-74 md-pb-80" style={bgStyle}>
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text white-color"
                    subtitle="Technology Index"
                    titleClass="title title2 white-color"
                    title="What Technology We Are Using For Our Valued Customers "
                />
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                        <div className="technology-wrap">
                            <div className="rs-grid-figure">
                                <div className="logo-img">
                                    <a href="#">
                                        <img className="hover-img" src={hoverLogo1} alt="hover-image" />
                                        <img className="main-img" src={normalLogo1} alt="main-image" />
                                    </a>
                                </div>
                            </div>
                            <div className="logo-title">
                                <h4 className="title">Node Js</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                        <div className="technology-wrap">
                            <div className="rs-grid-figure">
                                <div className="logo-img">
                                    <a href="#">
                                        <img className="hover-img" src={hoverLogo2} alt="hover-image" />
                                        <img className="main-img" src={normalLogo2} alt="main-image" />
                                    </a>
                                </div>
                            </div>
                            <div className="logo-title">
                                <h4 className="title">Python</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                        <div className="technology-wrap">
                            <div className="rs-grid-figure">
                                <div className="logo-img">
                                    <a href="#">
                                        <img className="hover-img" src={hoverLogo3} alt="hover-image" />
                                        <img className="main-img" src={normalLogo3} alt="main-image" />
                                    </a>
                                </div>
                            </div>
                            <div className="logo-title">
                                <h4 className="title"> My Sql</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                        <div className="technology-wrap">
                            <div className="rs-grid-figure">
                                <div className="logo-img">
                                    <a href="#">
                                        <img className="hover-img" src={hoverLogo4} alt="hover-image" />
                                        <img className="main-img" src={normalLogo4} alt="main-image" />
                                    </a>
                                </div>
                            </div>
                            <div className="logo-title">
                                <h4 className="title">Firebase</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                        <div className="technology-wrap">
                            <div className="rs-grid-figure">
                                <div className="logo-img">
                                    <a href="#">
                                        <img className="hover-img" src={hoverLogo5} alt="hover-image" />
                                        <img className="main-img" src={normalLogo5} alt="main-image" />
                                    </a>
                                </div>
                            </div>
                            <div className="logo-title">
                                <h4 className="title">Tensorflow</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                        <div className="technology-wrap">
                            <div className="rs-grid-figure">
                                <div className="logo-img">
                                    <a href="#">
                                        <img className="hover-img" src={hoverLogo6} alt="hover-image" />
                                        <img className="main-img" src={normalLogo6} alt="main-image" />
                                    </a>
                                </div>
                            </div>
                            <div className="logo-title">
                                <h4 className="title">Docker</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;