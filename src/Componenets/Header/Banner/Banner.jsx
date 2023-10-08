
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[650px]">


                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero  bg-[url(https://i.ibb.co/MRNdV81/Banner1.png)]">
                        <div className="hero-overlay bg-opacity-60"></div>

                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md ">
                                <h1 className="mb-12 text-5xl font-bold text-white ">Let us celebrate <br /> Together</h1>
                                <p className="mb-5 text-[#EE9322] font-bold">The more you praise and celebrate your life, the more there is in life to celebrate.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero bg-[url(https://i.ibb.co/ScTVJ3Y/Banner2.jpg)]">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-12 text-5xl font-bold text-white">Your Happiness is <br /> Our Goal</h1>
                                <p className="mb-5 text-[#EE9322] font-bold">While we are living in the present, we must celebrate life every day, knowing that we are becoming history with every work, every action, every deed.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero bg-[url(https://i.ibb.co/6gcTVH6/Banner3.jpg)]">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">

                            <div className="max-w-md">
                                <h1 className="mb-12 text-5xl font-bold text-white">Your Memory <br /> Our Responsibility</h1>
                                <p className="mb-5 text-[#EE9322] font-bold">It is always good to remember where you come from and celebrate it. To remember where you come from is part of where you are going.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero bg-[url(https://i.ibb.co/1Mwrn7s/Banner4.jpg)]">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-12 text-5xl font-bold text-white">Make Your Day <br /> Rememberable</h1>
                                <p className="mb-5 text-[#EE9322] font-bold">The most beautiful things are not associated with money; they are memories and moments. If you do not celebrate those, they can pass you by.</p>

                            </div>
                            
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Banner;