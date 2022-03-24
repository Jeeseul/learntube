import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import Newsletter from '../../components/Common/Newsletter';
import SinglePostFive from '../../components/Blog/SinglePostFive';

import blogImg1 from '../../assets/img/blog/1.jpg';
import blogImg2 from '../../assets/img/blog/2.jpg';
import blogImg3 from '../../assets/img/blog/3.jpg';

import newsletterIcon from '../../assets/img/newsletter2.png'

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
                <div id="rs-blog" className="rs-blog home9-style event2-bg pt-94 pb-100 md-pt-64 md-pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 pr-74 md-pr-14 md-mb-50">
                                <SectionTitle
                                    sectionClass="sec-title3 mb-50 md-mb-30"
                                    subtitleClass="sub-title yellow-color"
                                    subtitle="News"
                                    titleClass="title black-color"
                                    title="Latest News"
                                />
                                <SinglePostFive
                                    blogImage={blogImg1}
                                    blogTitle='University while the lovely valley team work '
                                    blogPublishedDate='June 15 2020'
                                />
                                <SinglePostFive
                                    blogImage={blogImg2}
                                    blogTitle='While The Lovely Valley Team Work'
                                    blogPublishedDate='December 22 2020'
                                />
                                <SinglePostFive
                                    blogImage={blogImg3}
                                    blogTitle='Modern School Lovely Valley Team Work'
                                    blogPublishedDate='August 28 2020'
                                />
                            </div>
                            <div className="col-lg-5">
                                <SectionTitle
                                    sectionClass="sec-title3 mb-50 md-mb-30"
                                    subtitleClass="sub-title yellow-color"
                                    subtitle="Events"
                                    titleClass="title black-color"
                                    title="Latest Events"
                                />
                                <div className="events-short-top mb-30">
                                    <div className="date-part">
                                        <span className="month">June</span>
                                        <div className="date">20</div>
                                    </div>
                                    <div className="content-part">
                                        <div className="categorie">
                                            <Link to="/event/style-1">Recipes</Link>
                                        </div>
                                        <h3 className="title"><Link to="/event/style-1">Spicy Quince And Cranberry Chutney</Link></h3>
                                        <p className="txt">Educavo Events Description Lorem ipsum dolor sit amet, consectetuer...</p>
                                    </div>
                                </div>
                                <div className="events-short-top mb-30">
                                    <div className="date-part">
                                        <span className="month">June</span>
                                        <div className="date">21</div>
                                    </div>
                                    <div className="content-part">
                                        <div className="categorie">
                                            <Link to="/event/style-1">Recipes</Link>
                                        </div>
                                        <h3 className="title"><Link to="/event/style-1">Persimmon, Pomegranate, And Salad</Link></h3>
                                        <p className="txt">Educavo Events Description Lorem ipsum dolor sit amet, consectetuer...</p>
                                    </div>
                                </div>
                                <div className="events-short-top">
                                    <div className="date-part">
                                        <span className="month">June</span>
                                        <div className="date">23</div>
                                    </div>
                                    <div className="content-part">
                                        <div className="categorie">
                                            <Link to="/event/style-1">Recipes</Link>
                                        </div>
                                        <h3 className="title"><Link to="/event/style-1">Essential Fall Fruits That Aren’t Apples</Link></h3>
                                        <p className="txt">Educavo Events Description Lorem ipsum dolor sit amet, consectetuer...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter
                    sectionClass='rs-newsletter style1 event2-bg yellow-color mb--90 sm-mb-0 sm-pb-80'
                    iconPath={newsletterIcon}
                />
            </div>
        </React.Fragment>
    );

}

export default Blog;