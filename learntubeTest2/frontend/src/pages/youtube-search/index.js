import React, { useEffect } from 'react';
import { useState, useCallback} from 'react';
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
    const [selectedVideo, setSelectedVideo] = useState(null);

    const httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: 'AIzaSyDg2PkWI2J2uNYnikcy3SXU7YjNVWLcU1c' },
    });
    const youtube = new Youtube(httpClient);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };

    const search = useCallback(
        (query) => {
            console.log("query"+query);
            setSelectedVideo(null);
            // const response = youtube.search(query);
            // setVideos(response);
            // console.log(videos);
            youtube.search(query).then(function(response) {
                    setVideos(response);
                    console.log(videos);
                })
            videos.map(function (item) {
                console.log(item.id);
              })

            // );
            //youtube.detailSearch(response);
            // youtube.search(query).then(function(response) {
            //     setVideos(response);
            //     console.log(videos);
            // })
        },
        [youtube],
    );
    useEffect(() => {
        youtube
            .mostPopular() //
            .then((videos) => setVideos(videos));
        }, []);
            // }, [youtube]);

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
                            <div className="col-md-4">
                                <div className="widget-area">
                                    <YoutubeVideoListWidget videos={videos}
                                        onVideoClick={selectVideo}
                                        display={'list'} />

                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="widget-area">
                                    <YoutubeVideoListWidget videos={videos}
                                        onVideoClick={selectVideo}
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