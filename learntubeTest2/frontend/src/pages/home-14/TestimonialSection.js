import React from 'react';
import Slider from "react-slick";
import SingleTestimonialSeven from '../../components/Testimonial/SingleTestimonialSeven';

import lineImg from '../../assets/img/line.png';

import author1 from '../../assets/img/testimonial/test_1.png';
import author2 from '../../assets/img/testimonial/test_1.png';
import author3 from '../../assets/img/testimonial/test_1.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <React.Fragment>
            <div className="rs-testimonial home14-style pt-100 md-pt-80">
                <div className="container">
                    <div className="sec-title6 text-center mb-50 md-mb-40">
                        <div className="img-part mb-10">
                            <img src={lineImg} alt="" />
                        </div>
                        <h2 className="title md-mb-0">Our Students Says</h2>
                    </div>
                    <Slider {...testimonialSettings}>
                        <SingleTestimonialSeven
                            itemClass="testi-item"
                            authorImage={author1}
                            Title="David Warner"
                            Designation="Student"
                            Description="he charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound desire ensue and equal blame."
                        />
                        <SingleTestimonialSeven
                            itemClass="testi-item"
                            authorImage={author2}
                            Title="Steve Smith"
                            Designation="Student"
                            Description="he charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound desire ensue and equal blame."
                        />
                        <SingleTestimonialSeven
                            itemClass="testi-item"
                            authorImage={author2}
                            Title="Alon Shari"
                            Designation="Student"
                            Description="he charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound desire ensue and equal blame."
                        />
                        <SingleTestimonialSeven
                            itemClass="testi-item"
                            authorImage={author3}
                            Title="Mitchel Starc"
                            Designation="Studentr"
                            Description="he charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound desire ensue and equal blame."
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial