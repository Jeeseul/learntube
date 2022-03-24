import React from 'react';
import MetaWidget from '../../components/Widget/MetaWidget';
import SearchWidget from '../../components/Widget/SearchWidget';
import RecentPostWidget from '../../components/Widget/RecentPostWidget';
import CategoriesWidget from '../../components/Widget/CategoriesWidget';

const BlogSidebar = () => {

    return (
        <>
            <SearchWidget />
            <RecentPostWidget />
            <CategoriesWidget />
            <MetaWidget />
        </>
    );
}

export default BlogSidebar;