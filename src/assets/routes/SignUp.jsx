import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignupForm";

function SignUp(){
    return(
        <>
            <Navbar/>
            <Hero
                className="hero"
                url="/signup"
            />

            <SignUpForm/>
        </>
    );
}

export default SignUp;