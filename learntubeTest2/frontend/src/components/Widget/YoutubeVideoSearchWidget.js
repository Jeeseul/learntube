import React from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const YoutubeVideoSearchWidget = (props) => {
    const [query,setQuery] = useState('');

    const getInput = (e) => {
        setQuery(e.target.value);
        console.log(query);
      };

    const clickSearch = () => {
        console.log("query before going up to parent:" + query);
        props.clickSearch(query);
    };

    return (
        <div className="search-widget mb-50">
            <div className="search-wrap">
                <input type="search" placeholder="Searching..." name="s" className="search-input" onChange={getInput}/>
                <button type="submit" value="Search" onClick={clickSearch}><i className="fa fa-search"></i></button>
            </div>
        </div>
    )
}

export default YoutubeVideoSearchWidget;