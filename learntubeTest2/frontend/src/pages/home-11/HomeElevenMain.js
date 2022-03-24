import React from 'react';
import ComingSoon from '../../components/ComingSoon';
import ScrollToTop from '../../components/Common/ScrollTop';

const HomeElevenMain = () => {		
	return (
		<React.Fragment>

			{/* Coming Soon Start */}
			<ComingSoon />
			{/* Coming Soon End */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeElevenMain;