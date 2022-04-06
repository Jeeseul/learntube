import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistWidget = () => {
    return (
        <div className="recent-posts mb-50">
            <h3 className="widget-title">전체 Playlist</h3>
            <ul>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="#">Entries feed</Link></li>
                <li><Link to="#">Comments feed</Link></li>
                <li><Link to="#">WordPress.org</Link></li>
            </ul>
        </div>
    )
}

export default PlaylistWidget;