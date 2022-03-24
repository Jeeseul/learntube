import React from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import CategoriesSingleThree from '../../components/Categories/CategoriesSingleThree';

// Categories Icon
import icon1 from '../../assets/img/subject/icons/1.png';
import icon2 from '../../assets/img/subject/icons/2.png';
import icon3 from '../../assets/img/subject/icons/3.png';
import icon4 from '../../assets/img/subject/icons/4.png';
import icon5 from '../../assets/img/subject/icons/5.png';
import icon6 from '../../assets/img/subject/icons/6.png';

const Categories = () => {

    return (
        <div className="rs-subject style1 pt-94 pb-70 md-pt-64 md-pb-40">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title mb-60 text-center md-mb-30"
                    subtitleClass="sub-title primary"
                    subtitle="Subject Categories"
                    titleClass="title mb-0"
                    title="Our Top Categories"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc1"
                            title="General Education"
                            courseQuantity="02"
                            iconImg={icon1}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc2 text-light"
                            title="Computer Science"
                            courseQuantity="04"
                            iconImg={icon2}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc3"
                            title="Civil Engineering"
                            courseQuantity="08"
                            iconImg={icon3}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc4"
                            title="Artificial Intelligence"
                            courseQuantity="03"
                            iconImg={icon4}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc5"
                            title="Business Studies"
                            courseQuantity="12"
                            iconImg={icon5}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CategoriesSingleThree
                            categoriesClass="subject-wrap bgc6"
                            title="Computer Engineering"
                            courseQuantity="05"
                            iconImg={icon6}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;