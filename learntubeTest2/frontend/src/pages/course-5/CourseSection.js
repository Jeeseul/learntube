import React from 'react';
import CourseSingleSix from '../../components/Courses/CourseSingleSix';

// Courses Image
import courseImg1 from '../../assets/img/courses/home6/style1/1.png';
import courseImg2 from '../../assets/img/courses/home6/style1/2.png';
import courseImg3 from '../../assets/img/courses/home6/style1/3.png';
import courseImg4 from '../../assets/img/courses/home6/style1/4.png';
import courseImg5 from '../../assets/img/courses/home6/style1/5.png';
import courseImg6 from '../../assets/img/courses/home6/style1/6.png';

const CoursePart = () => {

    return (
        <div className="rs-latest-couses orange-style pt-100 pb-100 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg={courseImg1}
                            author='Mark Anthony'
                            courseTitle="Introduction to Javascript for Beginners"
                            coursePrice="$75"
                            userCount="245"
                            userRating="05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg={courseImg2}
                            author='Mark Anthony'
                            courseTitle="Introduction to Javascript for Beginners"
                            coursePrice="$75"
                            userCount="245"
                            userRating="05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg={courseImg3}
                            author='Mark Anthony'
                            courseTitle="Introduction to Javascript for Beginners"
                            coursePrice="$75"
                            userCount="245"
                            userRating="05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-6 mb-40">
                        <CourseSingleSix
                            courseImg={courseImg4}
                            author='Mark Anthony'
                            courseTitle="Introduction to Javascript for Beginners"
                            coursePrice="$75"
                            userCount="245"
                            userRating="05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-6 md-mb-40">
                        <CourseSingleSix
                            courseImg={courseImg5}
                            author='Mark Anthony'
                            courseTitle="Introduction to Javascript for Beginners"
                            coursePrice="$75"
                            userCount="245"
                            userRating="05"
                            btnText="Apply Now"
                        />
                    </div>
                    <div className="col-lg-6">
                        <CourseSingleSix
                            courseImg={courseImg6}
                            author='Mark Anthony'
                            courseTitle="Introduction to Javascript for Beginners"
                            coursePrice="$75"
                            userCount="245"
                            userRating="05"
                            btnText="Apply Now"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePart;