import React from 'react';
import Tilty from 'react-tilty';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SectionTitle from '../../components/Common/SectionTitle';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';

import bannerbg from '../../assets/img/breadcrumbs/inner12.jpg';
import contactImg1 from '../../assets/img/contact/contact-img.png';


const ContactMain = () => {

    return (
        <React.Fragment>

            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Contact Two"
                pageName="Contact"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* Contact Section Start */}
            <div className="rs-contact style2 pt-110 md-pt-80 pb-110 md-pb-80">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-30 hidden-md">
                            <div className="image-wrap">
                                <Tilty
                                    reverse="false"
                                    perspective="10000"
                                    speed="3000"
                                >
                                    <img src={contactImg1} alt="Contact Image" />
                                </Tilty>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-48 md-pl-14 md-pr-14">
                            <div className="map-canvas">
                                <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="contact-box pt-90 pb-90 md-pb-80 md-pt-80">
                        <div className="row gutter-35">
                            <div className="col-lg-4 md-mb-30">
                                <div className="box-wraper">
                                    <h4 className="box-title">General</h4>
                                    <ContactInfo
                                        boxClass="mb-30"
                                        title="Email Addresss"
                                        iconClass="fa fa-envelope-o"
                                        email="info@educavo.com"
                                    />
                                    <ContactInfo
                                        boxClass="mb-30"
                                        title="Phone Number"
                                        iconClass="fa fa-headphones"
                                        phone="(+088)589-8742"
                                    />
                                    <ContactInfo
                                        boxClass=""
                                        title="Address"
                                        iconClass="fa fa-map-signs"
                                        address="New Jesrsy, 1201, USA"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 md-mb-30">
                                <div className="box-wraper">
                                    <h4 className="box-title">Admissions</h4>
                                    <ContactInfo
                                        boxClass="mb-30"
                                        title="Email Addresss"
                                        iconClass="fa fa-envelope-o"
                                        email="admission@educavo.com"
                                    />
                                    <ContactInfo
                                        boxClass="mb-30"
                                        title="Phone Number 1"
                                        iconClass="fa fa-headphones"
                                        phone="(+088)589-8745"
                                    />
                                    <ContactInfo
                                        boxClass=""
                                        title="Phone Number 2"
                                        iconClass="fa fa-headphones"
                                        phone="(+088)589-8746 "
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box-wraper">
                                    <h4 className="box-title">Emergency</h4>
                                    <ContactInfo
                                        boxClass="mb-30"
                                        title="Email Addresss"
                                        iconClass="fa fa-envelope-o"
                                        email="emergency@educavo.com"
                                    />
                                    <ContactInfo
                                        boxClass="mb-30"
                                        title="Phone Number 1"
                                        iconClass="fa fa-headphones"
                                        phone="(+088)589-8749"
                                    />
                                    <ContactInfo
                                        boxClass=""
                                        title="Phone Number 2"
                                        iconClass="fa fa-headphones"
                                        phone="(+088)589-8750"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-widget event-bg">
                        <SectionTitle
                            sectionClass="sec-title text-center mb-50"
                            titleClass="title black-color mb-14"
                            title="Quick Contact"
                            descClass="desc big"
                            description={<>Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod <br /> tempor incidi dunt ut dolore.</>}
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
            {/* Contact Section End */}
        </React.Fragment>

    );
}


export default ContactMain;