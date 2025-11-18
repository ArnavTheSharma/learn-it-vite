import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaTiktok, FaInstagram, FaFacebook, FaLink } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import logo from "../../companyLogos/learn-it-icon-transparent.png";

function Footer() {
    return (
        <footer className="bg-[#003366]">
            <div className="sm:max-w-[90%] mx-auto w-full  border-rose-200 mt-12">
                <div className="w-full px-4 py-10 sm:py-12 grid grid-cols-2 sm:grid-cols-3 sm:gap-8 text-center md:text-left">
                    {/* Brand & Copyright */}
                    <Link to="/" className="flex flex-col items-center md:items-start width-fit gap-2">
                        <img className="logo sm:!h-24" src={logo}></img>
                        <div className="text-4xl font-bold !text-rose-500 tracking-wide width-full mb-1">Learn It</div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden sm:flex flex-col gap-2 items-center">
                        <span className="font-semibold text-white mb-1">Quick Links</span>
                        <Link to="/" className="text-white hover:text-rose-500 transition">Home</Link>
                        <Link to="/events" className="text-white hover:text-rose-500 transition">Events</Link>
                        <Link to="/join-us" className="text-white hover:text-rose-500 transition">Join Us</Link>
                        <Link to="/our-team" className="text-white hover:text-rose-500 transition">Our Team</Link>
                        <Link to="/contact-us" className="text-white hover:text-rose-500 transition">Contact Us</Link>
                    </div>

                    {/* Social & Email */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <span className="font-semibold w-full text-white mb-1 text-center">Connect</span>
                        <div className="flex flex-col w-full items-center justify-center gap-4 mb-2">
                            <a href="https://discord.com/invite/cD9645WNYr" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-base text-center flex items-center gap-x-2 text-white hover:text-indigo-500 transition"><FaDiscord /> Discord</a>
                            <a href="https://www.tiktok.com/@learn.it_academics" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="text-base flex items-center gap-x-2 text-white hover:text-black transition"><FaTiktok /> Tiktok</a>
                            <a href="https://www.instagram.com/learn.it_academics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-base flex items-center gap-x-2 text-white hover:text-pink-500 transition"><FaInstagram /> Instagram</a>
                            <a href="https://www.facebook.com/groups/276584458322427/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-base flex items-center gap-x-2 text-white hover:text-blue-600 transition"><FaFacebook /> Facebook</a>
                            <a href="https://linktr.ee/learnitacademics" target="_blank" rel="noopener noreferrer" aria-label="Linktree" className="text-base flex items-center gap-x-2 text-white hover:text-green-500 transition"><FaLink /> Link tree</a>
                            <a href="mailto:information.learnit@gmail.com" className="text-base flex items-center gap-x-2 text-white hover:text-pink-500 transition"> <CiMail /> Email</a>                         
                        </div>
                    </div>
                </div>
                <hr className="text-white bg-white  !w-full" />
                <p className="text-sm text-center text-gray-300 py-2">©2025 Learn It. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
