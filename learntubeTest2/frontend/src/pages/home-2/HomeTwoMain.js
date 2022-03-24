import React from 'react';
import CTA from './CtaSection';
import Faq from './FaqSection';
import Blog from './BlogSection';
import Team from './TeamSection';
import About from './AboutSection';
import Courses from './CourseSection';
import Categories from './CategoriesSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerDefault from '../../components/Banner/BannerDefault';


const HomeTwoMain = () => {
	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerDefault />
			{/* Banner-area-end */}

			{/* about-area-start */}
			<About />
			{/* about-area-end */}

			{/* Categories-area-start */}
			<Categories />
			{/* Categories-area-end */}

			{/* Course-area-start */}
			<Courses />
			{/* Course-area-end */}

			{/* call us section start */}
			<CTA />
			{/* call us section end */}

			{/* Faq section start */}
			<Faq />
			{/* Faq section end */}

			{/* Team section start */}
			<Team />
			{/* Team section end */}

			{/* testmonial-area-start */}
			<Testimonial />
			{/* testmonial-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTwoMain;