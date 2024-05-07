import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isXIcon: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            isXIcon: !prevState.isXIcon
        }));
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Travel</h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.isXIcon ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
                </div>

                <ul className={this.state.isXIcon ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.className} to={item.url}>
                                    <i className={item.icon}></i> {item.title}
                                    </Link>
                            </li>
                        )
                    })}
                    <button><Link to="/signin">Sign In</Link></button>
                    <button><Link to="/signup">Sign Up</Link></button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;