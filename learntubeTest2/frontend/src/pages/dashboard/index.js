import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Newsletter from '../../components/Common/Newsletter';
import CourseMain from './CourseMain';
import CourseMainAdmin from './CourseMainAdmin';
import CourseMainClosed from './CourseMainClosed';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Image
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

const CourseOne = () => {

    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='course'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
            />

            <div class="container text-center">
            <Tabs>
                    <TabList className="border-none">
                        <Tab className="classButton orange mx-5">수강중인 강의실</Tab>
                        <Tab className="classButton white mx-5">관리중인 강의실</Tab>
                        <Tab className="classButton white mx-5">종료된 강의실</Tab>
                    </TabList>

                    <TabPanel>
                        <CourseMain />
                    </TabPanel>
                        <CourseMainAdmin />
                    <TabPanel>
                        <CourseMainClosed />
                    </TabPanel>
                </Tabs>
                {/* <div class="row gutter-35">
                    <div class="col-md-4">
                        <div class="address-box sm-mb-30">
                        <a class="classButton orange" href="/">수강중인 강의실</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="address-box sm-mb-30">
                        <a class="classButton" href="/">관리중인 강의실</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="address-box sm-mb-30">
                        <a class="classButton" href="/">종료된 강의실</a>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Course Main */}
            <CourseMain />
            {/* Course Main */}

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-70"
                titleClass="title mb-0 white-color"
            />

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <SearchModal />
        </React.Fragment>
    );
}

export default CourseOne;