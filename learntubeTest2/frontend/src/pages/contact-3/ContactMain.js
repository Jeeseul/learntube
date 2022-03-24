import React from 'react';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SectionTitle from '../../components/Common/SectionTitle';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';

import bannerbg from '../../assets/img/breadcrumbs/inner10.jpg';
import contactImg1 from '../../assets/img/contact/con2.png';


const ContactMain = () => {

    return (
        <React.Fragment>

            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Contact Three"
                pageName="Contact"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* Contact Section Start */}
            <div className="rs-contact style3 pt-110 md-pt-80 pb-110 md-pb-80">
                <div className="container">
                    <div className="row gutter-30">
                        <div className="col-lg-5">
                            <ContactInfo
                                boxClass="mb-30"
                                title="Address"
                                iconClass="fa fa-home pt-12"
                                address="228-5 Main Street, Georgia, USA"
                            />
                            <ContactInfo
                                boxClass="mb-30"
                                title="Email Addresss"
                                iconClass="fa fa-envelope-open-o"
                                email="info@educavo.com"
                            />
                            <ContactInfo
                                boxClass=""
                                title="Phone Number"
                                iconClass="fa fa-headphones pt-12"
                                phone="999-999-4444"
                            />
                        </div>
                        <div className="col-lg-7 md-mb-30 md-order-first">
                            <div className="map-canvas">
                                <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="form-part  event-bg mt-60">
                        <div className="row gutter-30 y-bottom">
                            <div className="col-lg-5 md-mb-30 hidden-md">
                                <div className="image-wrap pl-30">
                                    <img src={contactImg1} alt="Contact Image" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact-widget ml--30 md-ml-0">
                                    <SectionTitle
                                        sectionClass="sec-title mb-50 xs-mb-30"
                                        titleClass="title black-color mb-14"
                                        title="Quick Contact"
                                        descClass="desc big"
                                        description={<>Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod tempor <br /> incidi dunt ut dolore.</>}
                                    />

                                    {/* Contact Form */}
                                    <ContactForm
                                        submitBtnClass="btn-send"
                                        btnText="Submit"
                                    />
                                    {/* Contact Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Section End */}
        </React.Fragment>

    );
}


export default ContactMain;