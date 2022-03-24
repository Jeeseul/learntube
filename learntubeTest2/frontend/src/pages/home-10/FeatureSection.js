import React from 'react';

import SingleFeature from '../../components/Service/SingleFeature'

import featureIcon1 from '../../assets/img/features/style2/1.png';
import featureIcon2 from '../../assets/img/features/style2/2.png';
import featureIcon3 from '../../assets/img/features/style2/3.png';
import featureIcon4 from '../../assets/img/features/style2/4.png';

const Feature = () => {

    return (
        <div className="rs-features style2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 md-mb-30">
                        <SingleFeature
                            featureClass='rs-iconbox-area'
                            featureIcon={featureIcon1}
                            featureTitle='Future Students'
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 md-mb-30">
                        <SingleFeature
                            featureClass='rs-iconbox-area'
                            featureIcon={featureIcon2}
                            featureTitle='World Students'
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 sm-mb-30">
                        <SingleFeature
                            featureClass='rs-iconbox-area'
                            featureIcon={featureIcon3}
                            featureTitle='Current Students'
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <SingleFeature
                            featureClass='rs-iconbox-area'
                            featureIcon={featureIcon4}
                            featureTitle='Alumni & Donors'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;