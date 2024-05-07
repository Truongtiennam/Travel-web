import "./FooterStyle.css";

function Footer(){
    return(
        <div className="footer-container">
            <div className="top">
                <h1>Travel</h1>
                <p>Choose your favourite destination.</p>
            </div>

            <div className="bottom">
                
                <div className="col1">
                    <h4>Project</h4>
                    <ul>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Status</a></li>
                        <li><a href="">License</a></li>
                        <li><a href="">All Version</a></li>
                    </ul>
                </div>

                <div className="col2">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Issues</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
                
                <div className="col3">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="">Support</a></li>
                        <li><a href="">Troubleshooting</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                
                <div className="col4">
                    <h4>Others</h4>
                    <ul>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">License</a></li>
                    </ul>
                </div>
            </div>

            <a target="_blank" href=""><i className="brands-i i1 fa-brands fa-facebook"></i></a>
            <a target="_blank" href=""><i className="brands-i i2 fa-brands fa-x-twitter"></i></a>
            <a target="_blank" href=""><i className="brands-i i3 fa-brands fa-youtube"></i></a>
            <a target="_blank" href="https://github.com/Truongtiennam/Travel-web"><i className="brands-i i4 fa-brands fa-github"></i></a>
        </div>
    );
}

export default Footer;