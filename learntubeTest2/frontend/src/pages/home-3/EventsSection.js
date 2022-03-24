import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SectionTitle from '../../components/Common/SectionTitle';
import EventsShort from '../../components/Events/EventsShort';

// Images
import eventImage from '../../assets/img/event/single.jpg'

const Events = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="rs-latest-events style1 bg-wrap pt-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pr-64 pt-24 md-pt-0 md-pr-14 md-mb-30">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-42 md-mb-30 zIndex1"
                            subtitleClass="sub-title primary"
                            subtitle="Latest Events"
                            titleClass="title mb-0"
                            title="Educavo Events"
                        />
                        {/* Section Title End */}
                        <div className="single-img">
                            <img
                                src={eventImage}
                                alt="Event Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-wrap">
                            <EventsShort
                                eventsClass="events-short mb-30"
                                dateboxClass="date-part bgc1"
                                month="June" date="20"
                                cat1="Math" cat2="English"
                                title="Educational Technology and Mobile Accessories Learning"
                            />
                            <EventsShort
                                animateDelay="50"
                                eventsClass="events-short mb-30"
                                dateboxClass="date-part bgc2"
                                month="June" date="21"
                                cat1="Chemistry" cat2="Finance"
                                title="Educational Technology and Mobile Accessories Learning"
                            />
                            <EventsShort
                                animateDelay="100"
                                eventsClass="events-short"
                                dateboxClass="date-part bgc3"
                                month="June" date="22"
                                cat1="Physics" cat2="Biology"
                                title="Educational Technology and Mobile Accessories Learning"
                            />
                            <div className="btn-part mt-54 md-mt-24">
                                <Link to="/event/style-1">View All Events</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;