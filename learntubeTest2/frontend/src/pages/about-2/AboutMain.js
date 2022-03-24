import React from 'react';
import Team from './TeamSection';
import AboutVideo from './VideoSection';
import AboutText from './AboutTextSection';
import AboutCounter from './CounterSection';
import AboutTab from './AboutTabSection';
import Testimonial from './TestimonialSection';
import BrandThree from '../../components/Common/Brand/BrandThree';
import ScrollToTop from '../../components/Common/ScrollTop';


const AboutMain = () => {

    return (
        <React.Fragment>

            {/* AboutText Start */}
            <AboutText />
            {/* AboutText End */}

            {/* AboutVideo Start */}
            <AboutVideo />
            {/* AboutVideo End */}

            {/* AboutCounter Start */}
            <AboutCounter />
            {/* AboutCounter End */}

            {/* AboutTab Start */}
            <AboutTab />
            {/* AboutTab End */}

            {/* Team Section Start */}
            <Team />
            {/* Team Section End */}

            {/* Testimonial Section Start */}
            <Testimonial />
            {/* Testimonial Section End */}

            {/* Brand Section Start */}
            <BrandThree
                brandClass='rs-partner pb-92 md-pb-70'
            />
            {/* Brand Section End */}

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

        </React.Fragment>
    )
}

export default AboutMain;