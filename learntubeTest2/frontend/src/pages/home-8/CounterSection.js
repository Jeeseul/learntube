import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            className: 'rs-count purple-color',
            countNum: 958,
            countTitle: 'Finished Sessions',
        },
        {
            className: 'rs-count blue-color',
            countNum: 523,
            countTitle: 'Enrolled Learners',
            counterPrefix: '+',
        },
        {
            className: 'rs-count pink-color',
            countNum: 120,
            countTitle: 'Online Instructors',
            counterPrefix: '+',
        },
        {
            className: 'rs-count orange-color',
            countNum: 100,
            countTitle: 'Satisfaction Rate',
            counterPrefix: '%',
        }

    ];

    return (
        <div className="rs-counter style7 pb-100 md-pb-70">
            <div className="container">
                {counters &&
                    <div className="row couter-area">
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <div className={counter.className}>2.
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </div>
                                    <h3 className="title mb-0">{counter.countTitle}</h3>
                                </div>
                            </div>
                        )).slice(0,1)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 md-mb-30">
                                <div className="counter-item text-center">
                                    <div className={counter.className}>4.
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </div>
                                    <h3 className="title mb-0">{counter.countTitle}</h3>
                                </div>
                            </div>
                        )).slice(1,2)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6 sm-mb-30">
                                <div className="counter-item text-center">
                                    <div className={counter.className}>
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </div>
                                    <h3 className="title mb-0">{counter.countTitle}</h3>
                                </div>
                            </div>
                        )).slice(2,3)}
                        {counters.map((counter, num) => (
                            <div key={num} className="col-lg-3 col-md-6">
                                <div className="counter-item text-center">
                                    <div className={counter.className}>
                                        <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        {counter.counterPrefix}
                                    </div>
                                    <h3 className="title mb-0">{counter.countTitle}</h3>
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