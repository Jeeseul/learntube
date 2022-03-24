import React from 'react';
import RecentPost from '../../components/Widget/RecentPost';
import MetaWidget from '../../components/Widget/MetaWidget';
import SearchWidget from '../../components/Widget/SearchWidget';
import CategoriesWidget from '../../components/Widget/CategoriesWidget';

const SinglePostSidebar = () => {

    return (
        <>
            <SearchWidget />
            <RecentPost />
            <CategoriesWidget />
            <MetaWidget />
        </>
    );
}

export default SinglePostSidebar;