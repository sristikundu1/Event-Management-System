import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then((result) => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
        
    }
    const navLinks = <>
        <NavLink className="mr-9 text-lg" to="/">Home</NavLink>
        <NavLink className="mr-9 text-lg" to="/gallery">Gallery</NavLink>
        <NavLink className="mr-9 text-lg" to="/contact">Contact Us</NavLink>
    </>
    return (
        <div className="bg-[#E8F6EF] ">
            <div className="navbar max-w-6xl mx-auto py-9 ">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"> <span className="text-[#219C90] font-extrabold text-5xl">P</span><span>hantasy</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <p>{user?.displayName}</p>
                            <img className="w-12 mx-2 rounded-full" src={user?.photoURL} alt="" />
                           
                                <button onClick={handleLogOut} className="bg-[#219C90]  border rounded-lg h-10 w-28 py-1 px-9 font-semibold text-white">LogOut</button>
                           
                        </>
                        :
                        <Link to="/login">
                            <button className="bg-[#219C90]  border rounded-lg h-10 w-28 py-1 px-9 font-semibold text-white">LogIn</button>
                        </Link>
                   }
                </div>
            </div>

        </div>

    );
};

export default NavBar;