import React from 'react';
import BannerStyleFour from '../../components/Banner/BannerStyleFour';
import About from './AboutSection';
import Courses from './CoursesSection';
import AboutWork from './AboutWorkSection';
import Counter from './CounterSection';
import Team from './TeamSection';
import Cta from './CtaSection';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import ScrollToTop from '../../components/Common/ScrollTop';

const HomeFiveMain = () => {
	return (
		<React.Fragment>

			{/* BannerStyleFour-Start */}
			<BannerStyleFour />
			{/* BannerStyleFour-End */}

			{/* About-Start */}
			<About />
			{/* About-End */}

			{/* Courses-Start */}
			<Courses />
			{/* Courses-End */}

			{/* About-Work-Start */}
			<AboutWork />
			{/* About-Work-End */}

			{/* Counter-Start */}
			<Counter />
			{/* Counter-End */}

			{/* Team-Start */}
			<Team />
			{/* Team-End */}

			{/* Cta-Start */}
			<Cta
				ctaClass="rs-cta"
				ctaTitle="Admission Open for 2020"
				ctaDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis."
				btnText="Apply Now"
			/>
			{/* Cta-End */}

			{/* Testimonial-Start */}
			<Testimonial />
			{/* Testimonial-End */}

			{/* Blog-Start */}
			<Blog />
			{/* Blog-End */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeFiveMain;