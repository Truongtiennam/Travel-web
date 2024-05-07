import { Route, Routes } from "react-router-dom"
import About from "./assets/routes/About"
import Contact from "./assets/routes/Contact"
import Home from "./assets/routes/Home"
import Service from "./assets/routes/Service"
import SignIn from "./assets/routes/SignIn"
import SignUp from "./assets/routes/SignUp"

function App() {

  return (
    <div className="app">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            
        </Routes>
        
    </div>
  )
}

export default App
