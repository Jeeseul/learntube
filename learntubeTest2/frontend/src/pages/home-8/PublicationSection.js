import React from 'react';
import Slider from "react-slick";
import SingleProduct from '../shop/SingleProduct';
import SectionTitle from '../../components/Common/SectionTitle';

import shopImg1 from '../../assets/img/publication/1.jpg';
import shopImg2 from '../../assets/img/publication/2.jpg';
import shopImg3 from '../../assets/img/publication/3.jpg';
import shopImg4 from '../../assets/img/publication/4.jpg';

const Publications = () => {

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
            <div className="rs-publication pt-100 pb-100 md-pt-80 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-50 md-mb-30"
                        subtitleClass="sub-title primary"
                        subtitle="Our Products"
                        titleClass="title mb-0"
                        title="Our Publications"
                    />
                    <Slider {...slilderSettings}>
                        <SingleProduct 
                            title = "Droit Sound Mk"
                            image = {shopImg1}
                            price = "$30.00"
                        />
                        <SingleProduct 
                            title = "Digital Hand Watch"
                            image = {shopImg2}
                            price = "$55.00"
                        />
                        <SingleProduct 
                            title = "Digital Sound Mk"
                            image = {shopImg3}
                            price = "$50.00"
                        />
                        <SingleProduct 
                            title = "Digital Hand Watch"
                            image = {shopImg4}
                            price = "$75.00"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Publications;