
import bgImg from '../../assets/img/bg/home6/bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
}

const Newsletter = () => {

    return (
        <div className="rs-newsletter style6 pt-100 pb-90 md-pt-70 md-pb-60" style={bgStyle}>
            <div className="container">
                <div className="newsletter-wrap">
                    <div className="sec-title3 text-center mb-45 md-mb-30">
                        <div className="sub-title">Subscribe Newsletter </div>
                        <h2 className="title mb-40">Subscribe to Our Newsletter!</h2>
                    </div>
                    <form className="newsletter-form">
                        <input type="email" id="email" name="email" placeholder="Enter Your Email" required="" />
                        <button type="submit">Submit</button> 
                    </form> 
                </div>
            </div>
        </div>
    );
}

export default Newsletter;