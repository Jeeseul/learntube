import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CourseSingleSeven from '../../components/Courses/CourseSingleSeven';

import lineImg from '../../assets/img/line.png';

// Courses Image
import image1 from '../../assets/img/courses/home14/1.jpg';
import image2 from '../../assets/img/courses/home14/2.jpg';
import image3 from '../../assets/img/courses/home14/3.jpg';
import image4 from '../../assets/img/courses/home14/4.jpg';
import image5 from '../../assets/img/courses/home14/5.jpg';
import image6 from '../../assets/img/courses/home14/6.jpg';

const Courses = () => {

    let tab1 = "All",
        tab2 = "Artificial Intelligence",
        tab3 = "Computer Engineering",
        tab4 = "General Education",
        tab5 = "High School"
    const tabStyle = 'gridFilter style2 text-center mb-30';

    return (
        <div className="rs-popular-courses style1 orange-style modify1 pt-100 pb-100 md-pt-80 md-pb-72">
            <div className="container">
                <div className="sec-title6 text-center mb-40">
                    <div className="img-part mb-10">
                        <img src={lineImg} alt="" />
                    </div>
                    <h2 className="title">Explore Our Courses</h2>
                </div>
                <Tabs>
                    <TabList className={tabStyle}>
                        <Tab>
                            <button>{tab1}</button>
                        </Tab>
                        <Tab>
                            <button>{tab2}</button>
                        </Tab>
                        <Tab>
                            <button>{tab3}</button>
                        </Tab>
                        <Tab>
                            <button>{tab4}</button>
                        </Tab>
                        <Tab>
                            <button>{tab5}</button>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Artificial Intelligence Fundamental Startup Learn"
                                    coursePrice="$40.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image2}
                                    courseTitle="Computer Fundamentals Basic Startup Ultricies Vitae"
                                    coursePrice="$28.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image3}
                                    courseTitle="Boozy Halloween Drinks for the Grown Eleifend Kuismod"
                                    coursePrice="$22.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image4}
                                    courseTitle="Certified Graphic Design with Free Project Course"
                                    coursePrice="$35.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image5}
                                    courseTitle="Database Management Course For Beginners"
                                    coursePrice="$25.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image6}
                                    courseTitle="Student want to learn about science and arts"
                                    coursePrice="$40.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Artificial Intelligence Fundamental Startup Learn"
                                    coursePrice="$40.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Computer Fundamentals Basic Startup Ultricies Vitae"
                                    coursePrice="$28.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Boozy Halloween Drinks for the Grown Eleifend Kuismod"
                                    coursePrice="$22.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Certified Graphic Design with Free Project Course"
                                    coursePrice="$35.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Database Management Course For Beginners"
                                    coursePrice="$25.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Student want to learn about science and arts"
                                    coursePrice="$40.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Artificial Intelligence Fundamental Startup Learn"
                                    coursePrice="$40.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Computer Fundamentals Basic Startup Ultricies Vitae"
                                    coursePrice="$28.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Boozy Halloween Drinks for the Grown Eleifend Kuismod"
                                    coursePrice="$22.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Certified Graphic Design with Free Project Course"
                                    coursePrice="$35.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Database Management Course For Beginners"
                                    coursePrice="$25.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleSeven
                                    courseClass="courses-item mb-30"
                                    courseImg={image1}
                                    courseTitle="Student want to learn about science and arts"
                                    coursePrice="$40.00"
                                />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
                <div className="sec-title5 text-center mt-40 md-mt-6">
                    <div className="description title-color">
                        Start Learning With Our Trending Courses.
                        <span><Link to="/course"> View All courses<i className="flaticon-right-arrow"></i></Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;