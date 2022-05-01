import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistBoard from '../../components/Courses/PlaylistBoard';
import courseImg1 from '../../assets/img/courses/1.jpg';

const PlaylistWidget = () => {
    return (
        <div className="recent-posts mb-50 p-3">
            <h3 className="widget-title pt-3">나의 Playlist</h3>
            <div id="rs-popular-course" className="rs-popular-courses list-view style1 course-view-style orange-style rs-inner-blog white-bg pb-100 md-pt-70 md-pb-80 text-start">
                <div className="container">
                    <div className="course-part clearfix m-0">
                        <PlaylistBoard
                            playlistTitle="OS를 공부하기 전에 알아두면 좋은 개념"
                            playlistImg={courseImg1}
                            playlistTime="01:34"
                            playlistVideo={6}
                            openDate="2022.03"
                            creatorName="양지후"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistWidget;