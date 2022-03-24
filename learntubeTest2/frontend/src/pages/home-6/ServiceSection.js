
import SingleService from '../../components/Service/SingleService';


const Service = () => {

    return (
        <div className="rs-services style2 pt-100 md-pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 md-mb-30">
                        <SingleService
                            Icon='flaticon-analysis'
                            Title='Online Coaching'
                            Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'
                        />
                    </div>
                    <div className="col-lg-4 md-mb-30">
                        <SingleService
                            Icon='flaticon-document'
                            Title='Coach Books'
                            Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'
                        />
                    </div>
                    <div className="col-lg-4 md-mb-30">
                        <SingleService
                            Icon='flaticon-tax'
                            Title='Coach Events'
                            Desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;