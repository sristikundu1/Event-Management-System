import { BsEnvelopePaper, BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";
const ContactUs = () => {
    const handlesubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const mesage = e.target.message.value;

        if(name,email,mesage,phone){
            alert("Thanks for contact Us");
        }
    }
    
    return (
        <div className="flex flex-cols-4 justify-between px-11 gap-4 bg-[#C4DFDF]">
            <div className=" col-span-2 flex justify-center items-center flex-col gap-4">
                <h2 className="text-3xl font-bold text-[#3A98B9] italic mb-3">It Is Simple.You Have An event <br /> To Plan And We Have The Solutions.</h2>
                <p className="font-medium flex items-center justify-center text-[#5F6F94] gap-3"><BsGeoAltFill></BsGeoAltFill> 456 Elm Avenue,Fantasyville, <br />Dreamland,Dhaka</p>
                <p className="font-medium flex items-center justify-center text-[#5F6F94] gap-3"> <BsEnvelopePaper></BsEnvelopePaper> phantasy23@email.com</p>
                <p className="font-medium flex items-center justify-center text-[#5F6F94] gap-3"> <BsFillTelephoneFill></BsFillTelephoneFill>0176459054</p>


            </div>
            <div className=" col-span-2 my-10">

                <form onSubmit={handlesubmit}>
                    <div className="w-[600px] flex flex-col ">
                        <input className="w-full my-2 p-3  outline-none border-b-4 rounded" placeholder="Your Name" type="text" name="name" id="" required />
                        <input className="w-full my-2 p-3 outline-none border-b-4 rounded" placeholder="Your Email" type="email" name="email" id="" required />
                        <input className="w-full my-2 p-3 outline-none border-b-4 rounded" placeholder="Your phone" type="text" name="phone" id="" required />
                        <textarea className="w-full my-2 p-3 outline-none border-b-4 rounded"  placeholder="Write The Details Of Your Event....." name="message" id="" cols="30" rows="10"></textarea>
                       <div className="flex gap-2">
                       <input type="checkbox" name="" id="" />
                        <label htmlFor="">I agree the terms and condition</label>
                       </div>

                    </div>

                    <div className="w-full flex flex-col my-4">
                        <button className="w-full h-12 bg-[#219C90] text-white font-semibold  border rounded-md flex justify-center text-center items-center">Register</button>
                    </div>
                </form>


            </div>


        </div >
    );
};

export default ContactUs;