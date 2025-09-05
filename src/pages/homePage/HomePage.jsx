import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import partners1 from "./partners1";
import partners2 from "./partners2";
import PartnersSlider from "../../components/PartnersSlider/PartnersSlider";
import emailjs from "@emailjs/browser";



import Section2 from "./section2/section2";
import Section4 from "./section4/section4";
import homeImage from "./learn-it-final-product.gif";
import Footer from "../../components/Footer/Footer";
import UpcomingEventsSlider from "../../components/UpcomingEventsSlider/UpcomingEventsSlider";
import { FaRegCommentDots, FaLightbulb } from "react-icons/fa";
// If you have a calendar component, import it here:
// import UpcomingEventsCalendar from "../../components/UpcomingEventsCalendar/UpcomingEventsCalendar";
import anshKeysLogo from "../../companyLogos/hackathonSponsorLogos/anshKeysLogo.png";
import aopsLogo from "../../companyLogos/hackathonSponsorLogos/aopsLogo.png";
import axureLogo from "../../companyLogos/hackathonSponsorLogos/axureLogo.png";
import desmosLogo from "../../companyLogos/hackathonSponsorLogos/desmosLogo.png";
import echoLogo from "../../companyLogos/hackathonSponsorLogos/echoLogo.png";
import gmcLogo from "../../companyLogos/hackathonSponsorLogos/gmcLogo.png";
import incogniLogo from "../../companyLogos/hackathonSponsorLogos/incogniLogo.png";
import interviewCakeLogo from "../../companyLogos/hackathonSponsorLogos/interviewCakeLogo.png";
import kyrozLogo from "../../companyLogos/hackathonSponsorLogos/kyrozLogo.jpg";
import nordPassLogo from "../../companyLogos/hackathonSponsorLogos/nordPassLogo.png";
import nordVPNLogo from "../../companyLogos/hackathonSponsorLogos/nordVPNLogo.png";
import onePasswordLogo from "../../companyLogos/hackathonSponsorLogos/onePasswordLogo.jpg";
import wolframLogo from "../../companyLogos/hackathonSponsorLogos/wolframLogo.jpg";
import xyzLogo from "../../companyLogos/hackathonSponsorLogos/xyzLogo.png";
import hackathon from "../eventsPage/eventImages/pastEvents/hackathon.png";


import communityAdvocateLogo from "../../companyLogos/communityAdvocateLogo.png";
import communityAdvocateFeature from "../../companyLogos/communityAdvocateFeature.png";

import learnItLogo from "../../companyLogos/learn-it-logo.png";



function HomePage() {
    const formRef = useRef();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_dn97rla",
            "template_pkrpj89",  
            formRef.current,
            "lYSSbDcd3b7UFOzF2" 
        )
        .then(
            () => {
            setStatus("Thanks! Your message was sent.");
            },
            (error) => {
            console.error(error);
            setStatus("Something went wrong. Please try again.");
            }
        );
    };

    const navigate = useNavigate();
    const [showCalendar, setShowCalendar] = useState(false);

    // Fade-in on scroll logic with blur/scale
    const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const [visible, setVisible] = useState([false, false, false, false, false, false, false, false]);
    // For staggered logo animation
    const logoRefs = Array.from({ length: 8 }, () => useRef());
    const [logoVisible, setLogoVisible] = useState(Array(8).fill(false));

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
            <section
                ref={sectionRefs[0]}
                className={`homeContainer !w-full mb-12 transition-all duration-700 ${visible[0] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <div className="titleWrapper">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">Learn It</h1>
                    <h2 className="font-medium m-3 sm:m-5 xl:m-8 text-base sm:text-lg lg:text-3xl xl:text-3xl"><span>Bridging Gaps, Creating Opportunities</span></h2>
                    <div className="flex items-center justify-center !z-[99]">
                        <button
                            onClick={() => { navigate('/join-us'); }}
                            className="joinUsButton relative !z-[99] cursor-pointer w-40 sm:w-48 lg:text-2xl lg:py-3 lg:w-64 font-medium !border-0 !text-white group">
                            <span className="pointer-events-none absolute inset-0 w-full h-full transition-all duration-200 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-400 group-hover:skew-x-12"></span>
                            <span className="pointer-events-none absolute inset-0 w-full h-full transition-all duration-200 ease-out transform skew-x-12 bg-rose-400 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>
                            <span className="relative">Join Us</span>
                        </button>
                    </div>
                </div>
                <img className="image" src={homeImage} alt="Learn It demonstration" />
            </section>

            {/* About Learn It, certifications, Mission */}
            <section
                ref={sectionRefs[1]}
                className={`!h-fit sm:w-full sm:max-w-[90%] mx-auto mb-12 transition-all duration-700 ${visible[1] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <Section2 />
            </section>

<section
  ref={sectionRefs[2]}
className={`!h-fit sm:w-full sm:max-w-[90%] mx-auto mb-12 transition-all duration-700 ${visible[2] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}

>
  <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
    
    {/* Heading */}    
    <h2 className="text-3xl font-extrabold text-[#003366] tracking-tight">
      About Us
    </h2>

    {/* Intro Paragraph */}
    <p className="text-base sm:text-lg text-[#003366] leading-relaxed max-w-3xl">
    Here at <span className="font-bold text-[#dd6c74]">Learn It</span>, we believe 
    education should be <span className="italic">accessible</span>, engaging, and rewarding 
    for every student. That’s why we provide <span className="font-medium text-[#004c99]">
    free college prep tools</span>, career exploration resources, tutoring, webinars, 
    and hands-on volunteer opportunities.
    </p>


    {/* Mission Card Grid */}
    <div className="grid sm:grid-cols-2 gap-6 mt-6 w-full">
      <div className="bg-white rounded-2xl shadow-sm border border-[#b3c6e0] p-8">
        <h3 className="font-bold text-[#003366] text-xl mb-3">Our Impact</h3>
        <p className="text-sm sm:text-base text-[#003366] leading-relaxed mb-4">
            We strive to break barriers in education by offering free tutoring, extracurricular learning, and STEM resources that prepare students for college and future careers, while fostering a lifelong love for learning        
        </p>
        <button
          onClick={() => { navigate('/events'); }}
          className="inline-block rounded-full font-bold bg-[#003366] text-white px-6 py-2 hover:bg-[#002244] transition-colors shadow self-center"
        >
          Our Past Events
        </button>

      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-[#b3c6e0] p-8 flex flex-col justify-center">
        <h3 className="font-bold text-[#003366] text-xl mb-3">Get Involved</h3>
        <p className="text-sm sm:text-base text-[#003366] leading-relaxed mb-4">
            Whether you’re looking to volunteer, grow your leadership skills, or access resources that support your future, Learn It is here for you. Together, we’re building futures powered by knowledge and community.
        </p>
        <button
          onClick={() => { navigate('/join-us'); }}
          className="inline-block rounded-full font-bold bg-[#003366] text-white px-6 py-2 hover:bg-[#002244] transition-colors shadow self-center"
        >
          Sign Up Now
        </button>
      </div>
    </div>
  </div>
</section>



            <section
            ref={sectionRefs[3]}
            className={`bg-white transition-all duration-700 ${visible[3] ? "opacity-100 translate-y-0 blur-0 scale-100" : "opacity-0 translate-y-8 blur-md scale-95" }`}
            >
                <h2 className="text-[#003366] mb-6 ">
                    Featured in the Community Advocate
                </h2>

                <div className="w-fit sm:w-full sm:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-5 lg:gap-8">
                {/* Left: Logo */}
                <div className="hidden lg:flex justify-center lg:justify-start">
                    <img
                    src={communityAdvocateLogo}
                    alt="Community Advocate Logo"
                    className=" rounded-xl shadow-lg lg:min-h-30 max-h-30 lg:flex object-cover lg:w-80 border border-blue-200"
                    />
                </div>

                  <div className=" hidden lg:inline-block h-cover min-h-[1em] w-0.5 self-stretch bg-[#003366]"></div>


                {/* Right: Content */}
                <div className=" flex flex-col items-center lg:items-start">
                    <a
                    href="https://www.communityadvocate.com/education/local-non-profit-organization-created-by-students-for-students/article_a10f414f-9fce-5dfe-a170-8b24c4917baf.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6"
                    >
                    <img
                        src={communityAdvocateFeature}
                        alt="Community Advocate Feature"
                        className="rounded-xl shadow-lg w-full object-contain border border-blue-200"
                    />
                    </a>

                    <p className="text-[#003366] text-md max-w-2xl mb-6">
                    We’re excited to share that Learn It was featured in the{" "}
                    <span className="font-semibold">Community Advocate</span> newspaper!  
                    This article highlights our mission to make STEM more accessible and
                    inspire the next generation of innovators.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Logo */}
                    <img
                        src={communityAdvocateLogo}
                        alt="Community Advocate Logo"
                        className="rounded-xl lg:hidden shadow-lg max-h-28 w-auto border border-blue-200"
                    />

                    {/* Button */}
                    <a
                        href="https://www.communityadvocate.com/education/local-non-profit-organization-created-by-students-for-students/article_a10f414f-9fce-5dfe-a170-8b24c4917baf.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!bg-[#DD6C73] text-white font-bold rounded-lg px-8 py-4 shadow-lg hover:!bg-rose-400 transition text-lg"
                    >
                        Read the Full Article
                    </a>
                    </div>
                </div>
                </div>
            </section>


            {/* Preview of Past Events and any Upcoming Events */}
            <section
                ref={sectionRefs[4]}
                className={`sm:w-full sm:max-w-[90%] mx-auto mb-12 transition-all duration-700 ${visible[4] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <Section4 />
            </section>

            {/* Question Boxes Section */}
            <section
                ref={sectionRefs[5]}
                className={`!w-[80vw] md:!w-[90vw] lg:max-w-[80%] mx-auto mb-12 flex flex-col gap-8 transition-all duration-700 ${visible[5] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Webinar Feedback Box */}
                    <div className="bg-[#FCF2F3] rounded-lg p-8 flex flex-col items-center relative overflow-hidden min-h-[260px]">
                        <div className="absolute top-0 left-0 w-full h-2 bg-rose-400 rounded-t-2xl" />
                        <FaRegCommentDots className="text-rose-400 text-4xl mb-2 mt-2 drop-shadow" />
                        <h3 className="text-[#003366] text-xl font-bold mb-3 text-center">What did you think of our last webinar?</h3>
                        <p className="text-[#003366] text-base mb-4 text-center">We value your feedback! Please let us know your thoughts.</p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSck_HmiJnyruJe4eiXhYN5hiE_MZuAGcz3gLtl2FMr5wEbCMw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#DD6C73] text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:!bg-rose-400 transition text-lg mt-auto"
                        >
                            Leave Feedback
                        </a>
                    </div>
                    {/* Next event Suggestion Box */}
                    <form ref={formRef} onSubmit={sendEmail} className="bg-[#a1acbfc1] !text-white rounded-lg p-8 flex flex-col w-full items-center relative overflow-hidden min-h-[260px]">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[#1C4168] rounded-t-2xl" />
                        <FaLightbulb className="text-[#003366] text-4xl mb-2 mt-2 drop-shadow" />
                        <h3 className="text-[#003366] text-xl font-bold mb-3 text-center">What are you looking for next?</h3>
                        <p className="text-[#003366] text-base mb-4 text-center">Drop your suggestions for future events below!</p>
                        <textarea
                            name="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="!w-[95%] bg-white rounded-lg p-3 text-blue-900 mb-3 resize-none border border-[#003366] focus:outline-none focus:ring-1"
                            rows={3}
                            placeholder="Drop your suggestions..."
                            required
                        />
                        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
                        {status && <div className="text-green-600 text-sm mb-2">{status}</div>}

                        <button className="!text-[#1C4168] !border-[#1C4168] font-bold !px-6 py-3 shadow-lg hover:!bg-[#D9DDE8] transition text-lg mt-auto">Submit</button>
                    </form>
                </div>
            </section>

            {/* Featured Event: Hackathon Section - Redesigned */}
            <div
                ref={sectionRefs[6]}
                className={`bg-white transition-all duration-700 ${visible[6] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <section className="w-[95vw] sm:w-full sm:max-w-[90%] mx-auto flex flex-col items-center">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl flex flex-col md:flex-row border border-[#003366] overflow-hidden">
                        {/* Left: Event Image */}
                        <div className="md:w-1/2 w-full flex items-center justify-center bg-[#003366] p-0 md:p-8">
                            <img src={hackathon} alt="Hackathon" className="rounded-2xl shadow-lg w-full max-w-xs object-cover border border-blue-200 m-6" />
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
                                className="!bg-[#DD6C73] text-white font-bold rounded-lg px-6 py-3 shadow-lg hover:!bg-rose-400 transition text-lg mb-4 w-fit"
                            >
                                View Hackathon Details
                            </a>
                            <div className="mt-2">
                                <h4 className="text-blue-900 text-lg font-semibold mb-2">Sponsors for this event</h4>
                                <div className="flex flex-wrap gap-2">
                                <a href="https://www.anshkeys.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={anshKeysLogo} alt="AnshKeys" className="h-4 w-4 mr-2" />
                                    AnshKeys
                                </a>
                                <a href="https://artofproblemsolving.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={aopsLogo} alt="Art of Problem Solving" className="h-4 w-4 mr-2" />
                                    Art of Problem Solving
                                </a>
                                <a href="https://www.axure.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={axureLogo} alt="Axure" className="h-4 w-4 mr-2" />
                                    Axure
                                </a>
                                <a href="https://www.desmos.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={desmosLogo} alt="Desmos" className="h-4 w-4 mr-2" />
                                    Desmos
                                </a>
                                <a href="https://www.echo3d.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={echoLogo} alt="echo3D" className="h-4 w-4 mr-2" />
                                    echo3D
                                </a>
                                <a href="https://givemycertificate.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={gmcLogo} alt="Give My Certificate" className="h-4 w-4 mr-2" />
                                    Give My Certificate
                                </a>
                                <a href="https://incogni.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={incogniLogo} alt="Incogni" className="h-4 w-4 mr-2" />
                                    Incogni
                                </a>
                                <a href="https://www.interviewcake.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={interviewCakeLogo} alt="Interview Cake" className="h-4 w-4 mr-2" />
                                    Interview Cake
                                </a>
                                <a href="https://kyroz.in/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={kyrozLogo} alt="Kyroz" className="h-4 w-4 mr-2" />
                                    Kyroz
                                </a>
                                <a href="https://nordpass.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={nordPassLogo} alt="NordPass" className="h-4 w-4 mr-2" />
                                    NordPass
                                </a>
                                <a href="https://nordvpn.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={nordVPNLogo} alt="NordVPN" className="h-4 w-4 mr-2" />
                                    NordVPN
                                </a>
                                <a href="https://1password.com/pricing" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={onePasswordLogo} alt="1Password" className="h-4 w-4 mr-2" />
                                    1Password
                                </a>
                                <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={wolframLogo} alt="Wolfram" className="h-4 w-4 mr-2" />
                                    Wolfram
                                </a>
                                <a href="https://gen.xyz/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow font-semibold text-sm hover:bg-blue-200">
                                    <img src={xyzLogo} alt=".xyz" className="h-4 w-4 mr-2" />
                                    .xyz
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Colleges & Companies Section - Enhanced */}
            <div
                ref={sectionRefs[7]}
                className={`bg-white transition-all duration-700 ${visible[7] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-md scale-95'}`}
            >
                <section className="w-[95vw] sm:w-full sm:max-w-[90%] mx-auto mb-20 flex flex-col items-center">
                    <h2 className="!text-[#003366] font-serif font-bold !mt-0 mb-2 text-center tracking-tight">Our Partners in Impact</h2>
                    <p className="text-[#003366] text-lg mb-4 text-center max-w-2xl font-medium">
                        Together with our partners, we're making STEM education accessible for all. <span className="text-[#DD6C73] font-bold">Thank you to our amazing partners for supporting our mission!</span>
                    </p>
                    <div className="w-full overflow-x-auto py-4 justify-center relative">
                            <PartnersSlider partners={partners1} />
                            <PartnersSlider partners={partners2} />
                    </div>
                </section>

                <section>
                    <div className="inline-flex">
                        <div className="mt-12 flex flex-col items-center w-full gap-4 text-center bg-[#F9FAFB] py-10 px-6 rounded-2xl">
                        <h3 className="text-[#003366] text-2xl md:text-3xl font-extrabold">
                            Your Next Chapter in STEM Starts Here
                        </h3>
                        <p className="text-[#003366] text-base md:text-lg leading-relaxed">
                            At <span className="font-semibold text-[#DD6C73]">Learn It</span>, we’re not just running programs—
                            we’re building opportunities. Here, your ideas matter, your skills grow, and your work sparks lasting
                            change. Whether it’s mentoring students, launching new initiatives, or partnering with mission-driven
                            teams, you’ll be part of something bigger—making STEM accessible for every learner.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-5">
                            <button
                            onClick={() => { navigate('/contact-us'); }}
                            className="inline-block bg-[#DD6C73] text-white font-bold rounded-lg px-7 py-3 shadow hover:bg-rose-600 transition text-lg"
                            >
                            Partner with Us
                            </button>
                            <button
                            onClick={() => { navigate('/our-team'); }}
                            className="inline-block bg-[#003366] text-white font-bold rounded-lg px-7 py-3 shadow hover:bg-[#002244] transition text-lg"
                            >
                            Meet the Team
                            </button>
                        </div>
                        </div>

                        <div className=" hidden lg:inline-block h-cover min-h-[1em] w-0.5 self-stretch bg-[#003366]"></div>
        
                        <img 
                            src={learnItLogo} 
                            alt="Learn It Logo" 
                            className="hidden lg:block !max-h-90 !max-w-90 my-auto"
                        />
                </div>
                </section>
            </div>

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