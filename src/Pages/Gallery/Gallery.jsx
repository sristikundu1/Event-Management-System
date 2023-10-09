import swal from 'sweetalert';

const Gallery = () => {

    const handlereview = e => {
        e.preventDefault();
        const mesage = e.target.review.value;

        if(mesage){
            swal("Thank You For Your Valuable Comment.");
        }
    }
    
    return (
        <div className="bg-[#D3E0DC]">
            <h2 className="font-bold text-4xl text-center text-[#086972] py-6">Memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 rounded-lg lg:grid-cols-2">
                <img src="https://i.ibb.co/wSLMYB9/decoration1.jpg" alt="" />
                <img src="https://i.ibb.co/jHHTCF5/Retairement1.jpg" alt="" />
                <img src="https://i.ibb.co/sPx7d44/Retirement2.jpg" alt="" />
                <img src="https://i.ibb.co/tZSFhPr/Reception1.jpg" alt="" />
                <img src="https://i.ibb.co/nQh1mZq/Wedding2.jpg" alt="" />
                <img src="https://i.ibb.co/wRW323N/Babyshower1.jpg" alt="" />
                <img src="https://i.ibb.co/Jk8f8Lm/35-annickadunkin-blog-68.jpg" alt="" />
                <img src="https://i.ibb.co/xDKggdq/Birthday2.jpg" alt="" />
                <img src="https://i.ibb.co/RjQLd6y/Decoration.jpg" alt="" />
                <img className="h-[383px]" src="https://i.ibb.co/Tht5151/Wedding1.jpg" alt="" />
            </div>
            <div className='pb-4'>
                <h2 className="font-bold text-4xl text-center text-[#086972] py-6">Give Us Your FeedBack.</h2>
                <form onSubmit={handlereview}>
                <textarea className="w-1/2 my-2 p-3 outline-none border-b-4 rounded-lg  bg-[#EBFFFAs] md:ml-64 lg:ml-96" placeholder="Something about us.........." name="review" id="" cols="30" rows="6"></textarea>
               
               <button className="w-28 h-12 ml-[650px] bg-[#219C90] text-white font-semibold  border rounded-md flex justify-center text-center items-center">Submit</button>
                </form>
            
            </div>
        </div>
    );
};

export default Gallery;