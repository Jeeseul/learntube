import React from 'react';
import SingleProduct from './SingleProduct';
import ProductDetails from './ProductDetails';

import shopImg1 from '../../assets/img/shop/1.jpg';
import shopImg2 from '../../assets/img/shop/2.jpg';
import shopImg3 from '../../assets/img/shop/3.jpg';
import shopImg4 from '../../assets/img/shop/4.jpg';

const ShopDetailsMain = () => {
    return (
        <React.Fragment>
            <div id="rs-single-shop" className="rs-single-shop shop-rp orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="product-details-part">
                        <ProductDetails
                            title="Digital CC Camera"
                            text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            category="Business"
                            image={shopImg1}
                            price="$150.00"
                        />
                    </div>
                </div>
            </div>

            <div className="rs-shop-part orange-style pb-124 md-pb-74">
                <div className="container">
                    <h4 className="title pb-23 md-pb-10">Related products</h4>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 md-mb-44">
                            <SingleProduct
                                title="Droit Sound Mk"
                                image={shopImg4}
                                price="$30.00"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-44">
                            <SingleProduct
                                title="Digital Hand Watch"
                                image={shopImg2}
                                price="$55.00"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-44">
                            <SingleProduct
                                title="Digital Sound Mk"
                                image={shopImg3}
                                price="$50.00"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShopDetailsMain;