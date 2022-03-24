import React from 'react';

import SectionTitle from '../../components/Common/SectionTitle';

// About Image
import AboutImage from '../../assets/img/about/about2orange.png';

const AboutText = (props) => {

    return (
        <div className="rs-about style1 pt-82 pb-100 md-pt-50 md-pb-60">            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last padding-0 md-pl-14 md-pr-14 md-mb-30">
                        <div className="img-part">
                            <img className="about-main" src={AboutImage} alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-6 pr-70 md-pr-14">
                        <div className="about-content">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-44 md-mb-0"
                                subtitleClass="sub-title orange"
                                subtitle="About Educavo"
                                titleClass="title mb-16"
                                title="Welcome to The Educavo Online Learning"
                                descClass="bold-text mb-22"
                                description="Recogizing the need is the primary than we expected Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus,"
                                secondDescClass="desc"
                                secondDescription="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua enims ad minim. Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempor. Lorem ipsum dolor sit amet"
                            />
                            {/* Section Title End */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutText;