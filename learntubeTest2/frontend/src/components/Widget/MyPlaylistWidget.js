import React from 'react';
import { Link } from 'react-router-dom';
import Playlist_listview from '../Events/Playlist_listview';

const MyPlaylistWidget = () => {
    return (
        <div className="playlist mb-50">
            <h3 className="widget-title">나의 Playlist</h3>

            <Playlist_listview
                playlistTitle='DFS 알고리즘'
                playlistTime='30'
            />
            <Playlist_listview
                playlistTitle='BFS 알고리즘'
                playlistTime='30'
            />

        </div>
    )
}

export default MyPlaylistWidget;