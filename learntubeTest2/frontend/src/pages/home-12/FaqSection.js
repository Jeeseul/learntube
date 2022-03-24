import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';


const Faq = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-faq-part style1 pt-100 pb-100 md-pt-70 md-pb-70">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 padding-0">
                        <div className="main-part new-style">
                            <div className="title mb-40 md-mb-14">
                                <h2 className="text-part">Frequently Asked Questions</h2>
                            </div>
                            <div className="faq-content">
                                <Accordion className="accordion-style1" preExpanded={'a'}>
                                    <AccordionItem className="accordion-item" uuid="a">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                What are the requirements ?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo ducimus qui blanditiis praesentium ducimus qui. 
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className="accordion-item" uuid="b">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                Does Educavo offer free courses?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo ducimus qui blanditiis praesentium ducimus qui. 
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem className="accordion-item" uuid="c">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                What is the transfer application process?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo ducimus qui blanditiis praesentium ducimus qui. 
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 padding-0">
                        <div className="rs-free-contact">
                            <div className="sec-title3">
                                <h2 className="title white-color">Register Free Courses</h2>
                            </div>
                            <form id="contact-form" method="post" action="">
                                <div className="row">
                                    <div className="col-lg-6 mb-30 col-md-12">
                                        <input className="from-control" type="text" id="name" name="name" placeholder="Name" required />
                                    </div> 
                                    <div className="col-lg-6 mb-30 col-md-12">
                                        <input className="from-control" type="text" id="email" name="email" placeholder="Email" required />
                                    </div>   
                                    <div className="col-lg-6 mb-30 col-md-12">
                                        <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone" required />
                                    </div>   
                                    <div className="col-lg-6 mb-30 col-md-12">
                                        <input className="from-control" type="text" id="subject" name="subject" placeholder="Subject" required />
                                    </div>
                                    
                                    <div className="col-lg-12 mb-32">
                                        <textarea className="from-control" id="message" name="message" placeholder=" Message" required=""></textarea>
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <input className=" readon submit-requset" type="submit" value="Submit-Requset" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;