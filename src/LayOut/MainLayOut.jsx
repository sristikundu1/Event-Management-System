import { Outlet } from "react-router-dom";
import NavBar from "../Componenets/Header/NavBar/NavBar";
import Footer from "../Componenets/Footer/Footer";


const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;