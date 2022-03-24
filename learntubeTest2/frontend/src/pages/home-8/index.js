import React from 'react';
import { Helmet } from 'react-helmet'
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleThree from '../../components/Layout/Header/HeaderStyleThree';
import FooterStyleTwo from '../../components/Layout/Footer/FooterStyleTwo';
import HomeEightMain from './HomeEightMain';

import favIcon from '../../assets/img/fav.png';
import Logo from '../../assets/img/logo/logo3.png';
import stickyLogo from '../../assets/img/logo/logo.png';
import darkLogo from '../../assets/img/logo/logo-dark2.png';

const HomeEight = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <HeaderStyleThree
                parentMenu='home'
                headerNormalLogo={Logo}
                headerStickyLogo={stickyLogo}
                CanvasLogo={darkLogo}
                responsiveLogo={darkLogo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style3 modify expand-none"
                TopBarClass="topbar-area dark-parimary-bg"
            />
            <HomeEightMain />
            <FooterStyleTwo 
                footerTopClass='footer-top no-gap'
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeEight;