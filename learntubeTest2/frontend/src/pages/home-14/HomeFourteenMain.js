import React from 'react';
import CTATwo from './CtaTwo';
import CTA from './CtaSection';
import Courses from './CourseSection';
import Categories from './CategoriesSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import BrandFive from '../../components/Common/Brand/BrandFive';
import BannerStyleNine from '../../components/Banner/BannerStyleNine';


const HomeFourteenMain = () => {
	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerStyleNine />
			{/* Banner-area-end */}

			{/* Course-area-start */}
			<Courses />
			{/* Course-area-end */}

			{/* CTA-area-start */}
			<CTA />
			{/* CTA-area-end */}

			{/* Categories-area-start */}
			<Categories />
			{/* Categories-area-end */}

			{/* CTA-area-start */}
			<CTATwo />
			{/* CTA-area-end */}

			{/* testmonial-area-start */}
			<Testimonial />
			{/* testmonial-area-end */}		

			{/* Brand-area-start */}
			<BrandFive />
			{/* Brand-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop 
				scrollClassName = 'scrollup orange-color'
			/>
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeFourteenMain;