import React from 'react';
import { Helmet } from 'react-helmet'
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import FooterStyleTwo from '../../components/Layout/Footer/FooterStyleTwo';
import HeaderStyleFour from '../../components/Layout/Header/HeaderStyleFour';
import HomeSixMain from './HomeSixMain';

import favIcon from '../../assets/img/fav.png';
import Logo from '../../assets/img/logo/logo-dark.png';
import stickyLogo from '../../assets/img/logo/logo.png';

const HomeSix = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <HeaderStyleFour
                parentMenu='home'
                TopBar='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={stickyLogo}
                CanvasLogo={Logo}
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header header-style2'
                TopBarClass='topbar-area dark-parimary-bg'
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'

            />
            <HomeSixMain />
            <FooterStyleTwo
                footerTopClass='footer-top no-gap'
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeSix;