import React from 'react';
import { Helmet } from 'react-helmet';
import OffWrap from '../../components/Layout/Header/OffWrap';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import Newsletter from '../../components/Common/Newsletter';
import ContactMain from './ContactMain';

// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';


const ContactTwo = () => {
    return (
        <React.Fragment>
            <OffWrap />
            {/* Header */}
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <Header
                parentMenu='contact'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />
            {/* Header */}

            {/* ContactMain Section Start */}
            <ContactMain />
            {/* ContactMain Section End */}

            {/* Newsletter Section Start */}
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />
            {/* Newsletter Section End */}

            {/* Footer */}
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            {/* Footer */}

            {/* SearchModal */}
            <SearchModal />
            {/* SearchModal */}

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}
        </React.Fragment>

    );
}


export default ContactTwo;