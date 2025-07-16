import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import homeImage from "./learn-it-final-product.gif";
import Footer from "../../components/Footer/Footer";

function HomePageRemake() {
    const navigate = useNavigate();

    return (
        <>
            {/* Landing page */}
            <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-white via-rose-50 to-white py-8">
                <div className="w-[95vw] max-w-[90vw] md:max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:px-8">
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-rose-600 mb-2 tracking-tight">Learn It</h1>
                        <h2 className="font-medium mb-6 text-base sm:text-lg lg:text-2xl text-gray-700"><span>Bridging Gaps, Creating Opportunities</span></h2>
                        <button
                            onClick={() => { navigate('/join-us'); }}
                            className="relative px-6 py-3 w-44 sm:w-56 lg:text-xl font-semibold text-white rounded-lg overflow-hidden group shadow-lg mt-2"
                        >
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-400 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out transform skew-x-12 bg-rose-400 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
                            <span className="relative">Join Us</span>
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img className="rounded-2xl shadow-lg w-full max-w-md object-cover" src={homeImage} alt="Learn It demonstration" />
                    </div>
                </div>
            </div>

            {/* About Learn It, certifications, Mission */}
            <div className="w-full flex justify-center">
                <div className="w-[95vw] max-w-[90vw] md:max-w-5xl">
                    <Section2 />
                </div>
            </div>

            {/* Preview of Past Events and any Upcoming Events */}
            <div className="w-full flex justify-center">
                <div className="w-[95vw] max-w-[90vw] md:max-w-5xl">
                    <Section3 />
                </div>
            </div>

            {/* Partners Section  */}
            <section id="partners" className="my-7 pt-10 w-full flex justify-center">
                <div className="w-[95vw] max-w-[90vw] md:max-w-5xl">
                    {/* Partners Section */}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HomePageRemake;