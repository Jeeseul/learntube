import React, { memo, useRef } from 'react';
import { useState } from 'react';

const YoutubeVideoSearchWidget = memo(({ onSearch }) => {
    // const [query,setQuery] = useState('');

    // const getInput = (e) => {
    //     setQuery(e.target.value);
    //     console.log(query);
    //   };

    // const clickSearch = () => {
    //     console.log("query before going up to parent:" + query);
    //     props.clickSearch(query);
    // };

    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };
    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-widget mb-50">
            <div className="search-wrap">
                <input type="search" placeholder="Searching..." name="s" className="search-input" ref={inputRef} /*onChange={getInput}*/onKeyPress={onKeyPress} />
                <button type="submit" value="Search" onClick={onClick}><i className="fa fa-search"></i></button>
            </div>
        </div>
    )
});

export default YoutubeVideoSearchWidget;