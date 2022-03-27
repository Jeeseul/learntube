import React from 'react';
import { Link } from 'react-router-dom';

const CourseDashBoard = (props) => {
    const { courseClass, courseImg, courseTitle, catLink, coursePrice, courseCategory, userCount, userRating } = props;
    return (
        <div className={courseClass ? courseClass : 'courses-item'}>
            <div className="img-part">
                <img
                    src={courseImg}
                    alt={courseTitle}
                />
            </div>
            <div className="content-part">
                <div className="row">
                <h3 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : '강의제목'}</Link></h3>
                </div>
                <ul className="meta-part">
                    <li><Link className="categorie" to={catLink ? catLink : 'course-categories'}>{courseCategory ? courseCategory : '학습현황'}</Link></li>
                </ul>               
                <div className="bottom-part">
                    <div className="info-meta">
                        <ul>
                            <li className="user"><i className="fa fa-bullhorn"></i> {userCount ? userCount : '공지'}</li>
                            <li className="ratings">
                                <span>{userRating ? userRating : '공지'}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDashBoard