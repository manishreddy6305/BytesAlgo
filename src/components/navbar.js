import { Link } from "react-router-dom";
import './../styles/navbar.css'
import logo from './../images/logo2.jpg'
function Navbar(){
    return(
        <>
            <div className="nav-main">
                <div className="logo">
                 <img src={logo} className="image"></img>
                </div>
                <div className="nav-c">
                    <Link to="" className="navlink">Home</Link>
                    <Link to="" className="navlink">Product</Link>
                    <Link to="" className="navlink">Pricing</Link>
                    <Link to="" className="navlink last">Contact us</Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;