import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import CourseSingleThree from '../../components/Courses/CourseSingleThree';

// Courses Image
import image1 from '../../assets/img/courses/style2/1.png';
import image2 from '../../assets/img/courses/style2/2.png';
import image3 from '../../assets/img/courses/style2/3.png';
import image4 from '../../assets/img/courses/style2/4.png';
import image5 from '../../assets/img/courses/style2/5.png';
import image6 from '../../assets/img/courses/style2/6.png';

import bgImg from '../../assets/img/bg/bg3.png';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover', 
    'background-repeat': 'no-repeat', 
    'background-position': 'top center'
}

const Courses = () => {

    return (
        <div className="rs-popular-courses style2 pt-94 pb-200 md-pt-64 md-pb-90" style={bgStyle}>
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title mb-60 text-center md-mb-30"
                    subtitleClass="sub-title primary"
                    subtitle="Top Courses"
                    titleClass="title mb-0"
                    title="Popular Courses"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleThree
                            courseClass="course-wrap"
                            courseCategory="Artificial Intelligence"
                            courseImg={image1}
                            courseTitle="Artificial Intelligence Fundamental Startup Learn"
                            coursePrice="$40"
                            studentQuantity="41"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleThree
                            courseClass="course-wrap"
                            courseCategory="Web Development"
                            courseImg={image2}
                            courseTitle="Computer Science Startup Varius et Commodo Working"
                            coursePrice="$23"
                            studentQuantity="25"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleThree
                            courseClass="course-wrap"
                            courseCategory="Civil Engineering"
                            courseImg={image3}
                            courseTitle="Focus On Building Amazing Empire Strategy Tempor Justo"
                            coursePrice="$28"
                            studentQuantity="25"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleThree
                            courseClass="course-wrap"
                            courseCategory="Web Development"
                            courseImg={image4}
                            courseTitle="Fitness Development Strategy Buildup Laoreet"
                            coursePrice="$15"
                            studentQuantity="14"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleThree
                            courseClass="course-wrap"
                            courseCategory="General Education"
                            courseImg={image5}
                            courseTitle="English Learning with Free Project Course Preparation"
                            coursePrice="$23"
                            studentQuantity="22"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleThree
                            courseClass="course-wrap"
                            courseCategory="Computer Science"
                            courseImg={image6}
                            courseTitle="Database Management Course For Beginners"
                            coursePrice="$25"
                            studentQuantity="44"
                        />
                    </div>
                </div>
                <div className="btn-part text-center mt-30">
                    <Link to="/course" className="readon3 dark-hov">View All Courses</Link>
                </div>
            </div>
        </div>
    );
}

export default Courses;