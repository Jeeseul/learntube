import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceSeven from '../../components/Service/SingleServiceSeven';

import serviceImg1 from '../../assets/img/services/home12/1.png';
import serviceImg2 from '../../assets/img/services/home12/2.png';
import serviceImg3 from '../../assets/img/services/home12/3.png';

import bgImg from '../../assets/img/bg/home12/services-bg.jpg';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
}

const Service = () => {
    return (
        <React.Fragment>
            <div id="rs-services" className="rs-services home12-style" style={bgStyle}>
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title4 text-center mb-50"
                        subtitleClass="sub-title"
                        subtitle="Increase Your Skill"
                        titleClass="title"
                        title="Explore Top Subjects"
                    />
                    <div className="row">
                        <div className="col-lg-4 md-mb-30">
                            <SingleServiceSeven
                                serviceClass='services-item'
                                serviceImg={serviceImg1}
                                serviceTitle='Web Development'
                                catLink='/course-categories'
                                serviceDesc='Lorem ipsum dolor sit amet, conseced tetur adipiscing elit, sed do eiusmod tempor dolore magna mere jan'
                            />
                        </div>
                        <div className="col-lg-4 md-mb-30">
                            <SingleServiceSeven
                                serviceClass='services-item'
                                serviceImg={serviceImg3}
                                serviceTitle='Web Design'
                                catLink='/course-categories'
                                serviceDesc='Lorem ipsum dolor sit amet, conseced tetur adipiscing elit, sed do eiusmod tempor dolore magna mere jan'
                            />
                        </div>
                        <div className="col-lg-4">
                            <SingleServiceSeven
                                serviceClass='services-item'
                                serviceImg={serviceImg2}
                                serviceTitle='SEO Optimization'
                                catLink='/course-categories'
                                serviceDesc='Lorem ipsum dolor sit amet, conseced tetur adipiscing elit, sed do eiusmod tempor dolore magna mere jan'
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 text-center pt-44">
                        <Link className="readon green-btn" to="/course">View All Subjects </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Service;