import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import serviceImg from "../img/1.jpg";


function Service(){

    return(
        <>
            <Navbar/>
            <Hero
                className="hero"
                heroImg={serviceImg}
                title="Service"
                url="/service"
            />

            <Trip/>
            <Footer/>
        </>
        
    );
}

export default Service;