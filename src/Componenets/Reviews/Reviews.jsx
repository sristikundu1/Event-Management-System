import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../../../public/Review";

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="py-10">
            <h2 className="font-bold text-3xl text-center mb-16 text-[#285430]">Clients Imprimatur</h2>
            <div className="max-w-6xl mx-auto ">
                <Slider {...settings}>

                    {
                        reviews.map((reviews) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl text-gray-700 bg-[#D0F5BE] p-10 shadow-none">
                                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl  pt-0 pb-8 text-gray-700 shadow-none">
                                    <img
                                        src={reviews.image}
                                        alt={reviews.image}
                                        className="relative inline-block h-[68px] w-[68px] !rounded-full object-cover object-center"
                                    />
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-[#A4907C] antialiased">
                                                {reviews.name}
                                            </h5>

                                        </div>
                                        <p className="block font-normal	 text-base  leading-relaxed text-[#618264] antialiased">{reviews.profession}</p>
                                    </div>
                                </div>
                                <div className="mb-6 p-0">
                                    <p className="block font-medium text-base  leading-relaxed text-inherit antialiased text-[#9E6F21]">
                                        {reviews.review}
                                    </p>
                                </div>
                            </div>



                        ))
                    }


                </Slider>

            </div>
        </div>
    );
};

export default Reviews;