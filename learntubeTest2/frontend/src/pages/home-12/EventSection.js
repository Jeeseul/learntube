import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleEvent from '../../components/Events/SingleEvent';

import eventImg1 from '../../assets/img/event/home12/1.jpg';
import eventImg2 from '../../assets/img/event/home12/2.jpg';
import eventImg3 from '../../assets/img/event/home12/3.jpg';
import eventImg4 from '../../assets/img/event/home12/4.jpg';

import bgImg from '../../assets/img/bg/home12/event-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
}

const Event = () => {

    const sliderSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-event home12style" style={bgStyle}>
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title4 text-center mb-50"
                        subtitleClass="sub-title"
                        subtitle="Join Events"
                        titleClass="title"
                        title="Upcoming Events"
                    />

                    <Slider {...sliderSettings}>
                        <SingleEvent
                            eventClass='event-item home12-style'
                            eventImg={eventImg1}
                            eventTitle="Educational Technology and Mobile Learning"
                            eventLocation='New Margania'
                            eventDate='July 24, 2021'
                            eventSchedule='11:00 AM - 03:00 AM'
                        />
                        <SingleEvent
                            eventClass='event-item home12-style'
                            eventImg={eventImg2}
                            eventTitle="Best Technology  Graduation Ceremony."
                            eventLocation='New Margania'
                            eventDate='May 17, 2021'
                            eventSchedule='11:00 AM - 03:00 AM'
                        />
                        <SingleEvent
                            eventClass='event-item home12-style'
                            eventImg={eventImg3}
                            eventTitle="Educational Technology and Mobile Learning"
                            eventLocation='New Margania'
                            eventDate='July 18, 2021'
                            eventSchedule='11:00 AM - 03:00 AM'
                        />
                        <SingleEvent
                            eventClass='event-item home12-style'
                            eventImg={eventImg4}
                            eventTitle="Best Technology  Graduation Ceremony."
                            eventLocation='New Margania'
                            eventDate='June 24, 2021'
                            eventSchedule='11:00 AM - 03:00 AM'
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Event;