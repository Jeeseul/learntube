import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';


const CourseDashBoard = (props) => {
    const { courseClass, courseImg, courseTitle, progress, userCount, notice, creatorName, openDate } = props;

    return (
        <div className={courseClass ? courseClass : 'courses-item'}>
            <div className="img-part" >
                <img style={{ height: '150px' }}
                    src={courseImg}
                    alt={courseTitle}
                />
            </div>
            <div className="content-part" style={{ width: '60%' }}>
                <div className="row">
                    <h3 className="title"><Link to="/course/course-single">{courseTitle ? courseTitle : '강의제목'}</Link></h3>
                    <p className='creatorName text-end'>{creatorName ? creatorName : '-'}</p>
                </div>
                <ul className="meta-part text-start">
                    <li>학습현황</li>
                    <li><ProgressBar now={progress} label={`${progress}%`} /></li>
                </ul>
                    <div className="info-meta">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li className="user"><i className="fa fa-bullhorn"></i>공지</li>
                                    <li className="ratings">
                                        <span>{notice ? notice : '공지가 없습니다.'}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li className="user"><i className="fa fa-user"></i> {userCount ? userCount : '245'}</li>
                                    <li className="ratings">
                                        <span>{openDate ? openDate : '-'}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CourseDashBoard