import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';

// Service Image Icons
import aboutImg from '../../assets/img/about/home7/about.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about style7 pt-100 pb-100 md-pt-30 md-pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 md-mb-30">
                        <div className="img-part">
                            <img src={aboutImg} alt="About Img" />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-50 md-pl-14 col-md-12">
                        <SectionTitle
                            sectionClass="sec-title2"
                            subtitleClass="sub-title"
                            subtitle="About"
                            titleClass="title mb-30"
                            title="Change is The End Result of All True Learning"
                            descClass="desc mb-24"
                            description="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempor incididunt ut labore orem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempor incididunt ut labore incididunt. incididunt ut labore orem ipsum dolor "
                        />
                        <div className="btn-part">
                            <Link className="readon banner-style uppercase" to="/about">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;