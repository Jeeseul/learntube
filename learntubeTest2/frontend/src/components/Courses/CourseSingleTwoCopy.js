import React from 'react';
import { Link } from 'react-router-dom';

const CourseSingleTwoCopy = (props) => {
    const { courseClass, courseImg, courseTitle, catLink, newCourse, userCount, openDate, creatorName } = props;
    return (
        <div className={courseClass ? courseClass : 'courses-item'}>
            <div className="img-part content-part">
                <img
                    src={courseImg}
                    alt={courseTitle}
                />
                {newCourse ? 
                <ul className="meta-part new-part">
                    <li><span className="price">{newCourse ? "New" : null}</span></li>
                </ul> 
                : null}
            </div>
            <div className="content-part">
                <h3 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : 'Become a PHP Master and Make Money Fast'}</Link></h3>
                <div className="bottom-part">
                    <div className="info-meta">
                        <p className='creatorName'>{creatorName ? creatorName : '-'}</p>
                        <ul>
                            <li className="user"><i className="fa fa-user"></i> {userCount ? userCount : '245'}</li>
                            <li className="ratings">
                                <span>{openDate ? openDate : '-'}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-part">
                        <Link to="/course/course-single">
                            {props.btnText}<i className="flaticon-right-arrow"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseSingleTwoCopy;