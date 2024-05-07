import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import img1 from "../img/1.jpg";
import homeImg from "../img/12.jpg";
import img2 from "../img/2.jpg";
import img5 from "../img/5.jpg";
import img8 from "../img/8.jpg";
import "./HomeStyle.css";

function Home() {

    return(
        <>
            <Navbar/>
            <Hero
                className="hero"
                heroImg={homeImg}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                url="/home"
                btnClass="show"
                btnText="Travel Plan"
            />
            
            <div className="destination">
                <h1>Popular Destinations</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame.</p>

                
                <div className="first-des">
                    <div className="des-text">
                        <h2>Taal Volcano, Batangas</h2>
                        <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
                    </div>

                    <div className="image">
                        <img src={img1} alt="Taal Volcano, Batangas" />
                        <img src={img2} alt="Taal Volcano, Batangas" />
                    </div>
                </div>

                <br/><br/>

                <div className="second-des">

                    <div className="image">
                        <img src={img5} alt="Mt. Daguldul, Batangas" />
                        <img src={img8} alt="Mt. Daguldul, Batangas" />
                    </div>

                    <div className="des-text">
                        <h2>Mt. Daguldul, Batangas</h2>
                        <p>If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim.</p>
                    </div>                    
                </div>
            </div>

            <Trip/>
            <Footer/>

        </>
        
    );
}

export default Home;