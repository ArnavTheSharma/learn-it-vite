import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import './NavBar.css';
import logo from "../../companyLogos/learn-it-icon-transparent.png";
import useUser from "../../hooks/useUser";
import {React, useState} from "react";

function NavBar() {
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [greyBgVisibility, setGreyBgVisibility] = useState(true);

    const dropdownReveal = () => {
        document.getElementById("hamburger-icon").classList.toggle("change");
        document.getElementById("dropdown-container").classList.toggle("reveal-dropdown");
        setGreyBgVisibility(!greyBgVisibility);
        document.getElementById("greyBg").hidden = greyBgVisibility;
    }

    

    return (

        <div className="navbar absolute w-full top-0 z-10">
            <div id="greyBg" className="w-screen h-screen bg-gray-700 opacity-50 fixed !z-20" hidden={greyBgVisibility} onClick={dropdownReveal}></div>
            
            <nav className="mx-auto" >
                <div><Link to="/"><img className="logo object-center" src={logo} alt="Learn It Logo" /></Link></div>
                <li><Link to="/" className={isActive("/") ? "!text-[#dd6c74] !font-bold" : " !transition-colors"}>Home</Link></li>
                <li><Link to="/events" className={isActive("/events") ? "!text-[#dd6c74] !font-bold" : " !transition-colors"}>Events</Link></li>
                <li><Link to="/join-us" className={isActive("/join-us") ? "!text-[#dd6c74] !font-bold" : " !transition-colors"}>Join Us</Link></li>
                <li><Link to="/our-team" className={isActive("/our-team") ? "!text-[#dd6c74] !font-bold" : " !transition-colors"}>Our Team</Link></li>
                <li><Link to="/contact-us" className={isActive("/contact-us") ? "!text-[#dd6c74] !font-bold" : " !transition-colors"}>Contact Us</Link></li>
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



            <div id="dropdown-container" className="dropdown-container md:hidden !py-3 z-30">
                <Link className={`dropdown-option ${isActive("/") ? "!underline !font-bold" : "!font-bold"}`} to="/" onClick={dropdownReveal}>Home</Link>
                <Link className={`dropdown-option ${isActive("/events") ? "!underline !font-bold" : "!font-bold"}`} to="/events" onClick={dropdownReveal}>Events</Link>
                <Link className={`dropdown-option ${isActive("/join-us") ? "!underline !font-bold" : "!font-bold"}`} to="/join-us" onClick={dropdownReveal}>Join Us</Link>
                <Link className={`dropdown-option ${isActive("/our-team") ? "!underline !font-bold" : "!font-bold"}`} to="/our-team" onClick={dropdownReveal}>Our Team</Link>
                <Link className={`dropdown-option ${isActive("/contact-us") ? "!underline !font-bold" : "!font-bold"}`} to="/contact-us" onClick={dropdownReveal}>Contact</Link>
            </div>
        </div>
    );
}



export default NavBar;