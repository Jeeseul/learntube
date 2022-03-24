
import SingleServiceThree from '../../components/Service/SingleServiceThree';

import serviceImg1 from '../../assets/img/services/home7/bg/1.png';
import serviceImg2 from '../../assets/img/services/home7/bg/2.png';
import serviceImg3 from '../../assets/img/services/home7/bg/3.png';
import serviceImg4 from '../../assets/img/services/home7/bg/4.png';

import serviceIcon1 from '../../assets/img/services/home7/icon/1.png';
import serviceIcon2 from '../../assets/img/services/home7/icon/2.png';
import serviceIcon3 from '../../assets/img/services/home7/icon/3.png';
import serviceIcon4 from '../../assets/img/services/home7/icon/4.png';

const Service = () => {

    return (
        <div className="rs-services style7 pt-100 md-pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 md-mb-30">
                        <SingleServiceThree
                            serviceImg={serviceImg1}
                            serviceIcon={serviceIcon1}
                            Title='Kindergarten'
                            Desc='Lorem ipsum dolor sit amet,consectetur adipisic ing elit, sed eius .incididunt'
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 md-mb-30">
                        <SingleServiceThree
                            serviceImg={serviceImg2}
                            serviceIcon={serviceIcon2}
                            Title='Primary School'
                            Desc='Lorem ipsum dolor sit amet,consectetur adipisic ing elit, sed eius .incididunt'
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 md-mb-30">
                        <SingleServiceThree
                            serviceImg={serviceImg3}
                            serviceIcon={serviceIcon3}
                            Title='High School'
                            Desc='Lorem ipsum dolor sit amet,consectetur adipisic ing elit, sed eius .incididunt'
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <SingleServiceThree
                            serviceImg={serviceImg4}
                            serviceIcon={serviceIcon4}
                            Title='College/University'
                            Desc='Lorem ipsum dolor sit amet,consectetur adipisic ing elit, sed eius .incididunt'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;