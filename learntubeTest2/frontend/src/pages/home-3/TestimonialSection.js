import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SingleTestimonialTwo from '../../components/Testimonial/SingleTestimonialTwo';

import donorImg from '../../assets/img/donor/1.jpg';
import avatar1 from '../../assets/img/testimonial/style2/1.jpg';
import avatar2 from '../../assets/img/testimonial/style2/2.jpg';

function Testimonial() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <React.Fragment>
            <div className="rs-testimonial style2 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pr-90 md-pr-14 md-mb-30">
                            <div className="donation-part" data-aos="fade-up">
                                <img
                                    src={donorImg}
                                    alt="Donor"
                                />
                                <h3 className="title mb-10">Donation helps us</h3>
                                <div className="desc mb-38">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minim.</div>
                                <div className="btn-part">
                                    <Link className="readon2 mod" to="/contact">Become a donor</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ml--14 md-ml-0">
                            <SingleTestimonialTwo
                                testiImage={avatar1}
                                name="Mahadi mansura"
                                designation="Head Teacher"
                                description="Education is the passport to the future for tomorrow belongs to those who prepare for it today"
                            />
                            <SingleTestimonialTwo
                                animateDelay="50"
                                itemClass="testi-wrap"
                                testiImage={avatar2}
                                name="Jonathon Lary"
                                designation="Math Teacher"
                                description="Education is the passport to the future for tomorrow belongs to those who prepare for it today"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial