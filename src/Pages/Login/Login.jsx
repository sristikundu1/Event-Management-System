import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { logIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    
    const [success, setSuccess] = useState("");
    const [logINError, setLogInError] = useState("");

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLogInError('');
        setSuccess('');

        if((email,password)){
            logIn(email,password)
            .then((result) => {
                console.log(result.user);
                setSuccess("user loged successfully");

                navigate(location?. state ? location.state : "/")
            })
            .catch(error => {
                console.error(error);
                setLogInError(error.message);
            })
        }

    }
    return (
        <div>
            <div className="hero h-[700px] w-full bg-[url(https://i.ibb.co/R3Xg7vG/Login-Banner.jpg)]">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="font-bold text-3xl text-center mb-16 text-[#F5F5DC] italic">Welcome To Phantasy</h2>
                        <form onSubmit={handleLogIn}>
                            <div>
                                <label className="label">
                                    <span className="label-text text-[#D0E7D2] font-semibold text-xl">Email</span>
                                </label>
                                <input className="border-b-4 border-[#D83F31] bg-[#EE9322] rounded p-2 w-96" type="email" placeholder="Write Your Email" name="email" id="" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-[#D0E7D2] font-semibold text-xl">Password</span>
                                </label>
                                <input className="border-b-4 border-[#D83F31] bg-[#EE9322] rounded p-2 w-96" type="password" placeholder="Write Your Password" name="password" id="" required />
                            </div>
                            <p className="mt-3">Do not Have Any Account?  <Link className="font-bold text-[#FFDBAA] underline" to="/register">Register</Link></p>


                            <button className="bg-[#219C90]  border rounded-lg h-10 w-36 mt-9 py-1 px-9 font-semibold text-white">Log In</button>

                        </form>
                        {
                            logINError && <p>{logINError}</p>

                        }
                        {
                            success && <p>{success}</p>

                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;