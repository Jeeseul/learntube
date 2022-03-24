import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { title, image, price, salePrice } = props;
    return (
        <React.Fragment>
            <div className="product-list">
                <div className="image-product">
                    <Link to="/shop/shop-single">
                        <img src={image} alt="blog image" />
                    </Link>
                    <div className="overlay">
                        <Link to="/shop/shop-single">
                            <i className="flaticon-basket"></i>
                        </Link>
                    </div>
                    {salePrice ? <span className="onsale">sale!</span> : ''}

                </div>
                <div className="content-desc text-center">
                    <h2 className="product-title">
                        <Link to="/shop/shop-single">
                            {title}
                        </Link>
                    </h2>
                    {salePrice ? <div><span className="prev-price">{price}</span><span className="price">{salePrice}</span></div> : <span className="price">{price}</span>}
                </div>
            </div>
        </React.Fragment>

    )
}

export default SingleProduct