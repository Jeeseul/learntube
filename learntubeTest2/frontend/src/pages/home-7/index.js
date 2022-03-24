import React from 'react';
import { Helmet } from 'react-helmet'
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header';
import HomeSevenMain from './HomeSevenMain';

import favIcon from '../../assets/img/fav-orange.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';
import logo from '../../assets/img/logo/lite-logo.png';

const HomeSeven = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='home'
                mobileNormalLogo={logo}
            />
            <HomeSevenMain />
            <Footer
                footerClass="rs-footer home9-style footer-bg-img main-home"
                footerLogo={footerLogo}
                footerTopClass="no-gap"
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeSeven;