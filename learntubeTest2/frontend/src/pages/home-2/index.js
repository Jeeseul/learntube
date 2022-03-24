import React from 'react';
import { Helmet } from 'react-helmet'
import Header from '../../components/Layout/Header/Header';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeTwoMain from './HomeTwoMain';
import FooterStyleTwo from '../../components/Layout/Footer/FooterStyleTwo';

import favIcon from '../../assets/img/fav.png';

import Logo from '../../assets/img/logo/logo-dark.png';
import stickyLogo from '../../assets/img/logo/logo-dark.png';
import mobileLogo from '../../assets/img/logo/logo-dark.png';
import canvasLogo from '../../assets/img/logo/logo-dark.png';

const HomeTwo = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='home'
                headerNormalLogo={Logo}
                headerStickyLogo={stickyLogo}
                mobileNormalLogo={mobileLogo}
                CanvasLogo={canvasLogo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home1-modifiy"
                TopBar='enable'
                TopBarClass="topbar-area dark-primary-bg hidden-md"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />
            <HomeTwoMain />
            <FooterStyleTwo />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTwo;

