import React from 'react';

import SectionTitle from '../../components/Common/SectionTitle';
import CourseSingleTwo from '../../components/Courses/CourseSingleTwo';
// Courses Image
import image1 from '../../assets/img/courses/main-home/1.jpg';
import image2 from '../../assets/img/courses/main-home/2.jpg';
import image3 from '../../assets/img/courses/home8/2.jpg';
import image4 from '../../assets/img/courses/home8/4.jpg';
import image5 from '../../assets/img/courses/home8/5.jpg';
import image6 from '../../assets/img/courses/home8/6.jpg';


const Courses = () => {

    return (
        <div className="rs-popular-courses style4 pt-110 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title text-center mb-50 md-mb-30"
                    bottomSubTitleClass="sub-title mb-0"
                    bottomSubTitle="My Providing Courses"
                    titleClass="title mb-10"
                    title="Latest Coaching Courses"
                />
                
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass= "courses-item"
                            courseImg= {image1}
                            courseTitle= "Fitness Development Strategy Buildup Laoreet"
                            coursePrice= "$75"
                            courseCategory= "Web Developer"
                            userCount= "245"
                            userRating= "05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass= "courses-item"
                            courseImg= {image2}
                            courseTitle= "Become a PHP Master and Make Money Fast"
                            coursePrice= "$75"
                            courseCategory= "Web Developer"
                            userCount= "245"
                            userRating= "05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingleTwo
                            courseClass= "courses-item"
                            courseImg= {image3}
                            courseTitle= "Learn Python Interactive Python Tutorial"
                            coursePrice= "$75"
                            courseCategory= "Web Developer"
                            userCount= "245"
                            userRating= "05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <CourseSingleTwo
                            courseClass= "courses-item"
                            courseImg= {image4}
                            courseTitle= "Fitness Development Strategy Buildup Laoreet"
                            coursePrice= "$75"
                            courseCategory= "Web Developer"
                            userCount= "245"
                            userRating= "05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 sm-mb-30">
                        <CourseSingleTwo
                            courseClass= "courses-item"
                            courseImg= {image5}
                            courseTitle= "The Art of Black and White Photography"
                            coursePrice= "$75"
                            courseCategory= "Photography"
                            userCount= "245"
                            userRating= "05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwo
                            courseClass= "courses-item"
                            courseImg= {image6}
                            courseTitle= "Fitness Development Strategy Buildup Laoreet"
                            coursePrice= "$75"
                            courseCategory= "Web Developer"
                            userCount= "245"
                            userRating= "05"
                            btnText="Apply Now"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;