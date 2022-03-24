import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import SectionTitle from '../../components/Common/SectionTitle';

// About Image
import countBg1 from '../../assets/img/counter/bg1.png';
import countBg2 from '../../assets/img/counter/bg2.png';
import countBg3 from '../../assets/img/counter/bg3.png';

const AboutCounter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 2,
            countTitle: 'Students',
            counterPrefix: 'k+',
            countImg: countBg1
        },
        {
            countNum: 50,
            countTitle: 'Average CGPA',
            counterPrefix: '',
            countImg: countBg2
        },
        {
            countNum: 95,
            countTitle: 'Graduates',
            counterPrefix: '%',
            countImg: countBg3
        }

    ];

    return (
        <div className="rs-counter style2-about pt-100 md-pt-70">
            <div className="container">
                {counters &&
                    <div className="row couter-area">
                        {counters.map((counter, num) => (
                            <div key={num} className="col-md-4 sm-mb-30">
                                <div className="counter-item text-center">
                                    <div className="counter-bg">
                                        <img
                                            src={counter.countImg}
                                            alt="Counter Image"
                                        />
                                    </div>
                                    <div className="counter-text">
                                        <h2 className="rs-count">
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
                            </div>
                        )).slice(0, 1)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-md-4 sm-mb-30">
                                <div className="counter-item text-center">
                                    <div className="counter-bg">
                                        <img
                                            src={counter.countImg}
                                            alt="Counter Image"
                                        />
                                    </div>
                                    <div className="counter-text">
                                        <h2 className="rs-count">
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
                            </div>
                        )).slice(1, 2)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-md-4">
                                <div className="counter-item text-center">
                                    <div className="counter-bg">
                                        <img
                                            src={counter.countImg}
                                            alt="Counter Image"
                                        />
                                    </div>
                                    <div className="counter-text">
                                        <h2 className="rs-count">
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
                            </div>
                        )).slice(2, 3)}
                    </div>
                }
            </div>
        </div>
    );
}

export default AboutCounter;