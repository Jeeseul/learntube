import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import YoutubeBoard from '../../components/Events/YoutubeBoard';
import courseImg1 from '../../assets/img/courses/1.jpg';

const YoutubeVideoListWidget = ({ videos, onVideoClick, display }) => {
    console.log("---in listWidget---");
    //console.log(videos.contentDetails.duration);
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
                            display={display}
                            duration={video}
                            // viewCount ={video.statistics.viewCount}
                        />
                        ))}   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutubeVideoListWidget;