import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderStyleSix from '../../components/Layout/Header/HeaderStyleSix';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeTwelveMain from './HomeTwelveMain';
import Footer from '../../components/Layout/Footer/Footer';

import favIcon from '../../assets/img/fav.png';
import Logo from '../../assets/img/logo/logo-green.png';
import mobileLogo from '../../assets/img/logo/logo-green.png';

const HomeTwelve = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <HeaderStyleSix
                parentMenu='home'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                mobileNormalLogo={mobileLogo}
                headerClass="full-width-header header-style1 home1-modifiy home12-modifiy"
                TopBar='enable'
                TopBarClass="topbar-area home11-topbar"
                phoneNumber='(+01) 999-999-4444'
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />
            <HomeTwelveMain />
            <Footer
                footerClass='rs-footer home9-style home12-style'
                footerLogo={Logo}
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTwelve;

