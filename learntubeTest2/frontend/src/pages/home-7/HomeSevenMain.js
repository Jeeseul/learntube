import React from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import Brand from './BrandSection';
import Courses from './CoursesSection';
import Counter from './CounterSection';
import Service from './ServiceSection';
import Newsletter from './NewsletterSection';
import AboutVideo from './AboutVideoSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerStyleSeven from '../../components/Banner/BannerStyleSeven';

const HomeSevenMain = () => {

	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerStyleSeven />
			{/* Banner-area-end */}

			{/* About-area-start */}
			<About />
			{/* About-area-end */}

			{/* Counter-area-start */}
			<Counter />
			{/* Counter-area-end */}

			{/* AboutVideo-area-start */}
			<AboutVideo />
			{/* AboutVideo-area-end */}

			{/* Service-area-start */}
			<Service />
			{/* Service-area-end */}

			{/* Courses-start */}
			<Courses />
			{/* Courses-end */}

			{/* Testimonial-start */}
			<Testimonial />
			{/* Testimonial-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

			{/* Newsletter-start */}
			<Newsletter />
			{/* Newsletter-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeSevenMain;