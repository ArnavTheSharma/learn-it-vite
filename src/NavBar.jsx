import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import './NavBar.css';
import logo from "./companyLogos/learn-it-icon-transparent.png";
import useUser from "./hooks/useUser";

function NavBar() {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <>
        <nav>
            <div><Link to="/"><img className="logo" src={logo}></img></Link></div>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/join-us">Join Us</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            {/* <li>
                {user
                    ? <a onClick={() => {
                        signOut(getAuth());
                    }}>Log Out</a>
                    
                    : <a onClick={() => {
                        navigate('/login');
                    }}>Log In</a>}
            </li> */}

            <div id="hamburger-icon" className="hamburger-icon" onClick={dropdownReveal}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </nav>


        <div id="dropdown-container" hidden={true} className="dropdown-container">
            <Link className="dropdown-option" to="/" onClick={dropdownReveal}>Home</Link>
            <Link className="dropdown-option" to="/events" onClick={dropdownReveal}>Events</Link>
            <Link className="dropdown-option" to="/join-us" onClick={dropdownReveal}>Join Us</Link>
            <Link className="dropdown-option" to="/our-team" onClick={dropdownReveal}>Our Team</Link>
            <Link className="dropdown-option" to="/contact-us" onClick={dropdownReveal}>Contact</Link>
        </div>
        </>
    );
    
}
function dropdownReveal() {
    document.getElementById("hamburger-icon").classList.toggle("change");
    document.getElementById("dropdown-container").classList.toggle("reveal-dropdown");
}

export default NavBar;