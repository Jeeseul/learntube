import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import NewsletterTwo from '../../components/Common/Newsletter/NewsletterTwo';
import SinglePostTwo from '../../components/Blog/SinglePostTwo';

import blogImg1 from '../../assets/img/blog/1.jpg';
import blogImg2 from '../../assets/img/blog/2.jpg';
import blogImg3 from '../../assets/img/blog/3.jpg';

import bgImg from '../../assets/img/bg/bg2.jpg';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
}

const Blog = () => {
    return (
        <React.Fragment>
            <div style={bgStyle}>
                <div id="rs-blog" className="rs-blog style1 pt-94 pb-100 md-pt-64 md-pb-70">
                    <div className="container">
                        <SectionTitle
                            sectionClass="sec-title mb-50 md-mb-30 text-center"
                            subtitleClass="sub-title primary"
                            subtitle="News Update"
                            titleClass="title mb-0"
                            title="Latest News & Events"
                        />
                        <div className="row">
                            <div className="col-lg-7 col-md-12 pr-74 md-pr-14 md-mb-50">
                                <SinglePostTwo
                                    blogImage={blogImg1}
                                    blogTitle='University while the lovely valley team work '
                                    blogPublishedDate='June 15 2020'
                                />
                                <SinglePostTwo
                                    blogImage={blogImg2}
                                    blogTitle='While The Lovely Valley Team Work'
                                    blogPublishedDate='December 22 2020'
                                />
                                <SinglePostTwo
                                    blogImage={blogImg3}
                                    blogTitle='Modern School The Lovely Valley Team Work'
                                    blogPublishedDate='August 28 2020'
                                />
                            </div>
                            <div className="col-lg-5 lg-pl-0">
                                <div className="events-short mb-30">
                                    <div className="date-part">
                                        <span className="month">June</span>
                                        <div className="date">20</div>
                                    </div>
                                    <div className="content-part">
                                        <div className="categorie">
                                            <Link to="/event/style-1">Math</Link> &amp; <Link to="/event/style-1">English</Link>
                                        </div>
                                        <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                    </div>
                                </div>
                                <div className="events-short mb-30">
                                    <div className="date-part">
                                        <span className="month">June</span>
                                        <div className="date">21</div>
                                    </div>
                                    <div className="content-part">
                                        <div className="categorie">
                                            <Link to="/event/style-1">Math</Link> &amp; <Link to="/event/style-1">English</Link>
                                        </div>
                                        <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                    </div>
                                </div>
                                <div className="events-short mb-30">
                                    <div className="date-part">
                                        <span className="month">June</span>
                                        <div className="date">22</div>
                                    </div>
                                    <div className="content-part">
                                        <div className="categorie">
                                            <Link to="/event/style-1">Math</Link> &amp; <Link to="/event/style-1">English</Link>
                                        </div>
                                        <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                    </div>
                                </div>
                                <div className="events-short">
                                    <div className="date-part">
                                        <span className="month">June</span>
                                        <div className="date">23</div>
                                    </div>
                                    <div className="content-part">
                                        <div className="categorie">
                                            <Link to="/event/style-1">Math</Link> &amp; <Link to="/event/style-1">English</Link>
                                        </div>
                                        <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewsletterTwo />
            </div>
        </React.Fragment>
    );

}

export default Blog;