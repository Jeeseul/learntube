import React from 'react';
import Cta from './CtaSection';
import Blog from './BlogSection';
import Team from './TeamSection';
import About from './AboutSection';
import Brand from './BrandSection';
import Courses from './CourseSection';
import Counter from './CounterSection';
import Service from './ServiceSection';
import Facility from './FacilitySection';
import Testimonial from './TestimonialSection';
import Publications from './PublicationSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerStyleFive from '../../components/Banner/BannerStyleFive';
import NewsletterFour from '../../components/Common/Newsletter/NewsletterFour';

const HomeEightMain = () => {
	return (
		<React.Fragment>

			{/* Banner-start */}
			<BannerStyleFive />
			{/* Banner-start */}

			{/* Service-start */}
			<Service />
			{/* Service-start */}

			{/* About-start */}
			<About />
			{/* About-start */}

			{/* Course-start */}
			<Courses />
			{/* Course-start */}

			{/* Cta-start */}
			<Cta />
			{/* Cta-start */}

			{/* Facility-start */}
			<Facility />
			{/* Facility-start */}

			{/* Counter-start */}
			<Counter />
			{/* Counter-start */}

			{/* Team-start */}
			<Team />
			{/* Team-start */}

			{/* Publication-start */}
			<Publications />
			{/* Publication-start */}

			{/* Brand-start */}
			<Brand />
			{/* Brand-start */}

			{/* Newsletter-area-start */}
			<NewsletterFour 
				sectionClass='rs-newsletter style6 modify bg5 pt-100 pb-100 md-pb-80 md-pt-74'
			/>
			{/* Newsletter-area-end */}

			{/* Testimonial-start */}
			<Testimonial />
			{/* Testimonial-start */}

			{/* Blog-start */}
			<Blog />
			{/* Blog-start */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeEightMain;