import React from 'react';
import { Helmet } from 'react-helmet'
import Header from '../../components/Layout/Header/Header';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeTenMain from './HomeTenMain';
import FooterStyleTwo from '../../components/Layout/Footer/FooterStyleTwo';

import favIcon from '../../assets/img/fav.png';
import Logo from '../../assets/img/logo/logo-yellow.png';
import offCanvasLogo from '../../assets/img/logo/logo-yellow2.png';
import stickyLogo from '../../assets/img/logo/logo-yellow2.png';

const HomeTen = () => {
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
                CanvasLogo={offCanvasLogo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header home8-style4 home9 modify-home10"
                TopBar='enable'
                TopBarClass="topbar-area home9-topbar"
                emailAddress=' support@website.com'
                Location=' 374 William S Canning Blvd, MA 2721, USA '
            />
            <HomeTenMain />
            <FooterStyleTwo
                footerClass='rs-footer home9-style'
                footerLogo={Logo}
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTen;

