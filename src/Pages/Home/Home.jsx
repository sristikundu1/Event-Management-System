import { useLoaderData } from "react-router-dom";
import Banner from "../../Componenets/Header/Banner/Banner";
import Services from "../../Componenets/Services/Services";
import ProgrssHistory from "../../Componenets/ProgressHistory/ProgrssHistory";
import Reviews from "../../Componenets/Reviews/Reviews";


const Home = () => {
    const services = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <Services services={services} ></Services>
            <Reviews></Reviews>
            <ProgrssHistory></ProgrssHistory>
           
        </div>
    );
};

export default Home;