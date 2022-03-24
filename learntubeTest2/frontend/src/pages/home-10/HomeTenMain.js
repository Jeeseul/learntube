import React from 'react';
import CTA from './CtaSection';
import Blog from './BlogSection';
import About from './AboutSection';
import Videos from './VideoSection';
import Feature from './FeatureSection';
import Categories from './CategoriesSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BannerStyleSix from '../../components/Banner/BannerStyleSix';


const HomeTenMain = () => {
	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerStyleSix />
			{/* Banner-area-end */}

			{/* Feature-area-start */}
			<Feature />
			{/* Feature-area-end */}

			{/* about-area-start */}
			<About />
			{/* about-area-end */}

			{/* Categories-area-start */}
			<Categories />
			{/* Categories-area-end */}

			{/* Video-area-start */}
			<Videos />
			{/* Video-area-end */}

			{/* call us section start */}
			<CTA />
			{/* call us section end */}

			{/* testmonial-area-start */}
			<Testimonial />
			{/* testmonial-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop 
				scrollClassName = 'scrollup yellow-color'
			/>
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTenMain;