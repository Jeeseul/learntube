import React from 'react';
import { Helmet } from 'react-helmet'
import HeaderStyleTwo from '../../components/Layout/Header/HeaderStyleTwo';
import SearchModal from '../../components/Layout/Header/SearchModal';
import FooterStyleTwo from '../../components/Layout/Footer/FooterStyleTwo';
import HomeThreeMain from './HomeThreeMain';
import OffWrap from '../../components/Layout/Header/OffWrap';

import favIcon from '../../assets/img/fav.png';
import Logo from '../../assets/img/logo/logo-dark.png';

const HomeThree = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <HeaderStyleTwo
                parentMenu='home'
                TopBar='enable'
                headerNormalLogo={Logo}
                CanvasLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style2"
                TopBarClass="topbar-area dark-parimary-bg"
                emailAddress='support@website.com'
                phoneNumber='(+088) 589-8745'
            />
            <HomeThreeMain />
            <FooterStyleTwo />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeThree;