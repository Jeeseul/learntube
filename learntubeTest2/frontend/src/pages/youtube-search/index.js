import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import ScrollToTop from '../../components/Common/ScrollTop';
import YoutubeVideoListWidget from '../../components/Widget/YoutubeVideoListWidget';
import YoutubeVideoSearchWidget from '../../components/Widget/YoutubeVideoSearchWidget';
import axios from 'axios';
import Youtube from '../../service/youtube';
import YouTube from 'react-youtube';



// Image
import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

const YoutubeSearch = () => {

    // const [query,setQuery] = useState('');
    // //const [isSearching,setSearching] = useState(false);

    //   const clickSearch = (query) => {
    //     console.log("query at the parent component:" + query);
    //     setQuery(query);
    //     //setSearching(true);
    // };
    const opts = {
        height: '480',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const [videos, setVideos] = useState([]);
    const [searchedVideos, setSearchedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isSearched, setIsSearched] = useState(false);
    const httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: 'AIzaSyCff79cBsJAXrXG9YgRk0lmB7i1FgcC-Lg' },

    });
    const youtube = new Youtube(httpClient);

    const selectVideo = (video) => {
        setSelectedVideo(video);
        console.log(selectedVideo);
        console.log(selectedVideo.id);
    };


    // query를 받아와서 search 후 searchedVideos에 결과 저장
    const search = useCallback(
        (query) => {
            console.log("query: " + query);
            setSelectedVideo(null);
            youtube.search(query).then(function (response) {
                setSearchedVideos(response);
                console.log(searchedVideos);
            })
        },
        [youtube],
    );

    // 처음 페이지를 로딩할 때 default로 query 값 설정
    useEffect(function () {
        youtube
            .search('한동대학교')
            .then((searchedVideos) => setSearchedVideos(searchedVideos));
    }, []);


    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='pages'
                secondParentMenu='event'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
            />


            <div className="rs-event orange-style pt-50 pb-100 md-pt-80 md-pb-80">
                <div className="px-5">
                    <h3><i className="fa fa-play-circle-o pe-1"></i>DFS</h3>
                    <div className="widget-area">
                        < YoutubeVideoSearchWidget onSearch={search} />
                    </div>
                    <div class=" text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row">
                            {/* <div className="col-md-4">
                                <div className="widget-area">
                                    <YoutubeVideoListWidget videos={searchedVideos}
                                        onVideoClick={selectVideo}
                                        display={'list'} />

                                </div>
                            </div> */}
                            {/* video를 선택했을 경우 화면 반으로 나눠서 구성 */}
                            {selectedVideo ?
                                (<div className="col-md-5">
                                    <div className="widget-area">
                                        <YoutubeVideoListWidget videos={searchedVideos}
                                            onVideoClick={selectVideo} />
                                    </div>
                                </div>

                                ) : <div className="col-md-12">
                                    <div className="widget-area">
                                        <YoutubeVideoListWidget videos={searchedVideos}
                                            onVideoClick={selectVideo} />
                                    </div>
                                    </div>}

                            {selectedVideo ? (
                                <div className="col-md-7 videoAnimation">
                                    <YouTube videoId={selectedVideo.id} opts={opts} />
                                </div>
                            ) :
                                <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

            <SearchModal />
        </React.Fragment>
    );
}

export default YoutubeSearch