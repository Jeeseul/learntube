import React from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import Courses from './CoursesSection';
import Categories from './CategoriesSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerStyleTwo from '../../components/Banner/BannerStyleTwo';

const HomeFourMain = () => {

	return (
		<React.Fragment>
			{/* banner-start */}
			<BannerStyleTwo />
			{/* banner-start */}

			{/* About-area-start */}
			<About />
			{/* About-area-end */}

			{/* Categories-area-start */}
			<Categories />
			{/* Categories-area-end */}

			{/* Course-area-start */}
			<Courses />
			{/* Course-area-end */}

			{/* Testimonial-area-start */}
			<Testimonial />
			{/* Testimonial-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeFourMain;