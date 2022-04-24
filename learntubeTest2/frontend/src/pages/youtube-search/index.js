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

    const [videos, setVideos] = useState([]);
    const [searchedVideos, setSearchedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isSearched, setIsSearched] = useState(false);
    const [newQuery,setNewQuery] = useState('한동대학교');
    const httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: 'AIzaSyBlCuo5BTHRZoW79AK6IvSqPsh7R1kL31E' },

    });
    const youtube = new Youtube(httpClient);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };


    // query를 받아와서 search 후 searchedVideos에 결과 저장
    const search = useCallback(
        (query) => {
            console.log("query: " + query);
            setNewQuery(query);
            setSelectedVideo(null);
            youtube.search(query).then(function (response) {
                setSearchedVideos(response);
                console.log(searchedVideos);
            })
        },
        [youtube,newQuery],
    );

    const getToken = useCallback(
        (value) => {
            console.log("token: "+ value);
            youtube.getTokenDetail(newQuery,value).then(function(response){
                console.log("data from token");
                setSearchedVideos(response);
            })
        },[youtube],
    );

    // 처음 페이지를 로딩할 때 default로 query 값 설정
    useEffect(function () {
        // setNewQuery('한동대학교');
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
                            <div className="col-md-8">
                                <div className="widget-area">

                                    <YoutubeVideoListWidget 
                                        videos={searchedVideos.items}
                                        onVideoClick={selectVideo}
                                        nextPageToken={searchedVideos.nextPageToken}
                                        prevPageToken={searchedVideos.prevPageToken}
                                        getToken={getToken}
                                    />

                                </div>
                            </div>


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