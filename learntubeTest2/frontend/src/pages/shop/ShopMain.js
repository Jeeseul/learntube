import React from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

import shopImg1 from '../../assets/img/shop/1.jpg';
import shopImg2 from '../../assets/img/shop/2.jpg';
import shopImg3 from '../../assets/img/shop/3.jpg';
import shopImg4 from '../../assets/img/shop/4.jpg';
import shopImg5 from '../../assets/img/shop/5.jpg';
import shopImg6 from '../../assets/img/shop/6.jpg';
import shopImg7 from '../../assets/img/shop/7.jpg';
import shopImg8 from '../../assets/img/shop/8.jpg';
import shopImg9 from '../../assets/img/shop/9.jpg';

const ShopMain = () => {
	return (
		<div className="rs-shop-part orange-style pt-100 pb-100 md-pt-80 md-pb-80">
			<div className="container">
				<div className="row rs-vertical-middle shorting mb-24 md-mb-40">
					<div className="col-md-6 col-12">
						<p className="woocommerce-result-count">Showing 1-9 of 12 results</p>
					</div>
					<div className="col-md-6 col-12 sm-mt-20">
						<select className="from-control">
							<option>Default sorting</option>
							<option>Sort by popularity</option>
							<option>Sort by average rating</option>
							<option>Sort by lates</option>
							<option>Sort by price: low to high</option>
							<option>Sort by price: high to low</option>
						</select>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Digital CC Camera"
							image={shopImg1}
							price="$150.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Digital Hand Watch"
							image={shopImg2}
							price="$55.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Digital Sound Mk"
							image={shopImg3}
							price="$50.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Droit Sound Mk"
							image={shopImg4}
							price="$30.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Electronics Device"
							image={shopImg5}
							price="$50.00"
							salePrice="$30.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Head Phone Pro"
							image={shopImg6}
							price="$60.00"
							salePrice="$45.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Portable Sound Mk"
							image={shopImg7}
							price="$150.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Smart Device Pm"
							image={shopImg8}
							price="$75.00"
							salePrice="$50.00"
						/>
					</div>
					<div className="col-lg-4 col-md-6 mb-80 md-mb-40">
						<SingleProduct
							title="Smart Hand Watch"
							image={shopImg9}
							price="$75.00"
							salePrice=""
						/>
					</div>
				</div>
				<div className="pagenav-link orange-color text-center">
					<ul>
						<li>1</li>
						<li><Link to="#">2</Link></li>
						<li><Link to="#"><i className="flaticon-next"></i></Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ShopMain;