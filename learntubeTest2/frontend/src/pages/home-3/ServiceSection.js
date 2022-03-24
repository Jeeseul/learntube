import SingleServiceTwo from '../../components/Service/SingleServiceTwo';

// Main Grid Images
import gridImage from '../../assets/img/services/1.jpg';

// Icon Images
import iconImage1 from '../../assets/img/services/icons/1.png';
import iconImage2 from '../../assets/img/services/icons/2.png';
import iconImage3 from '../../assets/img/services/icons/3.png';
import iconImage4 from '../../assets/img/services/icons/1.png';

const Service = () => {

    return (
        <div className="rs-services style1">
            <div className="row no-gutter">
                <div className="col-lg-3 col-md-6">
                    <SingleServiceTwo
                        itemClass="service-item overly1"
                        mainImage={gridImage}
                        iconImage={iconImage1}
                        Title="University Life"
                    />
                </div>
                <div className="col-lg-3 col-md-6">
                    <SingleServiceTwo
                        itemClass="service-item overly2"
                        mainImage={gridImage}
                        iconImage={iconImage2}
                        Title="Graduation"
                    />
                </div>
                <div className="col-lg-3 col-md-6">
                    <SingleServiceTwo
                        itemClass="service-item overly3"
                        mainImage={gridImage}
                        iconImage={iconImage3}
                        Title="Athletics"
                    />
                </div>
                <div className="col-lg-3 col-md-6">
                    <SingleServiceTwo
                        itemClass="service-item overly4"
                        mainImage={gridImage}
                        iconImage={iconImage4}
                        Title="Social"
                    />
                </div>
            </div>
        </div>
    );
}

export default Service;