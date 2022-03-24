import React from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import CourseSingleSix from '../../components/Courses/CourseSingleSix';

// Courses Image
import courseImg1 from '../../assets/img/courses/home6/style1/1.png';
import courseImg2 from '../../assets/img/courses/home6/style1/2.png';
import courseImg3 from '../../assets/img/courses/home6/style1/3.png';
import courseImg4 from '../../assets/img/courses/home6/style1/4.png';
import courseImg5 from '../../assets/img/courses/home6/style1/5.png';
import courseImg6 from '../../assets/img/courses/home6/style1/6.png';

const Courses = () => {

    return (
        <div className="rs-latest-couses event-bg courses_vertical_style  pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title3 mb-60 text-center md-mb-44"
                    subtitleClass="sub-title"
                    subtitle="Choose Your Courses"
                    titleClass="title mb-0"
                    title="Latest Featured Courses"
                />
                <div className="row">
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg= {courseImg1}
                            author='Mark Anthony'
                            courseTitle= "Introduction to Javascript for Beginners"
                            coursePrice= "$75.00"
                            userCount= "245"
                            userRating= "05"
                        /> 
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg= {courseImg2}
                            author='Mark Anthony'
                            courseTitle= "Introduction to Javascript for Beginners"
                            coursePrice= "$85.00"
                            userCount= "245"
                            userRating= "05"
                        />
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg= {courseImg3}
                            author='Mark Anthony'
                            courseTitle= "Introduction to Javascript for Beginners"
                            coursePrice= "$90.00"
                            userCount= "245"
                            userRating= "05"
                        />
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg= {courseImg4}
                            author='Mark Anthony'
                            courseTitle= "Introduction to Javascript for Beginners"
                            coursePrice= "$85.00"
                            userCount= "245"
                            userRating= "05"
                        />
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg= {courseImg5}
                            author='Mark Anthony'
                            courseTitle= "Introduction to Javascript for Beginners"
                            coursePrice= "$60.00"
                            userCount= "245"
                            userRating= "05"
                        />
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg= {courseImg6}
                            author='Mark Anthony'
                            courseTitle= "Introduction to Javascript for Beginners"
                            coursePrice= "$85.00"
                            userCount= "245"
                            userRating= "05"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;