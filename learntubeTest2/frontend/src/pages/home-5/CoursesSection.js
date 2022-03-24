import React from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import CourseSingleFour from '../../components/Courses/CourseSingleFour';

// Courses Image
import image1 from '../../assets/img/courses/7.jpg';
import image2 from '../../assets/img/courses/8.jpg';
import image3 from '../../assets/img/courses/9.jpg';

import bgImg from '../../assets/img/bg/course-shape-bg.jpg';
const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
}

const Courses = () => {

    const coursesSliderSettings = {
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };


    return (
        <React.Fragment>
            <div className="rs-popular-courses style3 pb-200 md-pb-170 sm-pb-100" style={bgStyle}>
                <div className="container">
                    <div className="row y-middle mb-50">
                        <div className="col-lg-6">
                            <SectionTitle
                                sectionClass="sec-title"
                                subtitleClass="sub-title primary"
                                subtitle="Top Courses"
                                titleClass="title mb-0"
                                title="Popular Courses"
                            />
                        </div>
                    </div>
                    <Slider {...coursesSliderSettings}>
                        <CourseSingleFour
                            courseClass="courses-item"
                            courseImg={image1}
                            courseCategory="Web Development"
                            courseTitle="Introduction to Quantitativ and Qualitative."
                            studentQuantity="245"
                            coursePrice="$55"
                            btnText="Apply Now"
                        />
                        <CourseSingleFour
                            courseClass="courses-item"
                            courseImg={image2}
                            courseCategory="Web Development"
                            courseTitle="Introduction to Quantitativ and Qualitative."
                            studentQuantity="233"
                            coursePrice="$57"
                            btnText="Apply Now"
                        />
                        <CourseSingleFour
                            courseClass="courses-item"
                            courseImg={image3}
                            courseCategory="Web Development"
                            courseTitle="Introduction to Quantitativ and Qualitative."
                            studentQuantity="190"
                            coursePrice="$30"
                            btnText="Apply Now"
                        />
                        <CourseSingleFour
                            courseClass="courses-item"
                            courseImg={image2}
                            courseCategory="Web Development"
                            courseTitle="Introduction to Quantitativ and Qualitative."
                            studentQuantity="212"
                            coursePrice="$99"
                            btnText="Apply Now"
                        />
                    </Slider>
                    <div className="view-all-btn text-center pt-50 mb-60 md-pt-30 md-mb-30">
                        Start Learning With Our Online Courses.
                        <Link className="title-color" to="/course"> View All Courses <i className="flaticon-right-arrow ml-6 body-color"></i></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Courses