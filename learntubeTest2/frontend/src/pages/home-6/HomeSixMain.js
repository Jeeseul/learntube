import React from 'react';
import CTA from './CtaSection';
import Blog from './BlogSection';
import About from './AboutSection';
import Courses from './CourseSection';
import Service from './ServiceSection';
import AboutTwo from './AboutSectionTwo'
import AboutThree from './AboutSectionThree'
import Chooseus from './ChooseusSection';
import Testimonial from './TestimonialSection';
import Brand from '../../components/Common/Brand';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerStyleThree from '../../components/Banner/BannerStyleThree';
import NewsletterThree from '../../components/Common/Newsletter/NewsletterThree';

const HomeSixMain = () => {

	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerStyleThree />
			{/* Banner-area-end */}

			{/* Service-area-start */}
			<Service />
			{/* Service-area-end */}

			{/* About-area-start */}
			<About />
			{/* About-area-end */}

			{/* CTA-area-start */}
			<CTA />
			{/* CTA-area-end */}

			{/* Courses-area-start */}
			<Courses />
			{/* Courses-area-end */}

			{/* Chooseus-area-start */}
			<Chooseus />
			{/* Chooseus-area-end */}

			{/* About-area-start */}
			<AboutTwo />
			{/* About-area-end */}

			{/* brand-area-start */}
			<Brand
				brandClass='rs-partner pb-100 md-pb-80'
			/>
			{/* brand-area-end */}

			{/* Testimonial-area-start */}
			<Testimonial />
			{/* Testimonial-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* Newsletter-area-start */}
			<NewsletterThree />
			{/* Newsletter-area-end */}

			{/* AboutTwo-area-start */}
			<AboutThree />
			{/* AboutTwo-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeSixMain;