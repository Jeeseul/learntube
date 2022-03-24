import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';


import quote from '../../assets/img/testimonial/style5/quote.png';
import author1 from '../../assets/img/testimonial/style5/1.png';
import author2 from '../../assets/img/testimonial/style5/2.png';
import author3 from '../../assets/img/testimonial/style5/3.png';
import author4 from '../../assets/img/testimonial/style5/4.png';

import bgImg from '../../assets/img/bg/testi-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat'
}

const Testimonial = () => {

    const testimonialSettings = {
        dots: true,
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
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };


    return (
        <React.Fragment>
            <div className="rs-testimonial style5 gray-bg pt-110 pb-120 md-pt-70 md-pb-80" style={bgStyle}>
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title mb-14 text-center"
                        bottomSubTitleClass="sub-title capitalize"
                        bottomSubTitle="Our Clients Review"
                        titleClass="title extra-bold mb-14 sm-mb-10"
                        title="What Our Client Says"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author1}
                            Title="David Warner"
                            Designation="Web Developer"
                            Description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today. Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem"
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author2}
                            Title="Mitchel Starc"
                            Designation="App Developer"
                            Description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today. Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem"
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author3}
                            Title="Steve Smith"
                            Designation="Web Designer"
                            Description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today. Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem"
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={author4}
                            Title="Mahadi Monsura"
                            Designation="Student"
                            Description="Education is the passport to the future for tomorrow belongs to those who pre pare for it today. Sed ut perspiciatis unde omnis  iste natus error sit vo luptatem"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial