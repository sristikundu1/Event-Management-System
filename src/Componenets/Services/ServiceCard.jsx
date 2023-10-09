import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, image, service_name, price, short_description } = service || {}
    return (
        <div>


            <div className="md:w-80 lg:w-96 relative flex flex-col rounded-xl bg-[#F7FFE5] bg-clip-border text-gray-700 shadow-md mb-11">
                <div className="relative mx-4 -mt-6 h-[205px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img className=" w-96"
                        src={image}
                        alt="img-blur-shadow"

                    />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-[#B01E68]">
                        {service_name}
                    </h5>
                    <p className="block mb-4 font-sans text-base font-light leading-relaxed text-inherit text-[#293462] antialiased">
                        {short_description}
                    </p>
                    <small className="font-semibold text-xl">$ {price}</small>
                </div>
                <div className="p-6 pt-0" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <Link to={`/event/${id}`}>
                        <button
                            className="select-none rounded-lg bg-[#006E7F] py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white ">
                            Details
                        </button>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object

}