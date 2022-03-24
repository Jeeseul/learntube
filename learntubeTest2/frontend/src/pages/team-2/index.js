import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTeamThree from '../../components/Team/SingleTeamThree';
import SearchModal from '../../components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../components/Common/Breadcumb';

// Image
import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

import bannerbg from '../../assets/img/breadcrumbs/2.jpg';

// Team Images
import teamImg1 from '../../assets/img/team/icon/1.png';
import teamImg2 from '../../assets/img/team/icon/2.png';
import teamImg3 from '../../assets/img/team/icon/3.png';
import teamImg4 from '../../assets/img/team/icon/4.png';
import teamImg5 from '../../assets/img/team/icon/5.png';
import teamImg6 from '../../assets/img/team/icon/6.png';

const TeamTwo = () => {

    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='pages'
                secondParentMenu='team'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar='enable'
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Team Two"
                pageName="Team"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            <div className="rs-team style1 inner-style orange-style pt-94 pb-70 md-pt-64 md-pb-40 gray-bg">
                <div className="container">
                    {/* Section Title Start */}
                    <SectionTitle
                        sectionClass="sec-title mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title orange"
                        subtitle="Instructor"
                        titleClass="title mb-0"
                        title="Expert Teachers"
                    />
                    {/* Section Title End */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeamThree
                                itemClass="team-item"
                                Image={teamImg1}
                                Title="Makhaia Antitni"
                                Designation="Professor"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeamThree
                                teamClass="team-item"
                                Image={teamImg2}
                                Title="Corey Anderson"
                                Designation="Professor"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeamThree
                                teamClass="team-item"
                                Image={teamImg3}
                                Title="Masud Rana"
                                Designation="Professor"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <SingleTeamThree
                                teamClass="team-item"
                                Image={teamImg4}
                                Title="Najmul Huda"
                                Designation="Professor"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <SingleTeamThree
                                teamClass="team-item"
                                Image={teamImg5}
                                Title="Rushali Rumi"
                                Designation="Professor"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeamThree
                                teamClass="team-item"
                                Image={teamImg6}
                                Title="Abu Sayed"
                                Designation="Professor"
                            />
                        </div>
                    </div>
                </div>
            </div>

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

export default TeamTwo