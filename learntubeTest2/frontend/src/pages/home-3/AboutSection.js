import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import SectionTitle from '../../components/Common/SectionTitle';

import gridImg1 from '../../assets/img/about/style2/grid1.jpg'
import gridImg2 from '../../assets/img/about/style2/grid2.jpg'

function About() {
    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 2,
            countTitle: 'Students',
            counterPrefix: 'k+',
        },
        {
            countNum: 50,
            countTitle: 'Average CGPA',
            counterPrefix: '',
        },
        {
            countNum: 95,
            countTitle: 'Graduates',
            counterPrefix: '%',
        },

    ];
    return (
        <div id="rs-about" className="rs-about style2 pt-94 pb-100 md-pt-64 md-pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pr-64 md-pr-14 md-mb-50">
                        <div className="about-intro">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-40"
                                subtitleClass="sub-title primary"
                                subtitle="About Educavo"
                                titleClass="title mb-22 white-color"
                                title="Welcome to Educavo University"
                                descClass="desc big white-color"
                                description="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minim."
                            />
                            {/* Section Title End */}
                            <div className="btn-part">
                                <Link to="/about" className="readon2">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 ml--40 md-ml-0">
                        {counters &&
                            <div className="row rs-counter couter-area mb-40">
                                {counters.map((counter, num) => (
                                    <div key={num} className="col-md-4">
                                        <div className="counter-item one">
                                            <h2 className="number rs-count">
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd={() => setState(false)} />
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                                <span className="counter-prefix">{counter.counterPrefix}</span>
                                            </h2>
                                            <h4 className="title mb-0">{counter.countTitle}</h4>
                                        </div>
                                    </div>
                                )).slice(0, 1)}
                                {counters.map((counter, num) => (
                                    <div key={num} className="col-md-4">
                                        <div className="counter-item two">
                                            <h2 className="number rs-count">3.
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd={() => setState(false)} />
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                                <span className="counter-prefix">{counter.counterPrefix}</span>
                                            </h2>
                                            <h4 className="title mb-0">{counter.countTitle}</h4>
                                        </div>
                                    </div>
                                )).slice(1, 2)}
                                {counters.map((counter, num) => (
                                    <div key={num} className="col-md-4">
                                        <div className="counter-item three">
                                            <h2 className="number rs-count">
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd={() => setState(false)} />
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                                <span className="counter-prefix">{counter.counterPrefix}</span>
                                            </h2>
                                            <h4 className="title mb-0">{counter.countTitle}</h4>
                                        </div>
                                    </div>
                                )).slice(2, 3)}
                            </div>
                        }
                        <div className="row grid-area">
                            <div className="col-md-6 sm-mb-30">
                                <div className="image-grid">
                                    <img
                                        src={gridImg1}
                                        alt="grid img"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image-grid">
                                    <img
                                        src={gridImg2}
                                        alt="grid img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;