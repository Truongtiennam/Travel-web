import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignInForm from "../components/SigninForm";

function SignIn(){
    return(
        <>
            <Navbar/>
            <Hero
                className="hero"
                url="/signin"
            />

            <SignInForm/>
        
        </>
        
    );
}

export default SignIn;