
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {
    const { googleSignIn } = useContext(AuthContext);
    const { register } = useContext(AuthContext);


    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickGoogle = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
        })
    }

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');
        setSuccess('');

        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&@?]{6,15}$/.test(password)) {
            setRegisterError("please give strong password");
            return;
        }
        else {
            register(email, password).then((result) => {
                console.log(result.user);
                setSuccess("user created successfully");
            })
        }


    }
    return (
        <div className="w-full h-screen flex items-start" >
            <div className="relative w-3/5 h-full flex flex-col">
                <div className="absolute top-[25%] left[10%] flex flex-col">
                    {/* <h1 className="text-4xl text-[#33BBC5] font-extrabold my-4 ml-28">Turn Your Dreams Into Reality</h1> */}

                </div>
                <img className="w-full h-full object-cover" src="https://i.ibb.co/frht83R/Registration-Banner.png" alt="" />
            </div>
            <div className=" w-2/5 h-full bg-slate-300 flex flex-col p-20 justify-between">

                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col mb-10">
                        <h3 className="text-2xl font-semibold mb-4 text-[#419197]">Registration</h3>
                        <p className="text-sm mb-4 text-[#12486B] font-medium">Welcome !!! Please Enter Your Details.</p>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="w-full flex flex-col">
                            <input className="w-full my-2 p-3  outline-none border-b-4 rounded" placeholder="Your Name" type="text" name="name" id="" required />
                            <input className="w-full my-2 p-3 outline-none border-b-4 rounded" placeholder="Your Email" type="email" name="email" id="" required />
                            <div className='relative'>
                                <input className="w-full my-2 p-3 outline-none border-b-4 rounded"
                                    placeholder="Your Password"
                                    type={showPassword ? "text" : "password"}
                                    name="password" id="" required />
                                <span className='absolute top-6 right-2' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </span>
                            </div>

                        </div>

                        <div className="w-full flex flex-col my-4">
                            <button className="w-full h-12 bg-[#219C90] text-white font-semibold  border rounded-md flex justify-center text-center items-center">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p>{registerError}</p>

                    }
                    {
                        success && <p>{success}</p>

                    }


                    <div className="w-full flex items-center justify-center relative py-9">
                        <div className="w-full h-[1px] bg-[#F9F3CC]"></div>
                        <p className="text-lg absolute text-[#419197] font-semibold m-4 bg-slate-300">OR</p>

                    </div>

                    <Link to="/">
                        <button onClick={handleClickGoogle} className="btn btn-outline w-full capitalize text-[#183D3D] mb-5">
                            <FaGoogle className="text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></FaGoogle>
                            Login With Google
                        </button>

                    </Link>

                </div>
                <div className="w-full flex items-center justify-center">
                    <p className="text-sm font-normal">Already Have An Account? <Link className="font-bold text-[#176B87] underline" to="/login">Log In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;