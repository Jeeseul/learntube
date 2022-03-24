import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/Common/SectionTitle';
import CourseSingleTwo from '../../components/Courses/CourseSingleTwo';
// Courses Image
import image1 from '../../assets/img/courses/main-home/1.jpg';
import image2 from '../../assets/img/courses/main-home/2.jpg';
import image3 from '../../assets/img/courses/home8/2.jpg';
import image4 from '../../assets/img/courses/home8/4.jpg';
import image5 from '../../assets/img/courses/home8/5.jpg';
import image6 from '../../assets/img/courses/home8/6.jpg';

import bgImg from '../../assets/img/bg/home-8.jpg';
const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center center'
}

const Courses = () => {

    return (
        <div className="rs-popular-courses style1 pt-94 pb-70 md-pt-64 md-pb-40" style={bgStyle}>
            <div className="container">
                <div className="row y-middle mb-50 md-mb-30">
                    <div className="col-md-6 sm-mb-30">
                        <SectionTitle
                            sectionClass="sec-title"
                            subtitleClass="sub-title primary"
                            subtitle="Top Courses"
                            titleClass="title mb-0"
                            title="Popular Courses"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="btn-part text-right sm-text-left">
                            <Link to="/course" className="readon">View All Courses</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass="courses-item"
                            courseImg={image1}
                            courseTitle="Fitness Development Strategy Buildup Laoreet"
                            coursePrice="$75"
                            courseCategory="Web Developer"
                            userCount="245"
                            userRating="05"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass="courses-item"
                            courseImg={image2}
                            courseTitle="The Art of Black and White Photography"
                            coursePrice="$75"
                            courseCategory="Photography"
                            userCount="245"
                            userRating="05"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass="courses-item"
                            courseImg={image3}
                            courseTitle="Fitness Development Strategy Buildup Laoreet"
                            coursePrice="$75"
                            courseCategory="Web Developer"
                            userCount="245"
                            userRating="05"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass="courses-item"
                            courseImg={image4}
                            courseTitle="Learn Python – Interactive Python Tutorial"
                            coursePrice="$75"
                            courseCategory="Web Developer"
                            userCount="245"
                            userRating="05"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass="courses-item"
                            courseImg={image5}
                            courseTitle="Fitness Development Strategy Buildup Laoreet"
                            coursePrice="$75"
                            courseCategory="Web Developer"
                            userCount="245"
                            userRating="05"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass="courses-item"
                            courseImg={image6}
                            courseTitle="Become a PHP Master and Make Money Fast"
                            coursePrice="$75"
                            courseCategory="Web Developer"
                            userCount="245"
                            userRating="05"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;