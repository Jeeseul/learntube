import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import CategoriesSingleFour from '../../components/Categories/CategoriesSingleFour';


// Categories Image

import CatImg1 from '../../assets/img/categories/home9/1.jpg';
import CatImg2 from '../../assets/img/categories/home9/2.jpg';
import CatImg3 from '../../assets/img/categories/home9/3.jpg';

const Categories = () => {

    return (
        <div className="rs-categories home9-style event-bg pt-100 pb-100 md-pt-70 md-pb-40">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title3 text-center mb-44"
                    subtitleClass="sub-title yellow-color"
                    subtitle="Choose Your Path"
                    titleClass="title black-color"
                    title="Study With Us"
                /> 
                
                <div className="row">
                    <div className="col-md-4 md-mb-40">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            categoriesImg={CatImg1}
                            categoriesIcon='fa fa-paperclip'
                            categoriesTitle="Undergraduate Programs"
                            categoriesDesc="Arts, business, health, science and more, begin your journey with a program educavo."
                            btnText="Join Program"
                        />
                    </div>
                    <div className="col-md-4 md-mb-40">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            categoriesImg={CatImg2}
                            categoriesIcon='fa fa-graduation-cap'
                            categoriesTitle="Graduate Programs"
                            categoriesDesc="Arts, business, health, science and more, begin your journey with a program educavo."
                            btnText="Join Program"
                        />
                    </div>
                    <div className="col-md-4">
                        <CategoriesSingleFour
                            categoriesClass="categories-items"
                            categoriesImg={CatImg3}
                            categoriesIcon='fa fa-laptop'
                            categoriesTitle="Online Courses"
                            categoriesDesc="Arts, business, health, science and more, begin your journey with a program educavo."
                            btnText="Join Program"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;