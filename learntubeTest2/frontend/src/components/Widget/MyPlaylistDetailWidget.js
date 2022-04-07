import React from 'react';
import { Link } from 'react-router-dom';
import Playlist_listview from '../Events/Playlist_listview';

const MyPlaylistDetailWidget = (props) => {
    const { playlistTitle, playlistImg, playlistTime, playlistVideo, creatorName, openDate } = props;

    return (
        <div className="playlist mb-50">
            <h3 className="widget-title">{playlistTitle}</h3>
            <Link to="/"
            ><Playlist_listview
                playlistTitle='DFS 알고리즘'
                playlistTime='30'
            />
            </Link>
            <Playlist_listview
                playlistTitle='BFS 알고리즘'
                playlistTime='30'
            />

        </div>
    )
}

export default MyPlaylistDetailWidget;