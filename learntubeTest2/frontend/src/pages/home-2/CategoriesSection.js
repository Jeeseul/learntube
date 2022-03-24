import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import CategoriesSingleTwo from '../../components/Categories/CategoriesSingleTwo';


// Categories Icon
import icon1 from '../../assets/img/categories/icons/1.png';
import icon2 from '../../assets/img/categories/icons/2.png';
import icon3 from '../../assets/img/categories/icons/3.png';
import icon4 from '../../assets/img/categories/icons/4.png';
import icon5 from '../../assets/img/categories/icons/5.png';
import icon6 from '../../assets/img/categories/icons/6.png';
import icon7 from '../../assets/img/categories/icons/7.png';
import icon8 from '../../assets/img/categories/icons/8.png';
import icon9 from '../../assets/img/categories/icons/9.png';

const Categories = () => {

    return (
        <div className="rs-categories gray-bg style1 pt-94 pb-70 md-pt-64 md-pb-40">
            <div className="container">
                <div className="row y-middle mb-50 md-mb-30">
                    <div className="col-md-6 sm-mb-30">
                        <SectionTitle
                            sectionClass="sec-title"
                            subtitleClass="sub-title primary"
                            subtitle="Subject Categories"
                            titleClass="title mb-0"
                            title="Our Top Categories"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="btn-part text-right sm-text-left">
                            <Link to="course" className="readon">View All Categories</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="General Education"
                            quantity="05"
                            iconImg={icon1}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Computer Science"
                            quantity="05"
                            iconImg={icon2}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Civil Engineering"
                            quantity="05"
                            iconImg={icon3}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Artificial Intelligence"
                            quantity="05"
                            iconImg={icon4}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Business Studies"
                            quantity="05"
                            iconImg={icon5}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Web Development"
                            quantity="05"
                            iconImg={icon6}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Life Course"
                            quantity="08"
                            iconImg={icon7}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Lawyer Course"
                            quantity="01"
                            iconImg={icon8}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleTwo
                            categoriesClass="categories-item"
                            title="Recipes"
                            quantity="07"
                            iconImg={icon9}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;