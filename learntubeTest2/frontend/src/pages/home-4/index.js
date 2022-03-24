import React from 'react';
import { Helmet } from 'react-helmet'
import HomeFourMain from './HomeFourMain';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HeaderStyleTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterStyleTwo from '../../components/Layout/Footer/FooterStyleTwo';

import favIcon from '../../assets/img/fav.png';
import Logo from '../../assets/img/logo/logo.png';
import offCanvasLogo from '../../assets/img/logo/logo-dark.png';

const HomeFour = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <HeaderStyleTwo
                parentMenu='home'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                mobileNormalLogo={Logo}
                mobileStickyLogo={Logo}
                CanvasLogo={offCanvasLogo}
                headerClass="full-width-header header-style2 modify1"
                headerFullWidth='enable'
            />
            <HomeFourMain />
            <FooterStyleTwo />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeFour;