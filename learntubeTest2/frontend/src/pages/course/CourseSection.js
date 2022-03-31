import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios, * as others from 'axios';

import CourseSidebar from './CourseSidebarSection';
import '../../assets/css/courseList.css';
import CourseSingleTwoCopy from '../../components/Courses/CourseSingleTwoCopy';

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

    const [course, setCourse] = useState("");
    // const api = axios.create({
    //     baseURL: 'http://localhost:8080/api/courses'
    // })
    //api.get("/api/courses")
    useEffect(() => {
        axios.get("/api/courses").then((response) => {
            if (response.data) {
                console.log(response.data);
                setCourse(response.data);
            } else {
                alert("failed to");
            }
        });
    }, []);

    const listClassAdd = () => {
        document.getElementById("rs-popular-course").classList.add('list-view');
    };

    const listClassRemove = () => {
        document.getElementById("rs-popular-course").classList.remove('list-view');
    };

    // const renderCourses = course.map(course => {
    //     return (
    //         <div className="col-lg-4 col-md-6">
    //             <CourseSingleTwoCopy
    //                 courseClass="courses-item mb-30"
    //                 courseImg={courseImg1}
    //                 courseTitle={course.className}
    //                 newCourse="New"
    //                 openDate={course.regDate}
    //                 creatorName={course.instructorId}
    //             />
    //         </div>
    //     )
    // }

    // )

    return (
        <div id="rs-popular-course" className="rs-popular-courses style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pb-80">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-4 col-md-12 order-last">
                        <CourseSidebar />
                    </div> */}
                    {/* <div className="col-lg pr-50 md-pr-14"> */}
                    {/* <h3 className='pageTitle'>모든 강의 보기</h3> */}
                    <div className='row-mk'>
                        <div className="widget-area-mk">

                            <div className="search-wrap-mk search-btn-mk">
                                <input type="search" placeholder="Searching..." name="s" className="search-input" value="" />
                                <button type="submit" value="Search"><i className=" flaticon-search"></i></button>
                            </div>

                        </div>
                        <div className="widget-area">
                            <div className="type-form-mk">
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
                    </div>
                    {/* {renderCourses} */}
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg1}
                            courseTitle="Become a PHP Master and Make Money Fast"
                            newCourse="New"
                            openDate="2022.03"
                            creatorName="이지슬"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg2}
                            courseTitle="Learning jQuery Mobile for Beginners"
                            openDate="2022.03"
                            creatorName="양지후"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg3}
                            courseTitle="The Art of Black and White Photography"
                            newCourse="New"
                            openDate="2022.03"
                            creatorName="이지슬"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg4}
                            courseTitle="Learn Python – Interactive Python Tutorial"
                            newCourse="$35.00"
                            openDate="2022.03"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg5}
                            courseTitle="Your Complete Guide to Dark Photography"
                            newCourse="$25.00"
                            openDate="2022.03"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg6}
                            courseTitle="From Zero to Hero with Advance Nodejs"
                            newCourse="$40.00"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg3}
                            courseTitle="Become a PHP Master and Make Money Fast"
                            newCourse="$22.00"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingleTwoCopy
                            courseClass="courses-item mb-30"
                            courseImg={courseImg4}
                            courseTitle="Introduction to Quantitativ and Qualitative"
                            newCourse="$35.00"
                            openDate="2022.01"
                        />
                    </div>
                    <div className="pagination-area orange-color text-center mt-30 md-mt-0">
                        <ul className="pagination-part">
                            <li className="active"><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">Next <i className="fa fa-long-arrow-right"></i></Link></li>
                        </ul>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default CoursePart;