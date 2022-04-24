import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import YoutubeBoard from '../../components/Events/YoutubeBoard';

const YoutubeVideoListWidget = ({ videos, onVideoClick,nextPageToken,prevPageToken,getToken }) => {
    console.log("---in listWidget---");
    console.log(videos);
    const clickPageToken = (value) => {
       getToken(value);
    };

    return (
        <div className="recent-posts mb-50 py-3">
            <h3 className="widget-title pt-3">검색결과</h3>
            <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80 text-start">
                <div className="container">
                    <div className="course-part clearfix m-0">
                        {/* {Object.entries(videos).map((entrie, idx) => (
                            <YoutubeBoard
                            key={video.id.videoId}
                            video={video}
                            onVideoClick={onVideoClick}
                            display={display}
                        />
                        ))

                        } */}
                         {videos.map((video) => (
                            <YoutubeBoard
                            key={video.id.videoId}
                            video={video}
                            onVideoClick={onVideoClick}
                            //duration={video}
                            // viewCount ={video.statistics.viewCount}
                        />
                        ))}   
                    </div>
                </div>
                {/*버튼 들어갈 자리*/}
                <div className="pagination-area orange-color text-center mt-30 md-mt-0">
                    <ul className="pagination-part">
                        {/* <li className="active"><Link to="#">1</Link></li> */}
                        {prevPageToken ? <li onClick={(e)=>clickPageToken(prevPageToken)} ><Link to="#"><i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp;Prev</Link></li>: null}
                        {nextPageToken ? <li onClick={(e)=>clickPageToken(nextPageToken)} ><Link to="#">Next <i className="fa fa-long-arrow-right"></i></Link></li> : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default YoutubeVideoListWidget;