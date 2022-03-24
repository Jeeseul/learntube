import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Image
import aboutImg from '../../assets/img/about/history.png';
import tabImg1 from '../../assets/img/about/tab1.jpg';
import tabImg2 from '../../assets/img/about/tab2.jpg';
import tabImg3 from '../../assets/img/about/tab3.jpg';

const AboutTab = () => {

    let tab1 = "History",
        tab2 = "Mission & Vission",
        tab3 = "Administration"
    const tabStyle = 'nav nav-tabs histort-part';

    return (
        <div className="rs-about style1 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <Tabs>
                    <div className="row align-items-center">
                        <div className="col-lg-6 padding-0 md-pl-14 md-pr-14 md-mb-30 relative">
                            <div className="img-part">
                                <img 
                                    src={aboutImg}
                                    alt="About Image" 
                                />
                            </div>
                            <TabList className={tabStyle}>
                                <Tab>
                                    <button><span className="icon-part"><i className="flaticon-banknote"></i></span>{tab1}</button>
                                </Tab>
                                <Tab>
                                    <button><span className="icon-part"><i className="flaticon-flower"></i></span>{tab2}</button>
                                </Tab>
                                <Tab>
                                    <button><span className="icon-part"><i className="flaticon-analysis"></i></span>{tab3}</button>
                                </Tab>
                            </TabList>
                        </div>
                        <div className="col-lg-6 pl-120 md-pl-14">
                            <TabPanel>
                                <div className="about-history">
                                    <div className="sec-title mb-24">
                                        <h2 className="title">Educavo History</h2>
                                        <div className="desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blan ditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, sim ilique sunt in culpa.</div>
                                    </div>
                                    <div className="tab-img">
                                        <img 
                                            src={tabImg1}
                                            alt="Tab Image" 
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="about-mission">
                                    <div className="sec-title mb-24">
                                        <h2 className="title">Educavo Mission</h2>
                                        <div className="desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blan ditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, sim ilique sunt in culpa.</div>
                                    </div>
                                    <div className="tab-img">
                                        <img 
                                            src={tabImg2}
                                            alt="Tab Image" 
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="about-admin">
                                    <div className="sec-title mb-24">
                                        <h2 className="title">Educavo Administration</h2>
                                        <div className="desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blan ditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, sim ilique sunt in culpa.</div>
                                    </div>
                                    <div className="tab-img">
                                        <img 
                                            src={tabImg3}
                                            alt="Tab Image" 
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default AboutTab;