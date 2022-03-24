import React from 'react';
import Slider from "react-slick";
import SingleTeam from '../../components/Team/SingleTeam';
import SectionTitle from '../../components/Common/SectionTitle';

// Team Members
import teamimg1 from '../../assets/img/team/1.jpg';
import teamimg2 from '../../assets/img/team/2.jpg';
import teamimg3 from '../../assets/img/team/3.jpg';
import teamimg4 from '../../assets/img/team/4.jpg';
import teamimg5 from '../../assets/img/team/5.jpg';
import teamimg6 from '../../assets/img/team/6.jpg';
import teamimg7 from '../../assets/img/team/7.jpg';

const Team = () => {

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i className="flaticon-right-arrow"></i></button>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i className="flaticon-left-arrow"></i></button>
        );
    }

    const slilderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: "active",
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
            <div className="rs-team style1 nav-style2 orange-color pt-94 pb-100 md-pt-64 md-pb-70 gray-bg">
                <div className="container">
                    <div className="row y-middle mb-50 md-mb-30">
                        <div className="col-md-6 sm-mb-30">
                            <SectionTitle
                                sectionClass="sec-title"
                                subtitleClass="sub-title orange"
                                subtitle="Instrructor"
                                titleClass="title mb-0"
                                title="Expert Teachers"
                            />
                        </div>
                    </div>
                    <Slider {...slilderSettings}>
                        <SingleTeam
                            itemClass="team-item"
                            Image={teamimg1}
                            Title="Makhaia Antitni"
                            Designation="President & CEO"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamimg2}
                            Title="Corey Anderson"
                            Designation="CEO & Founder"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamimg3}
                            Title="Masud Rana"
                            Designation="Web Developer"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamimg4}
                            Title="Najmul Huda"
                            Designation="Digital Marketer"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamimg5}
                            Title="Rushali Rumi"
                            Designation="Design Lead"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamimg6}
                            Title="Abu Sayed"
                            Designation="App Developer"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={teamimg7}
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