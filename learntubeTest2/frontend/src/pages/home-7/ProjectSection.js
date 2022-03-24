import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleProjectTwo from '../../components/Project/SingleProjectTwo';


import projectImg1 from '../../assets/img/project/1.jpg';
import projectImg2 from '../../assets/img/project/2.jpg';
import projectImg3 from '../../assets/img/project/3.jpg';
import projectImg4 from '../../assets/img/project/4.jpg';
import projectImg5 from '../../assets/img/project/5.jpg';
import projectImg6 from '../../assets/img/project/6.jpg';

const Project = () => {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

	return(
        <React.Fragment>
            <div id="rs-portfolio" className="rs-case-study">
                <div className="">
                    <div className="row margin-0 align-items-center">
                        <div className="col-lg-4 padding-0">
                            <div className="case-study" style={{'background-image': 'url(assets/img/bg/case-study.jpg)'}}>
                                <SectionTitle
                                    sectionClass="sec-title2 mb-30"
                                    subtitleClass="sub-text white-color"
                                    subtitle="Case Study"
                                    titleClass="title testi-title white-color pb-20"
                                    title="How braintech assist your business"
                                    descClass="desc-big"
                                    description="Bring to the table win-win survival strategies to dotted proactive domination. At the end of the going forward, a new normal that has evolved generation. "
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 padding-0">
                            <div className="case-study-wrap">
                                <div className="rs-project style3 modify1 mod md-pt-0">
                                    <Slider {...sliderSettings}>
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg1} 
                                            Title="Growth Strategies"
                                            Category="IT Technology" 
                                            projectURL="growth-strategies"
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg2} 
                                            Title="Latform Integration"
                                            Category="IT Technology" 
                                            projectURL="latform-integration"
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg3} 
                                            Title="Innovative Interfaces" 
                                            Category="IT Technology" 
                                            projectURL="innovative-interfaces" 
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg4} 
                                            Title="Product Engineering"
                                            Category="IT Technology" 
                                            projectURL="product-engineering"
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg5} 
                                            Title="Analytic Solutions"
                                            Category="IT Technology" 
                                            projectURL="analytic-solutions"
                                        />
                                        <SingleProjectTwo 
                                            itemClass="project-item"
                                            projectImage={projectImg6} 
                                            Title="Project Design"
                                            Category="IT Technology" 
                                            projectURL="project-design"
                                        />
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </React.Fragment>
	)
}

export default Project