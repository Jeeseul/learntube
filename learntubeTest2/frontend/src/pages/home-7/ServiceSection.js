import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceThree from '../../components/Service/SingleServiceEight';

// Service Image Icons
import serviceIcon1 from '../../assets/img/services/home6/icon/1.png';
import serviceIcon2 from '../../assets/img/services/home6/icon/2.png';
import serviceIcon3 from '../../assets/img/services/home6/icon/3.png';
import serviceIcon4 from '../../assets/img/services/home6/icon/4.png';

const Service = () => {

    return (
        <div className="rs-services style6 pt-100 pb-100  md-pt-0 md-pb-70">
            <div className="container">


                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle
                            sectionClass="sec-title3 mb-34"
                            subtitleClass="sub-title"
                            subtitle="Our Provide Services"
                            titleClass="title"
                            title="We Provide Best Services"
                        />
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle
                            sectionClass="sec-title mb-34"
                            descClass="desc desc-text"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscip it 
                            arcu. Quisque aliquam posuere tortor, sit amet convallis nunc sce leris is que in. Lorem ipsum dolor sit amet consectetur"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 md-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg5"
                            serviceImage={serviceIcon1}
                            Title="Warranty Management IT"
                            Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                    <div className="col-lg-3 pt-40 col-md-6 md-pt-0 md-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg5"
                            serviceImage={serviceIcon2}
                            Title="Product Control Services"
                            Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 sm-mb-30">
                        <SingleServiceThree
                            itemClass="services-wrap bg5"
                            serviceImage={serviceIcon3}
                            Title="Quality Control System"
                            Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                    <div className="col-lg-3 pt-40 col-md-6 md-pt-0">
                        <SingleServiceThree
                            itemClass="services-wrap bg5"
                            serviceImage={serviceIcon4}
                            Title="Quality Control System"
                            Desc="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms. "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;