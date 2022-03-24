import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import SinglePostTwo from '../../components/Blog/SinglePostTwo';

import blogImg1 from '../../assets/img/blog/style3/1.jpg';
import blogImg2 from '../../assets/img/blog/style3/2.jpg';


const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog style1 modify1 pt-100 pb-106 md-pt-70 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title orange"
                        subtitle="News Update"
                        titleClass="title mb-0"
                        title="Latest News & Events"
                    />
                    <div className="row">
                        <div className="col-lg-7 pr-60 md-pr-14 md-mb-30">
                            <SinglePostTwo
                                blogClass='row no-gutter white-bg blog-item mb-34'
                                blogImage={blogImg1}
                                blogTitle='University While The Lovely Valley Team Work '
                                blogPublishedDate='June 15 2020'
                            />
                            <SinglePostTwo
                                blogClass='row no-gutter white-bg blog-item'
                                blogImage={blogImg2}
                                ImgOrder='last'
                                blogTitle='While The Lovely Valley Team Work'
                                blogPublishedDate='December 22 2020'
                            />
                        </div>
                        <div className="col-lg-5 lg-pl-0 md-ml-14">
                            <div className="events-short mb-30">
                                <div className="date-part bgc1">
                                    <span className="month">June</span>
                                    <div className="date">20</div>
                                </div>
                                <div className="content-part">
                                    <div className="categorie">
                                        <Link to="#">Math</Link> &amp; <Link to="#">English</Link>
                                    </div>
                                    <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                </div>
                            </div>
                            <div className="events-short mb-30">
                                <div className="date-part bgc2">
                                    <span className="month">June</span>
                                    <div className="date">21</div>
                                </div>
                                <div className="content-part">
                                    <div className="categorie">
                                        <Link to="#">Math</Link> &amp; <Link to="#">English</Link>
                                    </div>
                                    <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                </div>
                            </div>
                            <div className="events-short mb-30">
                                <div className="date-part bgc3">
                                    <span className="month">June</span>
                                    <div className="date">22</div>
                                </div>
                                <div className="content-part">
                                    <div className="categorie">
                                        <Link to="#">Math</Link> &amp; <Link to="#">English</Link>
                                    </div>
                                    <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                </div>
                            </div>
                            <div className="events-short">
                                <div className="date-part bgc4">
                                    <span className="month">June</span>
                                    <div className="date">23</div>
                                </div>
                                <div className="content-part">
                                    <div className="categorie">
                                        <Link to="#">Math</Link> &amp; <Link to="#">English</Link>
                                    </div>
                                    <h4 className="title mb-0"><Link to="/event/style-1">Educational Technology and Mobile Learning</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;