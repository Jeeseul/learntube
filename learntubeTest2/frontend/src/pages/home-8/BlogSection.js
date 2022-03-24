import React from 'react';
import BlogPartFour from '../../components/Blog/HomeBlogSectionFour';
import SectionTitle from '../../components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog style2 modify2 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">                    
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-50"
                        subtitleClass="sub-title"
                        subtitle="News & Article`s"
                        titleClass="title"
                        title="Latest News & Article`s"
                    />
                    <BlogPartFour />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;