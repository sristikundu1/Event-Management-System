import ServiceCard from "./ServiceCard";
import PropTypes from 'prop-types';

const Services = ({services}) => {
    return (
        <div className="py-12">
            <h2 className="font-bold text-3xl text-center mb-16 text-[#285430]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 gap-3 mx-16 ">
                {
                    services.map(service => <ServiceCard key={service.id} service ={service}></ServiceCard>)
                }
            </div>
           



        </div>
    );
};

export default Services;
Services.propTypes = {
    services: PropTypes.object

}