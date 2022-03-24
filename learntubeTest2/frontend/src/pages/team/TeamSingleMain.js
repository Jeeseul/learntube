import React from 'react';
import { Link } from 'react-router-dom';
import TeamDetailsProgressBar from '../../components/Elements/Progress/TeamDetailsProgressBar';
// Breadcrumbs Bg
import teamImg1 from '../../assets/img/team/9.jpg';

const TeamSingleMain = () => {
    return (
        <div className="profile-section pt-100 pb-90 md-pt-80 md-pb-70">
            <div className="container">
                <div className="row clearfix">
                    <div className="image-column col-lg-5 md-mb-50">
                        <div className="inner-column mb-50 md-mb-0">
                            <div className="image">
                                <img src={teamImg1} alt="images" />
                            </div>
                            <div className="team-content text-center">
                                <h3>Eliena Rose</h3>
                                <div className="text">Chief Instructor</div>
                                <ul className="personal-info">
                                    <li className="email">
                                        <span><i className="glyph-icon flaticon-email"> </i> </span>
                                        <Link to="#">info@yourwebsite.com</Link>
                                    </li>
                                    <li className="phone">
                                        <span><i className="glyph-icon flaticon-call"></i></span>
                                        <Link to="#">(+088) 589-8745</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-box">
                                <Link to="#">
                                    <i className="fa fa-facebook-square"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-twitter-square"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-linkedin-square"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fa fa-github"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-7 pl-60 pt-50 md-pl-14 md-pt-0">
                        <div className="inner-column">
                            <h2>Eliena Rose</h2>
                            <h4>A certified instructor From Educavo</h4>
                            <ul className="student-list">
                                <li>23,564 Total Students</li>
                                <li><span className="theme_color">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> (1254 Rating)</li>
                                <li>256 Reviews</li>
                            </ul>
                            <h5>About Me</h5>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat</p>
                            <div className="team-skill mb-50">
                                <h3 className="skill-title">Our Teacher Skill:</h3>
                                <div className="row">
                                    <div className="col-md-6 sm-mb-20">
                                        <TeamDetailsProgressBar
                                            completed={95}
                                            labelText="Accounting"
                                        />
                                        <TeamDetailsProgressBar
                                            completed={85}
                                            labelText="Reading"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TeamDetailsProgressBar
                                            completed={88}
                                            labelText="Writing"
                                        />
                                        <TeamDetailsProgressBar
                                            completed={75}
                                            labelText="Speaking"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="content-part">
                            <h3 className="title">25 That Prevent Job Seekers From Overcoming Failure</h3>
                            <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSingleMain;