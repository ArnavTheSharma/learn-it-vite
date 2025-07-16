import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import homeImage from "./learn-it-final-product.gif";
import Footer from "../../components/Footer/Footer";
import UpcomingEventsSlider from "../../components/UpcomingEventsSlider/UpcomingEventsSlider";
import { FaRegCommentDots, FaLightbulb } from "react-icons/fa";
// If you have a calendar component, import it here:
// import UpcomingEventsCalendar from "../../components/UpcomingEventsCalendar/UpcomingEventsCalendar";


function HomePage() {
    const navigate = useNavigate();
    const [showCalendar, setShowCalendar] = useState(false);

    // Fade-in on scroll logic with blur/scale
    const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [visible, setVisible] = useState([false, false, false, false, false]);
    // For staggered logo animation
    const logoRefs = Array.from({ length: 6 }, () => useRef());
    const [logoVisible, setLogoVisible] = useState(Array(6).fill(false));

    useEffect(() => {
        // Section fade+blur+rise
        const observers = sectionRefs.map((ref, idx) => {
            if (!ref.current) return null;
            return new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible((v) => {
                            const arr = [...v];
                            arr[idx] = true;
                            return arr;
                        });
                    }
                },
                { threshold: 0.15 }
            );
        });
        sectionRefs.forEach((ref, idx) => {
            if (ref.current && observers[idx]) observers[idx].observe(ref.current);
        });
        // Logo staggered fade+blur
        logoRefs.forEach((ref, idx) => {
            if (!ref.current) return;
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setLogoVisible((v) => {
                                const arr = [...v];
                                arr[idx] = true;
                                return arr;
                            });
                        }, idx * 120); // stagger delay
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(ref.current);
        });
        return () => {
            observers.forEach((observer, idx) => {
                if (observer && sectionRefs[idx].current) observer.unobserve(sectionRefs[idx].current);
            });
            logoRefs.forEach((ref, idx) => {
                if (ref.current) {
                    // No need to disconnect logo observers as they're not reused
                }
            });
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {/* Landing page */}
            <div
                ref={sectionRefs[0]}
                className={`homeContainer mb-12 transition-all duration-700 ${visible[0] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <div className="titleWrapper">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">Learn It</h1>
                    <h2 className="font-medium m-3 sm:m-5 xl:m-8 text-base sm:text-lg lg:text-3xl xl:text-3xl"><span>Bridging Gaps, Creating Opportunities</span></h2>
                    <div className="flex items-center justify-center !z-[99]">
                        <button
                            onClick={() => { navigate('/join-us'); }}
                            className="relative !z-[99] cursor-pointer px-5 py-2 w-40 sm:w-48 lg:text-2xl lg:py-3 lg:w-64 font-medium text-white group">
                            <span className="pointer-events-none absolute inset-0 w-full h-full transition-all duration-200 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-400 group-hover:skew-x-12"></span>
                            <span className="pointer-events-none absolute inset-0 w-full h-full transition-all duration-200 ease-out transform skew-x-12 bg-rose-400 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
                            <span className="relative">Join Us</span>
                        </button>
                    </div>
                </div>
                <img className="image" src={homeImage} alt="Learn It demonstration" />
            </div>

            {/* About Learn It, certifications, Mission */}
            <div
                ref={sectionRefs[1]}
                className={`w-[95vw] sm:w-full sm:max-w-[90%] mx-auto mb-12 transition-all duration-700 ${visible[1] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <Section2 />
            </div>
            {/* Preview of Past Events and any Upcoming Events */}
            <div
                ref={sectionRefs[2]}
                className={`w-[95vw] sm:w-full sm:max-w-[90%] mx-auto mb-12 transition-all duration-700 ${visible[2] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <Section3 />
            </div>

            {/* Question Boxes Section */}
            <section
                ref={sectionRefs[3]}
                className={`w-[95vw] sm:w-full sm:max-w-[90%] mx-auto mb-12 flex flex-col gap-8 transition-all duration-700 ${visible[3] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Webinar Feedback Box */}
                    <div className="bg-white rounded-lg p-8 flex flex-col items-center relative overflow-hidden min-h-[260px]">
                        <div className="absolute top-0 left-0 w-full h-2 bg-rose-400 rounded-t-2xl" />
                        <FaRegCommentDots className="text-rose-400 text-4xl mb-2 mt-2 drop-shadow" />
                        <h3 className="text-[#003366] text-xl font-bold mb-3 text-center">What did you think of our last webinar?</h3>
                        <p className="text-[#003366] text-base mb-4 text-center">We value your feedback! Please let us know your thoughts.</p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSck_HmiJnyruJe4eiXhYN5hiE_MZuAGcz3gLtl2FMr5wEbCMw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#DD6C73] text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:bg-rose-500 transition text-lg mt-auto"
                        >
                            Leave Feedback
                        </a>
                    </div>
                    {/* Next event Suggestion Box */}
                    <div className="bg-[#F1C5B0] !text-white rounded-lg p-8 flex flex-col w-full items-center relative overflow-hidden min-h-[260px]">
                        <div className="absolute top-0 left-0 w-full h-2 bg-rose-400 rounded-t-2xl" />
                        <FaLightbulb className="text-[#003366] text-4xl mb-2 mt-2 drop-shadow" />
                        <h3 className="text-[#003366] text-xl font-bold mb-3 text-center">What are you looking for next?</h3>
                        <p className="text-[#003366] text-base mb-4 text-center">Drop your suggestions for future events below!</p>
                        <textarea
                            className="w-full bg-white rounded-lg p-3 text-blue-900 mb-3 resize-none border border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#DD6C73]"
                            rows={3}
                            placeholder="Drop your suggestions..."
                        />
                        <button className="!bg-[#DD6C73] text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:!bg-rose-600 cursor-pointer transition text-lg mt-auto">Submit</button>
                    </div>
                </div>
            </section>

            {/* Featured Event: Hackathon Section - Redesigned */}
            <div
                ref={sectionRefs[4]}
                className={`bg-white mb-12 py-12 transition-all duration-700 ${visible[4] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <section className="w-[95vw] sm:w-full sm:max-w-[90%] mx-auto flex flex-col items-center">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl flex flex-col md:flex-row border border-[#003366] overflow-hidden">
                        {/* Left: Event Image */}
                        <div className="md:w-1/2 w-full flex items-center justify-center bg-[#003366] p-0 md:p-8">
                            <img src="/src/pages/eventsPage/eventImages/pastEvents/hackathon.png" alt="Hackathon" className="rounded-2xl shadow-lg w-full max-w-xs object-cover border border-blue-200 m-6" />
                        </div>
                        {/* Right: Event Info */}
                        <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
                            {/* <div className="w-full h-2 bg-[#DD6C73] rounded-t-2xl mb-4" /> */}
                            <h2 className="text-[#003366] text-3xl font-extrabold mb-2">Featured Event</h2>
                            <h3 className="text-[#DD6C73] text-xl font-bold mb-2">Learn It Global Hackathon</h3>
                            <p className="text-[#003366] text-base mb-4">Join our global hackathon and showcase your skills! Open to all students and developers. Collaborate, innovate, and compete for prizes while making a difference in STEM!</p>
                            <a
                                href="https://learn-it-global-hackathon.devpost.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#DD6C73] text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:bg-rose-500 transition text-lg mb-4 w-fit"
                            >
                                View Hackathon Details
                            </a>
                            <div className="mt-2">
                                <h4 className="text-blue-900 text-lg font-semibold mb-2">Sponsors for this event</h4>
                                <div className="flex flex-wrap gap-2">
                                    {/* Add sponsor logos or names here. Example: */}
                                    <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm">Sponsor 1</span>
                                    <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm">Sponsor 2</span>
                                    <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm">Sponsor 3</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Note: Learn It has no sponsors for the nonprofit itself, just this event.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Colleges & Companies Section - Enhanced */}
            <section className="w-[95vw] sm:w-full sm:max-w-[90%] mx-auto mb-20 flex flex-col items-center">
                <h2 className="!text-[#003366] text-3xl pageTitle font-serif font-bold !mt-0 mb-2 text-center tracking-tight">Our Partners in Impact</h2>
                <p className="text-[#003366] text-lg mb-4 text-center max-w-2xl font-medium">
                    Together with leading colleges and companies, we're making STEM education accessible for all. <span className="text-[#DD6C73] font-bold">Thank you to our amazing partners for supporting our mission!</span>
                </p>
                {/* Marquee-style logo strip for visual interest */}
                <div className="w-full overflow-x-auto py-4 flex justify-center relative">
                    <div className="flex flex-row items-center gap-10 md:gap-16 px-2 animate-marquee whitespace-nowrap border-y border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50">
                        {/* Example logos/names, replace with real ones as needed */}
                        {[
                            { src: "/src/companyLogos/learn-it-logo.png", alt: "Learn It", label: "Learn It" },
                            { src: "/src/companyLogos/learn-it-logo.png", alt: "Stanford University", label: "Stanford University" },
                            { src: "/src/companyLogos/learn-it-logo.png", alt: "Google", label: "Google" },
                            { src: "/src/companyLogos/learn-it-logo.png", alt: "Beck College Prep", label: "Beck College Prep" },
                            { src: "/src/companyLogos/learn-it-logo.png", alt: "Meta", label: "Meta" },
                            { src: "/src/companyLogos/learn-it-logo.png", alt: "UC Berkeley", label: "UC Berkeley" },
                        ].map((logo, idx) => (
                            <div
                                key={logo.label}
                                ref={logoRefs[idx]}
                                className={`flex flex-col items-center min-w-[110px] transition-all duration-700 ${logoVisible[idx] ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-95'}`}
                                style={{ transitionDelay: `${idx * 120}ms` }}
                            >
                                <img src={logo.src} alt={logo.alt} className="h-12 w-auto mb-1" />
                                <span className="text-[#003366] font-semibold text-xs md:text-sm whitespace-nowrap">{logo.label}</span>
                            </div>
                        ))}
                        {/* Add more as needed, or use a horizontal scroll for overflow */}
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center gap-3">
                    <span className="text-[#003366] text-lg font-bold">Let's make an impact together!</span>
                    <span className="text-[#003366] text-base text-center max-w-xl">We're always looking to expand our network of passionate partners. If your college or company shares our vision for accessible STEM education, we'd love to connect!</span>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <a href="/contact-us" className="inline-block bg-[#DD6C73] text-white font-bold rounded-lg px-7 py-3 shadow hover:bg-rose-600 transition text-lg">
                            Partner with us
                        </a>
                        <a href="/our-team" className="inline-block bg-[#003366] text-white font-bold rounded-lg px-7 py-3 shadow hover:bg-[#002244] transition text-lg">
                            Meet the Team
                        </a>
                    </div>
                </div>
            </section>

            {/* Fade-in animation style */}
            <style>{`
                .opacity-0 { opacity: 0; }
                .opacity-100 { opacity: 1; }
                .translate-y-8 { transform: translateY(2rem); }
                .translate-y-0 { transform: translateY(0); }
                .blur-md { filter: blur(8px); }
                .blur-0 { filter: blur(0); }
                .scale-95 { transform: scale(0.95); }
                .scale-100 { transform: scale(1); }
            `}</style>
        </>
    );
}

export default HomePage;