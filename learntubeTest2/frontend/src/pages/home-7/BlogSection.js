import React from 'react';
import BlogPartTwo from '../../components/Blog/HomeBlogSectionTwo';
import SectionTitle from '../../components/Common/SectionTitle';

import rightShapeImg from '../../assets/img/shape/radius-circle-shape.png';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog style2 modify2 pb-100 pt-100 md-pt-70 md-pb-70">
                <div className="container relative">
                    <div className="right-top-shape">
                        <img
                            src={rightShapeImg}
                            alt=""
                        />
                    </div>
                    <SectionTitle
                        sectionClass="sec-title3 mb-60 text-center md-mb-40"
                        subtitleClass="sub-title primary"
                        subtitle="News & Blog"
                        titleClass="title mb-0"
                        title="Latest News & Blog Post"
                    />
                    <BlogPartTwo />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;