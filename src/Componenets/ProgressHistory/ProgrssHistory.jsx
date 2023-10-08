import CountUp from 'react-countup';

const ProgrssHistory = () => {
    return (
        <div className="bg-[#B2533E] my-9 p-12 " >

            <div className="flex  justify-around max-w-6xl mx-auto">

                <div className="flex flex-col ">
                    <span className="text-[#F2ECBE] text-7xl mb-3"><CountUp
                        start={1}
                        end={15}
                        duration={3.75}
                    ></CountUp></span>
                    <span className="text-[#FFC95F] text-2xl">Events</span>

                </div>
                <div className="flex flex-col">
                    <span className="text-[#F2ECBE] text-7xl mb-3"><CountUp
                        start={1}
                        end={60}
                        duration={3.75}
                        suffix='+'
                    ></CountUp></span>
                    <span className="text-[#FFC95F] text-2xl">Happy Clients</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#F2ECBE] text-7xl mb-3">10</span>
                    <span className="text-[#FFC95F] text-2xl">Members</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#F2ECBE] text-7xl mb-3">3</span>
                    <span className="text-[#FFC95F] text-2xl">Awards</span>
                </div>


            </div>

        </div>
    );
};

export default ProgrssHistory;