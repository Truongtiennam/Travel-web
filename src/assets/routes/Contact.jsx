import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../img/2.jpg";


function Contact(){

    return(
        <>
            <Navbar/>
            <Hero
                className="hero"
                heroImg={contactImg}
                title="Contact"
                url="/contact"
            />

            <ContactForm/>
            <Footer/>
        </>
    );
}

export default Contact;