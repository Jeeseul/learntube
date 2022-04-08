import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import YoutubeBoard from '../../components/Events/YoutubeBoard';
import courseImg1 from '../../assets/img/courses/1.jpg';

const YoutubeVideoListWidget = ({ videos, onVideoClick, display }) => {
    // const [query,setQuery] = useState(props.query);
    // const [errorMs, setError] = useState("");
    // const [params, setParams] = useState({
    //     key:/*발급받은 API KEY*/"AIzaSyB53Sg7DqGp0vfZ6WQS8pRMAL98_EUIjGw",
    //     part: 'snippet',
    //     q: "샤이니",//검색어
    //     maxResults: 20,
    //     type: 'video',
    //     videoDuration: 'long'
    //   });

    //   useEffect(() => {
    //     //setQuery(props.query);
    //     let temp = props.query;
    //     console.log("query at the bro component:" + query);
    //     setParams({
    //         key:/*발급받은 API KEY*/"AIzaSyCq1XMQIPdtXPITRBqgN8ArI48PkeOx7Yk",
    //         part: 'snippet',
    //         q: {temp},//검색어
    //         maxResults: 20,
    //         type: 'video',
    //         videoDuration: 'long'
    //     });
    //     console.log(params);
    //     axios.get('https://www.googleapis.com/youtube/v3/search', { params })
    //     .then((response) => {
    //       console.log(response);
    //       if (!response) {
    //         setError('검색된 영상이 없습니다.');
    //         return;
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   },[query]);

    //   //setQuery(props.query);
    //   const clickSearch = (query) => {
    //     setQuery(props.query);
    //     console.log("query at the bro component:" + query);
    //     setParams({
    //         key:/*발급받은 API KEY*/"AIzaSyDeuVKMqX-hoQGGJCkLlifzJTpqH7bZQMs",
    //         part: 'snippet',
    //         q: {query},//검색어
    //         maxResults: 20,
    //         type: 'video',
    //         videoDuration: 'long'
    //     });
    // };

    return (
        <div className="recent-posts mb-50 p-3">
            <h3 className="widget-title pt-3">검색결과</h3>
            <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80 text-start">
                <div className="container">
                    <div className="course-part clearfix m-0">
                        {videos.map((video) => (
                            // <VideoItem
                            //     key={video.id}
                            //     video={video}
                            //     onVideoClick={onVideoClick}
                            //     display={display}
                            // />
                            <YoutubeBoard
                            /*videoTitle="OS를 공부하기 전에 알아두면 좋은 개념"
                            thumbnailImg={courseImg1}
                            playTime="01:34"
                            viewCount={6}
                            regDate="2022.03"
                            creatorName="양지후"*/
                            key={video.id}
                            video={video}
                            onVideoClick={onVideoClick}
                            display={display}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutubeVideoListWidget;