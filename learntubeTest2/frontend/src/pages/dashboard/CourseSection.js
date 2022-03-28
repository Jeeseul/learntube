import React from 'react';
import { Link } from 'react-router-dom';

import CourseDashBoard from '../../components/Courses/CourseDashBoard';

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
        <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="pr-50 md-pr-14">
                        <div className="course-search-part">
                            <div className="course-view-part ">
                                <div className="view-icons">

                                    <button onClick={listClassAdd} className="view-list "><i className="fa fa-list-ul"></i></button>
                                    <button onClick={listClassRemove} className="view-grid mr-10 list-view"><i className="fa fa-th-large"></i></button>
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
                            <CourseDashBoard
                                courseClass="courses-item"
                                courseImg={courseImg1}
                                courseTitle="영리한 프로그래밍을 위한 알고리즘 강좌"
                                userRating="3월 30일 특강 열립니다."
                            />
                            <CourseDashBoard
                                courseClass="courses-item right"
                                courseImg={courseImg2}
                                courseTitle="그림으로 쉽게 배우는 운영체제"
                                userRating="3월 31일 특강 열립니다."
                            />
                            <CourseDashBoard
                                courseClass="courses-item"
                                courseImg={courseImg3}
                                courseTitle="프로그래밍 시작하기 : 파이썬 입문"
                                userRating="4월 30일 특강 열립니다."
                            />
                            <CourseDashBoard
                                courseClass="courses-item right"
                                courseImg={courseImg4}
                                courseTitle="Learn Python – Interactive Python Tutorial"
                                coursePrice="$35.00"
                            />
                            <CourseDashBoard
                                courseClass="courses-item"
                                courseImg={courseImg5}
                                courseTitle="Your Complete Guide to Dark Photography"
                                coursePrice="$25.00"
                            />
                            <CourseDashBoard
                                courseClass="courses-item right"
                                courseImg={courseImg6}
                                courseTitle="From Zero to Hero with Advance Nodejs"
                                coursePrice="$40.00"
                            />
                            <CourseDashBoard
                                courseClass="courses-item"
                                courseImg={courseImg3}
                                courseTitle="Become a PHP Master and Make Money Fast"
                                coursePrice="$22.00"
                            />
                            <CourseDashBoard
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