import { useState } from "react";
import "./SignFormStyle.css";

function SignUpForm(){

    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    
    const handleClick1 = () => {
        setVisible1(!visible1)
    }

    const handleClick2 = () => {
        setVisible2(!visible2)
    }

    return(
        <div className="form-container">
            <h1>Sign Up For Free</h1>
            <form action="">
                <input type="text" placeholder="User Name" required/>
                <input type="text" placeholder="Email" required/>
                <input 
                    className="pass" 
                    type={visible1 ? "text" : "password"} 
                    placeholder="PassWord" 
                    required
                />

                <input 
                className="pass" 
                type={visible2 ? "text" : "password"} 
                placeholder="Re-enter PassWord" 
                required
                />
                               
                <i 
                onClick={handleClick1} 
                id="up-i1" 
                className={visible1 ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} 
                ></i>
                
                <i 
                onClick={handleClick2} 
                id="up-i2" 
                className={visible2 ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} 
                ></i>
                
                <button className="contact-btn">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/signin" style={{color: "blue"}}>Sign In </a></p>
        </div>
    );
}

export default SignUpForm;