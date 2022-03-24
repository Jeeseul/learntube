import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonialFive from '../../components/Testimonial/SingleTestimonialFive';


import quote from '../../assets/img/testimonial/home12/quote.png';
import author1 from '../../assets/img/testimonial/style5/1.png';
import author2 from '../../assets/img/testimonial/style5/2.png';
import author3 from '../../assets/img/testimonial/style5/3.png';

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
            <div className="rs-testimonial home12-style">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title4 mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle="Testimonial"
                        titleClass="title mb-0"
                        title="What Students Saying"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonialFive
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author1}
                            Title="David Warner"
                            Designation="Web Developer"
                            Description="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company."
                        />
                        <SingleTestimonialFive 
                            quoteImage={quote}
                            authorImage={author2}
                        />
                        <SingleTestimonialFive
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Steve Smith"
                            Designation="Web Designer"
                            Description="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company."
                        />
                        <SingleTestimonialFive
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Mitchel Starc"
                            Designation="App Developer"
                            Description="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company."
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial