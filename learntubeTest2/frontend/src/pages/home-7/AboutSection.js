import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';

// About Image
import dots1 from '../../assets/img/about/home7/line.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about style6 pt-90 pb-100 md-pt-60 md-pb-70">
            <div className="container">
                <div className="row md-pl-pr align-items-center">
                    <div className="col-lg-4">
                        <SectionTitle
                            sectionClass="sec-title3 mb-26"
                            subtitleClass="sub-title"
                            subtitle="About Our Remort Traning"
                            titleClass=" extra-bold"
                            title="Develope Your Skills Shine Your Life"
                            descClass="desc desc2"
                        />
                        <div className="btn-part">
                            <Link className="readon2 orange uppercase" to="/about">Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-0 pr-20 md-mb-40 md-mt-40">
                        <div className="desc mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscip it arcu. Quisque aliquam posuere tortor, sit amet convallis nunc sce leris is que in. Lorem ipsum dolor sit amet consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus
                        </div>
                        <img
                            src={dots1}
                            alt="dot img 1"
                        />
                    </div>
                    <div className="col-lg-4 pl-20 pr-0 md-mb-10">
                        <div className="desc mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscip it arcu. Quisque aliquam posuere tortor, sit amet convallis nunc sce leris is que in. Lorem ipsum dolor sit amet consectetur adipiscing elitorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus</div>
                        <img
                            src={dots1}
                            alt="dot img 2"
                        />
                    </div>
                </div>
           
            </div>
        </div>
    );
}

export default About;