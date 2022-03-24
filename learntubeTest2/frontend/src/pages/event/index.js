import React from 'react';
import { Helmet } from 'react-helmet';
import SingleEvent from '../../components/Events/SingleEvent';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';

// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

import bannerbg from '../../assets/img/breadcrumbs/2.jpg';

// Event Images
import eventImg1 from '../../assets/img/event/home12/1.jpg';
import eventImg2 from '../../assets/img/event/home12/2.jpg';
import eventImg3 from '../../assets/img/event/home12/3.jpg';
import eventImg4 from '../../assets/img/event/home12/4.jpg';

const Event = () => {

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='pages'
                secondParentMenu='event'
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
                pageTitle="Event One"
                pageName="Event"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            <div className="rs-event orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-60">
                            <SingleEvent
                                eventClass='event-item'
                                eventImg={eventImg1}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventCategory='Recipes'
                                eventTitle="Spicy Quince And Cranberry Chutney"
                                eventDesc='Bootcamp Events Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-60">
                            <SingleEvent
                                eventClass='event-item'
                                eventImg={eventImg2}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventCategory='Recipes'
                                eventTitle="Persim, Pomegran, And Massag Kale Salad"
                                eventDesc='Bootcamp Events Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-60">
                            <SingleEvent
                                eventClass='event-item'
                                eventImg={eventImg3}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventCategory='Recipes'
                                eventTitle="Essential Fall Fruits That Aren’t Apples"
                                eventDesc='Bootcamp Events Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-60">
                            <SingleEvent
                                eventClass='event-item'
                                eventImg={eventImg4}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventCategory='Recipes'
                                eventTitle="Seekers From Overcoming Failure"
                                eventDesc='Bootcamp Events Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-60">
                            <SingleEvent
                                eventClass='event-item'
                                eventImg={eventImg1}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventCategory='Recipes'
                                eventTitle="Best Technology Graduation Ceremony."
                                eventDesc='Bootcamp Events Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleEvent
                                eventClass='event-item'
                                eventImg={eventImg2}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventCategory='Recipes'
                                eventTitle="Educational Technology and Mobile Learning"
                                eventDesc='Bootcamp Events Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod...'
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

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

            <SearchModal />
        </React.Fragment>
    );
}

export default Event