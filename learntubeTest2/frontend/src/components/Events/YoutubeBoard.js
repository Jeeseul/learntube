import React, { useCallback, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import ModalVideo from 'react-modal-video';

const YoutubeBoard = memo(({ video, video: { snippet }, onVideoClick, display }) => {
    //const { videoTitle, thumbnailImg, playTime, viewCount, creatorName, regDate } = props;
    //const displayType = display === 'list' ? styles.list : styles.grid;
    const onClick = useCallback(() => {
      onVideoClick(video);
    }, [onVideoClick, video]);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <div className='courses-item p-0 m-1 rounded-0' onClick={onClick}>
            <div className="m-0" >
                <img style={{ height: '100px' }}
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                />
            </div>
            <div className="content-part" style={{ width: '60%' }}>
                <div className="row ps-3 mb-3">
                    <h3 className="title">
                        <Link onClick={() => { openModal(); }}>{snippet.title ? snippet.title : '강의제목'}</Link>
                        <ModalVideo channel='youtube' isOpen={isOpen} videoId={snippet.video} onClose={() => { openModal(); }} />
                    </h3>
                </div>
                <div className="info-meta p-0">
                    <div className="row ps-2">
                            <ul>
                                <li>
                                    <i className="fa fa-user pe-1 "></i> {snippet.channelTitle ? snippet.channelTitle : '-'}
                                </li>
                                {/* <li>
                                    <i className="fa fa-youtube-play pe-1 "></i> {viewCount ? viewCount : '0'}
                                </li>
                                <li>
                                    <i className="fa fa-clock-o pe-1"></i>{playTime ? playTime : '0'}
                                </li>
                                <li>
                                    <i className="fa fa-calendar-o pe-1"></i>{regDate ? regDate : '-'} 
                                </li>*/}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
},);

export default YoutubeBoard