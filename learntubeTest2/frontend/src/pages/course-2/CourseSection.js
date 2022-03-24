import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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

    let tab1 = "All",
        tab2 = "Science",
        tab3 = "Business",
        tab4 = "Humanities",
        tab5 = "Diploma"
    const tabStyle = 'gridFilter text-center mb-50 md-mb-30';

    return (
        <div id="rs-popular-course" className="rs-popular-courses style1 orange-style pt-100 pb-100 md-pt-70 md-pb-50">
            <div className="container">
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
                                <CourseSingleTwo
                                    courseClass="courses-item mb-30"
                                    courseImg={courseImg1}
                                    courseTitle="Artificial Intelligence Fundamental Startup Learn"
                                    coursePrice="$40.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item mb-30"
                                    courseImg={courseImg2}
                                    courseTitle="Computer Fundamentals Basic Startup Ultricies Vitae"
                                    coursePrice="$28.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item mb-30"
                                    courseImg={courseImg3}
                                    courseTitle="Boozy Halloween Drinks for the Grown Eleifend Kuismod"
                                    coursePrice="$22.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg4}
                                    courseTitle="Certified Graphic Design with Free Project Course"
                                    coursePrice="$35.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg5}
                                    courseTitle="Database Management Course For Beginners"
                                    coursePrice="$25.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item"
                                    courseImg={courseImg6}
                                    courseTitle="Student want to learn about science and arts"
                                    coursePrice="$40.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg1}
                                    courseTitle="Artificial Intelligence Fundamental Startup Learn"
                                    coursePrice="$40.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg2}
                                    courseTitle="Computer Fundamentals Basic Startup Ultricies Vitae"
                                    coursePrice="$28.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item"
                                    courseImg={courseImg3}
                                    courseTitle="Boozy Halloween Drinks for the Grown Eleifend Kuismod"
                                    coursePrice="$22.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg4}
                                    courseTitle="Certified Graphic Design with Free Project Course"
                                    coursePrice="$35.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg5}
                                    courseTitle="Database Management Course For Beginners"
                                    coursePrice="$25.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item"
                                    courseImg={courseImg6}
                                    courseTitle="Student want to learn about science and arts"
                                    coursePrice="$40.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg1}
                                    courseTitle="Artificial Intelligence Fundamental Startup Learn"
                                    coursePrice="$40.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg2}
                                    courseTitle="Computer Fundamentals Basic Startup Ultricies Vitae"
                                    coursePrice="$28.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item"
                                    courseImg={courseImg3}
                                    courseTitle="Boozy Halloween Drinks for the Grown Eleifend Kuismod"
                                    coursePrice="$22.00"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg4}
                                    courseTitle="Certified Graphic Design with Free Project Course"
                                    coursePrice="$35.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item md-mb-30"
                                    courseImg={courseImg5}
                                    courseTitle="Database Management Course For Beginners"
                                    coursePrice="$25.00"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CourseSingleTwo
                                    courseClass="courses-item"
                                    courseImg={courseImg6}
                                    courseTitle="Student want to learn about science and arts"
                                    coursePrice="$40.00"
                                />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default CoursePart;