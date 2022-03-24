import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';

//Custom Components

import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import HomeFour from '../pages/home-4';
import HomeFive from '../pages/home-5';
import HomeSix from '../pages/home-6';
import HomeSeven from '../pages/home-7';
import HomeEight from '../pages/home-8';
import HomeNine from '../pages/home-9';
import HomeTen from '../pages/home-10';
import HomeEleven from '../pages/home-11';
import HomeTwelve from '../pages/home-12';
import HomeThirteen from '../pages/home-13';
import HomeFourteen from '../pages/home-14';
import HomeFifteen from '../pages/home-15';
import About from '../pages/about';
import AboutTwo from '../pages/about-2';
import CourseOne from '../pages/course';
import CourseTwo from '../pages/course-2';
import CourseThree from '../pages/course-3';
import CourseFour from '../pages/course-4';
import CourseFive from '../pages/course-5';
import CourseSix from '../pages/course-6';
import CourseSingle from '../pages/course/course-single';
import CourseCategoryPage from '../pages/course-categories';
import Team from '../pages/team';
import TeamTwo from '../pages/team-2';
import TeamSingle from '../pages/team/team-single';
import Event from '../pages/event';
import EventTwo from '../pages/event-2';
import EventThree from '../pages/event-3';
import Gallery from '../pages/gallery';
import GalleryTwo from '../pages/gallery-2';
import GalleryThree from '../pages/gallery-3';
import Shop from '../pages/shop';
import ShopSingle from '../pages/shop/shop-single';
import Cart from '../pages/shop/cart';
import Checkout from '../pages/shop/checkout';
import MyAccount from '../pages/shop/my-account';
import Faq from '../pages/faq';
import Login from '../pages/login';
import Register from '../pages/register';
import Blog from '../pages/blog';
import BlogLeft from '../pages/blog/BlogLeft';
import BlogRight from '../pages/blog/BlogRight';
import SinglePostLeftSidebar from '../pages/blog/single-post-left-sidebar';
import SinglePostRightSidebar from '../pages/blog/single-post-right-sidebar';
import SinglePostFullWidth from '../pages/blog/single-post-full-width';
import Contact from '../pages/contact';
import ContactTwo from '../pages/contact-2';
import ContactThree from '../pages/contact-3';
import ContactFour from '../pages/contact-4';
import Error from '../pages/404';
import LoadTop from '../components/Common/ScrollTop/LoadTop'


const App = () => {
    return (
        <div className='App'>
            <Router>
                <LoadTop />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/home-2" component={HomeTwo} />
                    <Route path="/home-3" component={HomeThree} />
                    <Route path="/home-4" component={HomeFour} />
                    <Route path="/home-5" component={HomeFive} />
                    <Route path="/home-6" component={HomeSix} />
                    <Route path="/home-7" component={HomeSeven} />
                    <Route path="/home-8" component={HomeEight} />
                    <Route path="/home-9" component={HomeNine} />
                    <Route path="/home-10" component={HomeTen} />
                    <Route path="/home-11" component={HomeEleven} />
                    <Route path="/home-12" component={HomeTwelve} />
                    <Route path="/home-13" component={HomeThirteen} />
                    <Route path="/home-14" component={HomeFourteen} />
                    <Route path="/home-15" component={HomeFifteen} />
                    <Route path="/about" component={About} />
                    <Route path="/about-2" component={AboutTwo} />
                    <Route path="/course" exact component={CourseOne} />
                    <Route path="/course-2" component={CourseTwo} />
                    <Route path="/course-3" component={CourseThree} />
                    <Route path="/course-4" component={CourseFour} />
                    <Route path="/course-5" component={CourseFive} />
                    <Route path="/course-6" component={CourseSix} />
                    <Route path="/course/course-single" component={CourseSingle} />
                    <Route path="/course-categories" component={CourseCategoryPage} />
                    <Route path="/team" exact component={Team} />
                    <Route path="/team-2" component={TeamTwo} />
                    <Route path="/team/team-single" component={TeamSingle} />
                    <Route path="/event" component={Event} />
                    <Route path="/event-2" component={EventTwo} />
                    <Route path="/event-3" component={EventThree} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/gallery-2" component={GalleryTwo} />
                    <Route path="/gallery-3" component={GalleryThree} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/shop-single" component={ShopSingle} />
                    <Route path="/shop/cart" component={Cart} />
                    <Route path="/shop/checkout" component={Checkout} />
                    <Route path="/shop/my-account" component={MyAccount} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/blog-left-sidebar" component={BlogLeft} />
                    <Route path="/blog/blog-right-sidebar" component={BlogRight} />
                    <Route path="/blog/single-post-left-sidebar" component={SinglePostLeftSidebar} />
                    <Route path="/blog/single-post-right-sidebar" component={SinglePostRightSidebar} />
                    <Route path="/blog/single-post-full-width" component={SinglePostFullWidth} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/contact-2" component={ContactTwo} />
                    <Route path="/contact-3" component={ContactThree} />
                    <Route path="/contact-4" component={ContactFour} />
                    <Route component={Error} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
