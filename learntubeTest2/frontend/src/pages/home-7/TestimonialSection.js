import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonialSix from '../../components/Testimonial/SingleTestimonialSix';

// Testimonial Avatars
import author1 from '../../assets/img/testimonial/style6/1.jpg';
import author2 from '../../assets/img/testimonial/style6/1.jpg';
import author3 from '../../assets/img/testimonial/style6/1.jpg';
import author4 from '../../assets/img/testimonial/style6/1.jpg';

const Testimonial = () => {

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

	return(
        <React.Fragment>
            <div className="rs-testimonial style6 pt-100 md-pt-70">
                <div className="container">

                    <SectionTitle
                        sectionClass="sec-title3 text-center mb-70 md-mb-44"
                        subtitleClass="sub-title"
                        subtitle="Testimonials"
                        titleClass="title title-color"
                        title="What Our Students Say"
                    />
                    <Slider {...sliderSettings}>
                        <SingleTestimonialSix 
                            authorImg={author1}
                            name='Mahadi Mansura'
                            designation='CSE Student'
                        />
                        <SingleTestimonialSix 
                            authorImg={author2}
                            name='Mahadi Mansura'
                            designation='CSE Student'
                        />
                        <SingleTestimonialSix 
                            authorImg={author3}
                            name='Mahadi Mansura'
                            designation='CSE Student'
                        />
                        <SingleTestimonialSix 
                            authorImg={author4}
                            name='Mahadi Mansura'
                            designation='CSE Student'
                        />
                    </Slider>                    
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial