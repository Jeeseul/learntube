import React from 'react';
import CourseSingleFour from '../../components/Courses/CourseSingleFour';

// Courses Image
import image1 from '../../assets/img/courses/4.jpg';
import image2 from '../../assets/img/courses/5.jpg';
import image3 from '../../assets/img/courses/6.jpg';
import image4 from '../../assets/img/courses/7.jpg';
import image5 from '../../assets/img/courses/8.jpg';
import image6 from '../../assets/img/courses/9.jpg';

const Courses = () => {

    return (
        <React.Fragment>
            <div className="rs-popular-courses style3 orange-style pt-100 pb-100 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image1}
                                courseCategory="Photography"
                                courseTitle="The Art of Black and White Photography"
                                studentQuantity="245"
                                coursePrice="$55"
                                btnText="Apply Now"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image2}
                                courseCategory="Web Development"
                                courseTitle="Become a PHP Master and Make Money Fast"
                                studentQuantity="233"
                                coursePrice="$57"
                                btnText="Apply Now"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-40">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image3}
                                courseCategory="Web Development"
                                courseTitle="Learn Python – Interactive Python Tutorial"
                                studentQuantity="190"
                                coursePrice="$30"
                                btnText="Apply Now"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 md-mb-30">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image4}
                                courseCategory="Web Development"
                                courseTitle="From Zero to Hero with Advance Nodejs"
                                studentQuantity="212"
                                coursePrice="$99"
                                btnText="Apply Now"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 sm-mb-30">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image5}
                                courseCategory="Web Development"
                                courseTitle="The Art of Black and White Photography"
                                studentQuantity="233"
                                coursePrice="$57"
                                btnText="Apply Now"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <CourseSingleFour
                                courseClass="courses-item"
                                courseImg={image6}
                                courseCategory="Web Development"
                                courseTitle="Learning jQuery Mobile for Beginners"
                                studentQuantity="233"
                                coursePrice="$57"
                                btnText="Apply Now"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Courses