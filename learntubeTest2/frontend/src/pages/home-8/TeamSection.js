import React from 'react';
import Slider from "react-slick";
import SingleTeam from '../../components/Team/SingleTeam';
import SectionTitle from '../../components/Common/SectionTitle';

// Team Members
import teamImg1 from '../../assets/img/team/1.jpg';
import teamImg2 from '../../assets/img/team/2.jpg';
import teamImg3 from '../../assets/img/team/3.jpg';
import teamImg4 from '../../assets/img/team/4.jpg';
import teamImg5 from '../../assets/img/team/5.jpg';
import teamImg6 from '../../assets/img/team/6.jpg';
import teamImg7 from '../../assets/img/team/7.jpg';

const Team = () => {

    const slilderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        className: "active",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div id="rs-team" className="rs-team style1 style7 gray-bg pt-100 pb-100 md-pt-74 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-50 md-mb-30"
                        subtitleClass="sub-title primary"
                        subtitle="Instructor"
                        titleClass="title mb-0"
                        title="Expert Teachers"
                    />
                    <Slider {...slilderSettings}>
                        <SingleTeam
                            itemClass="team-item"
                            Image={teamImg1}
                            Title="Makhaia Antitni"
                            Designation="President & CEO"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamImg2}
                            Title="Corey Anderson"
                            Designation="CEO & Founder"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamImg3}
                            Title="Masud Rana"
                            Designation="Web Developer"
                            teamURL="masud-rana"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamImg4}
                            Title="Najmul Huda"
                            Designation="Digital Marketer"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamImg5}
                            Title="Rushali Rumi"
                            Designation="Design Lead"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamImg6}
                            Title="Abu Sayed"
                            Designation="App Developer"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamImg7}
                            Title="Sonia Akhter"
                            Designation="Graphic Artist"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;