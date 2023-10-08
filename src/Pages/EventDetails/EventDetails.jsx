import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";
import { BsChevronDown, BsCurrencyDollar, BsMagic } from "react-icons/bs";

const EventDetails = () => {
    const [event, setEvent] = useState({});

    const { id } = useParams();

    const selectEventDetails = useLoaderData();

    useEffect(() => {
        const findEvents = selectEventDetails.find(event => event.id == id)

        setEvent(findEvents)

    }, [id, selectEventDetails])


    return (
        <div>
            <div className="grid grid-cols-4 gap-6 py-5 bg-[#E4E4D0]">
                <div className="col-span-3">
                    <EventDetailsCard event={event}></EventDetailsCard>

                </div>
                <div>
                    <div className="mx-10">
                        <h2 className="font-bold text-3xl text-center mb-9 text-[#42032C]">Categories</h2>
                        <ul className="text-xl font-semibold mb-7">
                            <li className="flex items-center justify-center text-[#D36B00] gap-3"><BsMagic></BsMagic>InDoor</li>
                            <li className="flex items-center justify-center text-[#D36B00] gap-3"><BsMagic></BsMagic>OutDoor</li>
                            <li className="flex items-center justify-center text-[#D36B00] gap-3"><BsMagic></BsMagic>customized</li>
                            <li className="flex items-center justify-center text-[#D36B00] gap-3"><BsMagic></BsMagic>simple</li>
                        </ul>

                    </div>

                    <div className="mx-10 my-5">
                    <h2 className="font-bold text-3xl text-center mb-12 text-[#4C0027]">Our Event Packages</h2>
                    <div className="h-44 w-64 p-6 mt-3 border rounded-lg bg-clip-border bg-[#B5CB99] text-gray-700 shadow-md">
                        <h2 className="text-xl font-extrabold text-center my-3 text-[#003865]">Birthday Parties</h2>
                        <p className="flex items-center justify-center font-medium text-[#D36B00] my-3">from <BsCurrencyDollar></BsCurrencyDollar> 500</p>
                        <button className="pl-24 my-3 text-[#CD1818]"><BsChevronDown></BsChevronDown></button>

                    </div>
                    <div className="h-44 w-64 p-6 mt-3 border rounded-lg bg-clip-border bg-[#B5CB99] text-gray-700 shadow-md">
                        <h2 className="text-xl font-extrabold text-center my-3 text-[#003865]">Weddings Celebration</h2>
                        <p className="flex items-center justify-center font-medium text-[#D36B00] my-3">from <BsCurrencyDollar></BsCurrencyDollar> 5000</p>
                        <button className="pl-24 my-3 text-[#CD1818]"><BsChevronDown></BsChevronDown></button>

                    </div>
                    <div className="h-44 w-64 p-6 mt-3 border rounded-lg bg-clip-border bg-[#B5CB99] text-gray-700 shadow-md">
                        <h2 className="text-xl font-extrabold text-center my-3 text-[#003865]">Anniversary Celebration</h2>
                        <p className="flex items-center justify-center font-medium text-[#D36B00] my-3">from <BsCurrencyDollar></BsCurrencyDollar> 750</p>
                        <button className="pl-24 my-3 text-[#CD1818]"><BsChevronDown></BsChevronDown></button>

                    </div>
                    <div className="h-44 w-64 p-6 mt-3 border rounded-lg bg-clip-border bg-[#B5CB99] text-gray-700 shadow-md">
                        <h2 className="text-xl font-extrabold text-center my-3 text-[#003865]">Baby Shower Celebration</h2>
                        <p className="flex items-center justify-center font-medium text-[#D36B00] my-3">from <BsCurrencyDollar></BsCurrencyDollar> 400</p>
                        <button className="pl-24 my-3 text-[#CD1818]"><BsChevronDown></BsChevronDown></button>

                    </div>
                    <div className="h-44 w-64 p-6 mt-3 border rounded-lg bg-clip-border bg-[#B5CB99] text-gray-700 shadow-md">
                        <h2 className="text-xl font-extrabold text-center my-3 text-[#003865]">Retirement Parties</h2>
                        <p className="flex items-center justify-center font-medium text-[#D36B00] my-3">from <BsCurrencyDollar></BsCurrencyDollar> 600</p>
                        <button className="pl-24 my-3 text-[#CD1818]"><BsChevronDown></BsChevronDown></button>

                    </div>
                    <div className="h-44 w-64 p-6 mt-3 border rounded-lg bg-clip-border bg-[#B5CB99] text-gray-700 shadow-md">
                        <h2 className="text-xl font-extrabold text-center my-3 text-[#003865]">Engagement Celebration</h2>
                        <p className="flex items-center justify-center font-medium text-[#D36B00] my-3">from <BsCurrencyDollar></BsCurrencyDollar> 800</p>
                        <button className="pl-24 my-3 text-[#CD1818]"><BsChevronDown></BsChevronDown></button>

                    </div>


                    </div>
                </div>

            </div>
            <div className="bg-[#E4E4D0]">
                <h2 className="font-bold text-3xl text-center mb-16 text-[#900C3F]">Meet Our Team</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pb-12  gap-4">
                    <div className
                        ="relative flex w-80 h-80 flex-col rounded-xl bg-[#F9F3F3] bg-clip-border text-gray-700 shadow-md">
                        <div className
                            ="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/dbpLhZ7/Victoria-Brown.jpg" alt="profile-picture" />
                        </div>
                        <div className
                            ="p-6 text-center">
                            <h4 className
                                ="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Victoria Brown
                            </h4>
                            <p className
                                ="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                CEO / Co-Founder
                            </p>
                        </div>

                    </div>
                    <div className
                        ="relative flex w-80 h-80 flex-col rounded-xl bg-[#F9F3F3] bg-clip-border text-gray-700 shadow-md">
                        <div className
                            ="relative mx-4 mt-4  h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/dWpzXL3/Sophia-Carter-2.jpg" alt="profile-picture" />
                        </div>
                        <div className
                            ="p-6 text-center">
                            <h4 className
                                ="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Karen Clark
                            </h4>
                            <p className
                                ="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Event Planner
                            </p>
                        </div>

                    </div>
                    <div className
                        ="relative flex w-80 h-80 flex-col rounded-xl bg-[#F9F3F3] bg-clip-border text-gray-700 shadow-md">
                        <div className
                            ="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/rQy9cJh/Jack-Tunar.jpg" alt="profile-picture" />
                        </div>
                        <div className
                            ="p-6 text-center">
                            <h4 className
                                ="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Jack Turner
                            </h4>
                            <p className
                                ="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Event Coordinator
                            </p>
                        </div>

                    </div>
                    <div className
                        ="relative flex w-80 h-80 flex-col rounded-xl bg-[#F9F3F3] bg-clip-border text-gray-700 shadow-md">
                        <div className
                            ="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/VNCCSyQ/Charlie-Davis.jpg" alt="profile-picture" />
                        </div>
                        <div className
                            ="p-6 text-center">
                            <h4 className
                                ="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Charlie Davis
                            </h4>
                            <p className
                                ="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Wedding Planner
                            </p>
                        </div>

                    </div>
                    <div className
                        ="relative flex w-80 h-80 flex-col rounded-xl bg-[#F9F3F3] bg-clip-border text-gray-700 shadow-md">
                        <div className
                            ="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/3F6mRKL/Olivia-Parker.jpg" alt="profile-picture" />
                        </div>
                        <div className
                            ="p-6 text-center">
                            <h4 className
                                ="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Olivia Parkers
                            </h4>
                            <p className
                                ="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Decorator
                            </p>
                        </div>

                    </div>
                    <div className
                        =" relative flex w-80 h-80 flex-col rounded-xl bg-[#F9F3F3] bg-clip-border text-gray-700 shadow-md">
                        <div className
                            =" relative mx-4 mt-4  h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src="https://i.ibb.co/GFH3SP4/Noah-Turner.jpg" alt="profile-picture" />
                        </div>
                        <div className
                            ="p-6 text-center">
                            <h4 className
                                ="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Noah Turner
                            </h4>
                            <p className
                                ="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                Catering Manager
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default EventDetails;