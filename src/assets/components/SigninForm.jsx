import { useState } from "react";
import "./SignFormStyle.css";
//"fa-solid fa-eye-slash"
//"fa-solid fa-eye"

function SignInForm(){

    const [visible, setVisible] = useState(false)

    const handleVisible = () => {
        setVisible(!visible)
    }
    

    return(
        <div className="form-container">
            <h1>Sign In</h1>
            <form action="">
                <input type="text" placeholder="User Name or Email" required/>
                <input 
                    className="pass" 
                    type={visible ? "text" : "password"} 
                    placeholder="Password " 
                    required
                />

                <i 
                    id="in-i" 
                    onClick={handleVisible} 
                    className={visible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} 
                ></i>
                
                <br/>
                <a href="" style={{color: "blue"}}>Forgot your Password?</a>
                <button className="contact-btn">Sign In</button>
            </form>
            <p>If you don't have account yet? Please <a href="/signup" style={{color: "blue"}}>Sign Up</a></p>

        </div>
    );
}

export default SignInForm;