import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import bgImg from '../../assets/img/bg/home12/dotted.png';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover', 
    'background-repeat': 'no-repeat', 
    'background-position': 'center',
    'padding': '50px 0 50px'
}

const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 50,
            countTitle: 'Finished Sessions',
            counterPrefix: 'k',
        },
        {
            countNum: 70,
            countTitle: 'Enrolled Learners',
            counterPrefix: 'k+',
        },
        {
            countNum: 120,
            countTitle: 'Online Instructors',
            counterPrefix: '+',
        },
        {
            countNum: 99,
            countTitle: 'Satisfaction Rate',
            counterPrefix: '%',
        }

    ];

    return (
        <div className="rs-counter home12-style pt-80">
            <div className="container">
                {counters &&
                    <div className="row couter-area" style={bgStyle}>
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <h2 className='rs-count'>
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(0,1)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <h2 className='rs-count'>
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(1,2)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 sm-mb-30">
                                <div className="counter-item text-center">
                                    <h2 className='rs-count'>
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(2,3)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6">
                                <div className="counter-item text-center">
                                    <h2 className='rs-count'>
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </h2>
                                    <h4 className="title mb-0">{counter.countTitle}</h4>
                                </div>
                            </div>
                        )).slice(3,4)}
                    </div>
                }
            </div>
        </div>
    )
}
export default Counter;