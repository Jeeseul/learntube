import React from 'react';
import CategoriesSingle from '../../components/Categories/CategoriesSingle';

// Categories Image
import image1 from '../../assets/img/categories/main-home/1.jpg';
import image2 from '../../assets/img/categories/main-home/2.jpg';
import image3 from '../../assets/img/categories/main-home/3.jpg';
import image4 from '../../assets/img/categories/main-home/4.jpg';
import image5 from '../../assets/img/categories/main-home/5.jpg';
import image6 from '../../assets/img/categories/main-home/6.jpg';

import lineImg from '../../assets/img/line.png';

// Categories Icon
import icon1 from '../../assets/img/categories/main-home/icon/1.png';
import icon2 from '../../assets/img/categories/main-home/icon/2.png';
import icon3 from '../../assets/img/categories/main-home/icon/3.png';
import icon4 from '../../assets/img/categories/main-home/icon/4.png';
import icon5 from '../../assets/img/categories/main-home/icon/5.png';
import icon6 from '../../assets/img/categories/main-home/icon/6.png';

const Categories = () => {

    return (
        <div className="rs-categories home-style14 pt-100 pb-100 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title6 text-center mb-40">
                    <div className="img-part mb-10">
                        <img src={lineImg} alt="" />
                    </div>
                    <h2 className="title">Our Students Says</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image1}
                            title="General Education"
                            quantity="02 Courses"
                            iconImg={icon1}
                            btnText="View More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image2}
                            title="Computer Science"
                            quantity="04 Courses"
                            iconImg={icon2}
                            btnText="View More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image3}
                            title="Civil Engineering"
                            quantity="08 Courses"
                            iconImg={icon3}
                            btnText="View More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image4}
                            title="Artificial Intelligence"
                            quantity="03 Courses"
                            iconImg={icon4}
                            btnText="View More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 sm-mb-30">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image5}
                            title="Business Studies"
                            quantity="12 Courses"
                            iconImg={icon5}
                            btnText="View More"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CategoriesSingle
                            itemClass="categories-items"
                            image={image6}
                            title="Computer Engineering"
                            quantity="05 Courses"
                            iconImg={icon6}
                            btnText="View More"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;