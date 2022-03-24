import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SearchModal from '../../components/Layout/Header/SearchModal';

import BlogSidebar from './BlogSidebar';
import SinglePostSix from '../../components/Blog/SinglePostSix';

// Blog Image
import blogImg1 from '../../assets/img/blog/inner/1.jpg'
import blogImg2 from '../../assets/img/blog/inner/2.jpg'
import blogImg3 from '../../assets/img/blog/inner/3.jpg'
import blogImg4 from '../../assets/img/blog/inner/4.jpg'
import blogImg5 from '../../assets/img/blog/inner/5.jpg'
import blogImg6 from '../../assets/img/blog/inner/6.jpg'
import blogImg7 from '../../assets/img/blog/inner/7.jpg'
import blogImg8 from '../../assets/img/blog/inner/8.jpg'

// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

import bannerbg from '../../assets/img/breadcrumbs/5.jpg';

const BlogRight = () => {

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='blog'
                secondParentMenu='blogSidebar'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar='enable'
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Blog Right Sidebar"
                pageName="Blog"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            {/* Blog-Part-Start */}
            <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 order-last">
                            <div className="widget-area">
                                <BlogSidebar />
                            </div>
                        </div>

                        <div className="col-lg-8 pr-50 md-pr-14">
                            <div className='row'>
                                <div className='col-lg-12 mb-70 md-mb-50'>
                                    <SinglePostSix
                                        blogImage={blogImg1}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='University while the lovely valley team work'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                                <div className='col-lg-12 mb-70 md-mb-50'>
                                    <SinglePostSix
                                        blogImage={blogImg2}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='High school program starting soon 2021'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                                <div className='col-lg-12 mb-70 md-mb-50'>
                                    <SinglePostSix
                                        blogImage={blogImg3}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='Modern School the lovely valley team work'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                                <div className='col-lg-12 mb-70 md-mb-50'>
                                    <SinglePostSix
                                        blogImage={blogImg4}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='While the lovely valley team work'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                                <div className='col-lg-12 mb-70 md-mb-50'>
                                    <SinglePostSix
                                        blogImage={blogImg5}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='This is a great source of content for anyone…'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                                <div className='col-lg-12 mb-70 md-mb-50'>
                                    <SinglePostSix
                                        blogImage={blogImg6}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='While the lovely valley team work'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                                <div className='col-lg-12 mb-70 md-mb-50'>
                                    <SinglePostSix
                                        blogImage={blogImg7}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='The Expenses You Are Thinking'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                                <div className='col-lg-12'>
                                    <SinglePostSix
                                        blogImage={blogImg8}
                                        blogAuthor='Admin'
                                        blogCategory='University'
                                        blogPublishedDate='January 21, 2022'
                                        blogTitle='This is a great source of content for anyone…'
                                        blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                        blogButtonClass='blog-button'
                                        blogButtonText='Continue Reading'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog-Part-End */}

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

            <SearchModal />

        </React.Fragment>
    );
}

export default BlogRight;