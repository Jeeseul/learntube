import React from 'react';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SectionTitle from '../../components/Common/SectionTitle';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';

import bannerbg from '../../assets/img/breadcrumbs/inner7.jpg';


const ContactMain = () => {

    return (
        <React.Fragment>

            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Contact Four"
                pageName="Contact"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* Contact Section Start */}
            <div className="rs-contact style4 pt-110 md-pt-80 pb-110 md-pb-80">
                <div className="container">
                    <div className="row gutter-30">
                        <div className="col-md-4 sm-mb-30">
                            <ContactInfo
                                boxClass=""
                                title="Address"
                                iconClass="fa fa-map-o pt-16"
                                address="228-5 Main Street, Georgia, USA"
                            />
                        </div>
                        <div className="col-md-4 sm-mb-30">
                            <ContactInfo
                                boxClass=""
                                title="Email Addresss"
                                iconClass="fa fa-envelope-open-o"
                                email="info@educavo.com"
                            />
                        </div>
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass=""
                                title="Phone Number"
                                iconClass="fa fa-headphones pt-16"
                                phone="999-999-4444"
                            />
                        </div>
                    </div>

                    <div className="form-part mt-60">
                        <div className="row md-pl-pr">
                            <div className="col-lg-6 pr-40 md-mb-30">
                                <div className="map-canvas">
                                    <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 pl-0">
                                <div className="contact-widget event-bg">
                                    <SectionTitle
                                        sectionClass="sec-title mb-50 xs-mb-30"
                                        titleClass="title black-color mb-14"
                                        title="Quick Contact"
                                        descClass="desc big"
                                        description={<>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> eius to mod tempor incidi dunt ut dolore.</>}
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