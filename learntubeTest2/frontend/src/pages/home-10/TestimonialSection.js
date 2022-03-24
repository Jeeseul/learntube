import React from 'react';
import Slider from "react-slick";
import SingleTestimonialFour from '../../components/Testimonial/SingleTestimonialFour';


import testimonialImg from '../../assets/img/testimonial/style9/1.png';
import quoteImg from '../../assets/img/testimonial/style9/2.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <React.Fragment>
            <div className="rs-testimonial home9-style pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 sm-mb-40">
                            <div className="image-part">
                                <img src={testimonialImg} alt="images" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-64 md-pl-14 col-md-6">
                            <div className="img-part mb-30">
                                <img src={quoteImg} alt="images" />
                          </div>
                            <Slider {...testimonialSettings}>
                                <SingleTestimonialFour
                                    Title="David Warner"
                                    Designation="Web Developer"
                                />
                                <SingleTestimonialFour
                                    Title="Mitchel Starc"
                                    Designation="App Developer"
                                />
                                <SingleTestimonialFour
                                    Title="Steve Smith"
                                    Designation="Web Designer"
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial