import PropTypes from 'prop-types';

const EventDetailsCard = ({ event }) => {
    const { image, service_name, heading, service_details,conclution } = event || {}
    return (
        <div>
            <img className="w-full border rounded-lg h-[600px] ml-6" src= {image} alt= {image} />
            <h2 className="font-bold text-4xl text-center text-[#6C3428] mt-6">{service_name}</h2>
            <div className='font-medium text-base m-9'>
            <p className='text-[#557A46]'>{heading}</p>
            <p className='text-[#557A46]'>{service_details}</p>
            <p className='text-[#557A46]'>{conclution}</p>
            </div>
            

           
        </div>
    );
};

export default EventDetailsCard;

EventDetailsCard.propTypes = {
    event: PropTypes.object

}