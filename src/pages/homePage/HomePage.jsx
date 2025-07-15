import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import homeImage from "./learn-it-final-product.gif";

function HomePage() {
    const navigate = useNavigate();

    return (
       <>
        {/* Landing page */}
        <div className="homeContainer">
            <div className="titleWrapper">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">Learn It</h1>
                <h2 className="font-medium m-3 sm:m-5 xl:m-8 text-base sm:text-lg lg:text-3xl xl:text-3xl"><span>Bridging Gaps, Creating Opportunities</span></h2>
                <div className="flex items-center justify-center">
                    <button 
                        onClick={() => {navigate('/join-us');}}
                        className="relative px-5 py-2 w-40 sm:w-48 lg:text-2xl lg:py-3 lg:w-64 font-medium text-white group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-400 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out transform skew-x-12 bg-rose-400 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
                        <span className="relative">Join Us</span>
                    </button>
                </div>
            </div>
            <img className="image" src={homeImage} alt="Learn It demonstration" />
        </div>

        {/* About Learn It, certifications, Mission */}
        <Section2 />

        {/* Preview of Past Events and any Upcoming Events */}
        <Section3 />
        
        {/* Join Us and Contact Us Page Redirects  */}

        {/* Upcoming Events Section (Preview)  */}
        {/* Partners Section  */}
        <section id="partners" className="my-7 pt-10" >
                {/* Partners Section */}
        </section>
        </>
    );
}

export default HomePage;