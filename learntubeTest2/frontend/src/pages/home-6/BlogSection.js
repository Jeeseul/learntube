import React from 'react';
import BlogPartThree from '../../components/Blog/HomeBlogSectionThree';
import SectionTitle from '../../components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog style2 pt-110 pb-70 md-pt-70 md-pb-30">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title text-center mb-50 md-mb-30 text-center"
                        bottomSubTitleClass="sub-title mb-0"
                        bottomSubTitle="News & Article's"
                        titleClass="title mb-10"
                        title="Latest News & Article's"
                    />
                    <BlogPartThree />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;