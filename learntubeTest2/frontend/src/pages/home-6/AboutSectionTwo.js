import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';

// About Image
import aboutImg from '../../assets/img/about/about51.png';
import bookImg1 from '../../assets/img/about/book1.png';

const AboutTwo = () => {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="rs-about style4 pt-120 pb-120 md-pt-80 md-pb-80">            
            <div className="container relative">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-part">
                            <img src={aboutImg} alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-6 pr-50 md-pr-14">
                        <div className="about-content pl-20 md-pl-14">
                            <SectionTitle
                                sectionClass="sec-title"
                                titleClass="title mt-40 mb-14"
                                title="Read My Books & Start a Beautiful Life"
                                bottomSubTitleClass="sub-title"
                                bottomSubTitle="Books & Pulications"
                                descClass="desc pr-64"
                                description="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minimn the other hand denounce."
                            />

                            <div className="book-part">  
                                <Slider {...sliderSettings}>                                  
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                    <div className="single-book">
                                        <img src={bookImg1} alt="Book Image" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTwo;