import React from 'react';
import BlogPartTwo from '../../components/Blog/HomeBlogSectionTwo';
import SectionTitle from '../../components/Common/SectionTitle';
import NewsletterTwo from '../../components/Common/Newsletter/NewsletterTwo';

const Blog = () => {
    return (
        <React.Fragment>
            <div className="gray-bg">
                <div id="rs-blog" className="rs-blog style2 pt-94 pb-100 md-pt-64 md-pb-70">
                    <div className="container">
                        <SectionTitle
                            sectionClass="sec-title mb-60 md-mb-30 text-center"
                            subtitleClass="sub-title primary"
                            subtitle="News Update"
                            titleClass="title mb-0"
                            title="Latest News & events"
                        />
                        <BlogPartTwo />
                    </div>
                </div>
                <NewsletterTwo />
            </div>
        </React.Fragment>
    );

}

export default Blog;