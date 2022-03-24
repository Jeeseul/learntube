import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderStyleSix from '../../components/Layout/Header/HeaderStyleSix';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import HomeFourteenMain from './HomeFourteenMain';
import Footer from '../../components/Layout/Footer/Footer';

import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/dark-logo.png';

const HomeFourteen = () => {
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
                mobileNormalLogo={Logo}
                headerClass="full-width-header header-style1 home1-modifiy home14-style"
                TopBar='enable'
                TopBarClass="topbar-area home11-topbar modify1"
                phoneNumber='(+01) 999-999-4444'
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />
            <HomeFourteenMain />
            <Footer
                footerClass='rs-footer home9-style main-home home14-style'
                footerLogo={Logo}
            />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeFourteen;

