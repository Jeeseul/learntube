import SectionTitle from '../../components/Common/SectionTitle';

// Chooseus Images
import shapeImg1 from '../../assets/img/about/one.png';
import shapeImg2 from '../../assets/img/about/two.png';
import shapeImg3 from '../../assets/img/about/three.png';


const Chooseus = () => {

    return (
        <div className="why-choose-us gray-bg pt-110 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5 md-mb-50">
                        <div className="choose-us-part"> 
                            <SectionTitle
                                sectionClass="sec-title"
                                titleClass="title mb-10"
                                title="Why Choose Us"
                                descClass="mb-34"
                                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
                            />                           
                            <div className="facilities-part">
                                <div className="single-facility">
                                    <div className="icon-part">
                                        <img className="shape-img" src={shapeImg1} alt="Shape Image" />
                                        <i className="flaticon-analysis"></i>
                                    </div>
                                    <div className="text-part">
                                        <h4 className="title">Lower Learning Cost</h4>
                                        <p className="desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                                    </div>
                                </div>
                                <div className="single-facility">
                                    <div className="icon-part">
                                        <img className="shape-img" src={shapeImg2} alt="Shape Image" />
                                        <i className="flaticon-document"></i>
                                    </div>
                                    <div className="text-part">
                                        <h4 className="title">Different Course Variation</h4>
                                        <p className="desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                                    </div>
                                </div>
                                <div className="single-facility">
                                    <div className="icon-part">
                                        <img className="shape-img" src={shapeImg3} alt="Shape Image" />
                                        <i className="flaticon-tax"></i>
                                    </div>
                                    <div className="text-part">
                                        <h4 className="title">Suitable Learning Strategy</h4>
                                        <p className="desc mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="free-course-contact">
                            <span className="mb-30">Request Free Course</span>
                            <div id="form-messages"></div>
                            <form id="contact-form" method="post" action="">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-field">
                                            <input type="text" placeholder="Name*" id="name" name="name" required />
                                        </div>                               
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-field">
                                            <input type="email" placeholder="Email*" id="email" name="email" required />
                                        </div> 
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-field">
                                            <input type="text" placeholder="Phone*" id="phone_number" name="phone_number" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-field">
                                            <input type="text" placeholder="Subject*" id="subject" name="subject" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-field">
                                            <textarea placeholder="Your Message" id="message" name="message" required ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn submit-btn mt-30">
                                    <button className="readon2 upper" type="submit">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chooseus;