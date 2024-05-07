import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../img/night.jpg";
import "./AboutStyle.css";

function About(){

    return(
        <>
            <Navbar/>
            <Hero
                className="hero"
                heroImg={aboutImg}
                title="About"
                url="/about"
            />

            <div className="content">
                <h2>Our History</h2>
                <p>Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence.</p>

                <h2>Our Mission</h2>
                <p>Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.</p>

                <h2>Our Vision</h2>
                <p>To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.</p>
            </div>

            <Footer/>
        </>
    );
}

export default About;