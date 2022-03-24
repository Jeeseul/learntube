import React from 'react';
import Faq from './FaqSection';
import Blog from './BlogSection';
import Event from './EventSection';
import Courses from './CourseSection';
import Counter from './CounterSection';
import Service from './ServiceSection';
import Download from './DownloadSection';
import Testimonial from './TestimonialSection';
import WhyChooseUs from './WhyChooseUsSection';
import BrandFour from '../../components/Common/Brand/BrandFour';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerStyleEight from '../../components/Banner/BannerStyleEight';


const HomeTwelveMain = () => {
	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerStyleEight />
			{/* Banner-area-end */}

			{/* Brand-area-start */}
			<BrandFour />
			{/* Brand-area-end */}

			{/* Service-area-start */}
			<Service />
			{/* Service-area-end */}

			{/* Course-area-start */}
			<Courses />
			{/* Course-area-end */}

			{/* WhyChooseUs section start */}
			<WhyChooseUs />
			{/* WhyChooseUs section end */}

			{/* Counter section start */}
			<Counter />
			{/* Counter section end */}

			{/* Faq section start */}
			<Faq />
			{/* Faq section end */}

			{/* testmonial-area-start */}
			<Testimonial />
			{/* testmonial-area-end */}

			{/* Download-area-start */}
			<Download />
			{/* Download-area-end */}

			{/* Event-area-start */}
			<Event />
			{/* Event-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop 
				scrollClassName = 'scrollup green-color'
			/>
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTwelveMain;