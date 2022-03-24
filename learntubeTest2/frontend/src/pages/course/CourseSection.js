import React from 'react';
import { Link } from 'react-router-dom';

import CourseSidebar from './CourseSidebarSection';
import CourseSingleTwo from '../../components/Courses/CourseSingleTwo';

// Course courseImg
import courseImg1 from '../../assets/img/courses/1.jpg';
import courseImg2 from '../../assets/img/courses/2.jpg';
import courseImg3 from '../../assets/img/courses/3.jpg';
import courseImg4 from '../../assets/img/courses/4.jpg';
import courseImg5 from '../../assets/img/courses/5.jpg';
import courseImg6 from '../../assets/img/courses/6.jpg';
import courseImg7 from '../../assets/img/courses/7.jpg';
import courseImg8 from '../../assets/img/courses/8.jpg';

const CoursePart = (props) => {

    const listClassAdd = () => {
        document.getElementById("rs-popular-course").classList.add('list-view');
    };

    const listClassRemove = () => {
        document.getElementById("rs-popular-course").classList.remove('list-view');
    };

    return (
        <div id="rs-popular-course" className="rs-popular-courses style1 course-view-style orange-style rs-inner-blog white-bg pt-100 pb-100 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 order-last">
                        <CourseSidebar />
                    </div>
                    <div className="col-lg-8 pr-50 md-pr-14">
                        <div className="course-search-part">
                            <div className="course-view-part">
                                <div className="view-icons">
                                    <button onClick={listClassRemove} className="view-grid mr-10"><i className="fa fa-th-large"></i></button>
                                    <button onClick={listClassAdd} className="view-list"><i className="fa fa-list-ul"></i></button>
                                </div>
                                <div className="view-text">Showing 1-9 of 11 results</div>
                            </div>
                            <div className="type-form">
                                <form method="post" action="#">
                                    <div className="form-group mb-0">
                                        <div className="custom-select-box">
                                            <select id="timing">
                                                <option>Default</option>
                                                <option>Newest</option>
                                                <option>Old</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="course-part clearfix">
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={courseImg1}
                                courseTitle="Become a PHP Master and Make Money Fast"
                                coursePrice="$40.00"
                            />
                            <CourseSingleTwo
                                courseClass="courses-item right"
                                courseImg={courseImg2}
                                courseTitle="Learning jQuery Mobile for Beginners"
                                coursePrice="$28.00"
                            />
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={courseImg3}
                                courseTitle="The Art of Black and White Photography"
                                coursePrice="$22.00"
                                courseCategory="Photography"
                            />
                            <CourseSingleTwo
                                courseClass="courses-item right"
                                courseImg={courseImg4}
                                courseTitle="Learn Python – Interactive Python Tutorial"
                                coursePrice="$35.00"
                            />
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={courseImg5}
                                courseTitle="Your Complete Guide to Dark Photography"
                                coursePrice="$25.00"
                                courseCategory="Photography"
                            />
                            <CourseSingleTwo
                                courseClass="courses-item right"
                                courseImg={courseImg6}
                                courseTitle="From Zero to Hero with Advance Nodejs"
                                coursePrice="$40.00"
                            />
                            <CourseSingleTwo
                                courseClass="courses-item"
                                courseImg={courseImg3}
                                courseTitle="Become a PHP Master and Make Money Fast"
                                coursePrice="$22.00"
                            />
                            <CourseSingleTwo
                                courseClass="courses-item right"
                                courseImg={courseImg4}
                                courseTitle="Introduction to Quantitativ and Qualitative"
                                coursePrice="$35.00"
                            />
                        </div>
                        <div className="pagination-area orange-color text-center mt-30 md-mt-0">
                            <ul className="pagination-part">
                                <li className="active"><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">Next <i className="fa fa-long-arrow-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePart;