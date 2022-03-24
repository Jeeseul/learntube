import React from 'react';
import Commenting from '../../components/Widget/Commenting';
import PostContent from '../../components/Widget/PostContent';
import PostNavigation from '../../components/Widget/PostNavigation';

const BlogDetails = () => {

    return (
        <>
            <PostContent />
            <PostNavigation />
            <Commenting />
        </>
    );
}

export default BlogDetails;