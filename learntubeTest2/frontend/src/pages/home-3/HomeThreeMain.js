import React, { Component } from 'react';
import SliderStyleTwo from '../../components/Slider/SliderStyleTwo';
import Service from './ServiceSection';
import About from './AboutSection';
import Degree from './DegreeSection';
import Cta from './CtaSection';
import Events from './EventsSection';
import Brand from '../../components/Common/Brand';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeThreeMain extends Component {

	render() {

		return (
			<div className="home-style2">
				{/* SliderStyleTwo-start */}
				<SliderStyleTwo />
				{/* SliderStyleTwo-start */}

				{/* Service-area-start */}
				<Service />
				{/* Service-area-end */}

				{/* About-area-start */}
				<About />
				{/* About-area-end */}

				{/* Degree-area-start */}
				<Degree />
				{/* Degree-area-end */}

				{/* Cta-area-start */}
				<Cta />
				{/* Cta-area-end */}

				{/* Cta-area-start */}
				<Events />
				{/* Cta-area-end */}

				{/* Brand-area-start */}
				<Brand />
				{/* Brand-area-end */}

				{/* Testimonial-area-start */}
				<Testimonial />
				{/* Testimonial-area-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

				{/* scrolltop-start */}
				<ScrollToTop />
				{/* scrolltop-end */}
			</div>
		);
	}
}

export default HomeThreeMain;