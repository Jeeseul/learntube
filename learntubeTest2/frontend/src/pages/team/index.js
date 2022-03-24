import React from 'react';
import SingleTeam from '../../components/Team/SingleTeam'
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';

// Image
import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

import bannerbg from '../../assets/img/breadcrumbs/2.jpg';

// Team Images
import teamImg1 from '../../assets/img/team/1.jpg';
import teamImg2 from '../../assets/img/team/2.jpg';
import teamImg3 from '../../assets/img/team/3.jpg';
import teamImg4 from '../../assets/img/team/4.jpg';
import teamImg5 from '../../assets/img/team/5.jpg';
import teamImg6 from '../../assets/img/team/6.jpg';

const Team = () => {

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
                pageTitle="Team One"
                pageName="Team"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            <div className="rs-team style1 orange-style pt-100 pb-50 md-pt-80 md-pb-30 white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                itemClass="team-item"
                                Image={teamImg1}
                                Title="Makhaia Antitni"
                                Designation="President & CEO"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamImg2}
                                Title="Corey Anderson"
                                Designation="CEO & Founder"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamImg3}
                                Title="Masud Rana"
                                Designation="Web Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamImg4}
                                Title="Najmul Huda"
                                Designation="Digital Marketer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamImg5}
                                Title="Rushali Rumi"
                                Designation="Design Lead"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-50">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamImg6}
                                Title="Abu Sayed"
                                Designation="App Developer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <SearchModal />
        </React.Fragment>
    );
}

export default Team