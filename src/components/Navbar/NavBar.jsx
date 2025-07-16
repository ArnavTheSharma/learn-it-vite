import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import './NavBar.css';
import logo from "../../companyLogos/learn-it-icon-transparent.png";
import useUser from "../../hooks/useUser";

function NavBar() {
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar fixed w-full top-0 z-90">
            <nav className="sm:max-w-[90%] mx-auto" >
                <div><Link to="/"><img className="logo" src={logo} alt="Learn It Logo" /></Link></div>
                <li><Link to="/" className={isActive("/") ? "!text-[#dd6c74] !font-bold" : " hover:!text-[#dd6c74] !transition-colors"}>Home</Link></li>
                <li><Link to="/events" className={isActive("/events") ? "!text-[#dd6c74] !font-bold" : " hover:!text-[#dd6c74] !transition-colors"}>Events</Link></li>
                <li><Link to="/join-us" className={isActive("/join-us") ? "!text-[#dd6c74] !font-bold" : " hover:!text-[#dd6c74] !transition-colors"}>Join Us</Link></li>
                <li><Link to="/our-team" className={isActive("/our-team") ? "!text-[#dd6c74] !font-bold" : " hover:!text-[#dd6c74] !transition-colors"}>Our Team</Link></li>
                <li><Link to="/contact-us" className={isActive("/contact-us") ? "!text-[#dd6c74] !font-bold" : " hover:!text-[#dd6c74] !transition-colors"}>Contact Us</Link></li>
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

            <div id="dropdown-container" className="dropdown-container md:hidden ">
                <Link className={`dropdown-option ${isActive("/") ? "!text-[#dd6c74] !font-bold  bg-[#eaf1fa]" : " hover:!text-[#dd6c74] !transition-colors"}`} to="/" onClick={dropdownReveal}>Home</Link>
                <Link className={`dropdown-option ${isActive("/events") ? "!text-[#dd6c74] !font-bold  bg-[#eaf1fa]" : " hover:!text-[#dd6c74] !transition-colors"}`} to="/events" onClick={dropdownReveal}>Events</Link>
                <Link className={`dropdown-option ${isActive("/join-us") ? "!text-[#dd6c74] !font-bold  bg-[#eaf1fa]" : " hover:!text-[#dd6c74] !transition-colors"}`} to="/join-us" onClick={dropdownReveal}>Join Us</Link>
                <Link className={`dropdown-option ${isActive("/our-team") ? "!text-[#dd6c74] !font-bold  bg-[#eaf1fa]" : " hover:!text-[#dd6c74] !transition-colors"}`} to="/our-team" onClick={dropdownReveal}>Our Team</Link>
                <Link className={`dropdown-option ${isActive("/contact-us") ? "!text-[#dd6c74] !font-bold  bg-[#eaf1fa]" : " hover:!text-[#dd6c74] !transition-colors"}`} to="/contact-us" onClick={dropdownReveal}>Contact</Link>
            </div>
        </div>
    );
}
// Add this to NavBar.css:
// .active-link {
//   color: #003366 !important;
//   font-weight: bold;
//   border-bottom: 2.5px solid #003366;
//   background: linear-gradient(transparent 80%, #eaf1fa 100%);
// }
function dropdownReveal() {
    document.getElementById("hamburger-icon").classList.toggle("change");
    document.getElementById("dropdown-container").classList.toggle("reveal-dropdown");
}

export default NavBar;