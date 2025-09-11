import "../../App.css";
import "./JoinUs.css";
import { BsExclamationCircle } from "react-icons/bs";
import { FaPeopleGroup, FaSuitcase } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";


function JoinUs() {
    const [general, setGeneral] = useState(false);
    const [volunteer, setVolunteer] = useState(false);
    const [positions, setPositions] = useState(false);
    const [rebrand, setRebrand] = useState(false);
    return (
        <div className="joinContainer flex flex-col items-center py-4 px-2">
            {/* Header Section */}
            <div className="w-[95%] sm:max-w-[90%] mx-auto flex flex-col items-center mb-6">
                <h1 className="pageTitle font-serif font-bold text-[#003366] text-5xl md:text-6xl text-center mb-4 drop-shadow">Join Us</h1>
                <h4 className="text-center text-xl text-[#003366] mb-8 max-w-3xl font-medium">
                    Want to make an impact in your community all while improving that resumé? Consider joining our incredible team of volunteers for certified volunteer hours or apply for any executive board position openings! 
                </h4>
            </div>
            {/* Application Cards Section */}
            <div className="w-[95%] sm:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                <div className="flex flex-col items-center bg-white rounded-3xl shadow p-10 border-2 border-[#336699] hover:shadow-lg transition-all duration-200">
                    <FaPeopleGroup className="text-[#003366] text-5xl mb-4" />
                    <h5 className="text-2xl font-bold text-[#003366] mb-2 text-center tracking-tight">General Member Form</h5>
                    <p className="font-light text-gray-700 mb-6 text-center text-pretty text-base">Fill out this form once to become a member and unlock access to our webinars, volunteer opportunities, and resources</p>
                    <button type="button" className="rounded-full font-semibold bg-[#003366] text-white text-base px-8 py-2 mt-auto hover:bg-[#002244] transition-colors shadow" onClick={() => setGeneral(true)}>
                        Apply
                    </button>
                </div>
                <div className="flex flex-col items-center bg-white rounded-3xl shadow p-10 border-2 border-[#336699] hover:shadow-lg transition-all duration-200">
                    <MdVolunteerActivism className="text-[#003366] text-5xl mb-4" />
                    <h5 className="text-2xl font-bold text-[#003366] mb-2 text-center tracking-tight">Volunteer Sign Up</h5>
                    <p className="font-light text-gray-700 mb-6 text-center text-pretty text-base">Volunteer with Learn It to give back to your community and earn certified hours for NHS or other service requirements</p>
                    <button type="button" className="rounded-full font-semibold bg-[#003366] text-white text-base px-8 py-2 mt-auto hover:bg-[#002244] transition-colors shadow" onClick={() => setVolunteer(true)}>
                        More
                    </button>
                </div>
                <div className="flex flex-col items-center bg-white rounded-3xl shadow p-10 border-2 border-[#336699] hover:shadow-lg transition-all duration-200">
                    <FaSuitcase className="text-[#003366] text-5xl mb-4" />
                    <h5 className="text-2xl font-bold text-[#003366] mb-2 text-center tracking-tight">New Position Openings</h5>
                    <p className="font-light text-gray-700 mb-6 text-center text-pretty text-base">Learn It is hiring a website backend developer, an Media Manager, and an Events Manager to expand global reach and manage content for volunteer hours</p>
                    <button type="button" className="rounded-full font-semibold bg-[#003366] text-white text-base px-8 py-2 mt-auto hover:bg-[#002244] transition-colors shadow" onClick={() => setPositions(true)}>
                        More
                    </button>
                </div>
            </div>
            {/* Modals - Unified, Harmonious Layout */}
            <Modal open={general} change={setGeneral}>
                <div className="">
                    <h3 className="text-2xl font-bold text-[#003366] mb-3 text-center">General Member Application</h3>
                    <p className="text-gray-700 text-base text-center">Integrated form will be available soon.<br/>Please fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeEdhXjwm2WP-_6tFYKegiToCikM93qCdg5r4G3dBsWXhcDg/viewform" target="_blank" className="text-[#003366] underline hover:text-[#336699] font-semibold">Google Form</a>.</p>
                </div>
            </Modal>
            <Modal open={volunteer} change={setVolunteer}>
                <div className="overflow-y-auto">
                    <h3 className="text-2xl font-bold text-[#003366] mb-3 text-center">Volunteer Sign Up</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-3 text-base">
                        <li className="mb-2">Want to make an impact in your community and improve your resumé? Join our incredible team of volunteers (and get certified volunteer hours!) or apply for any executive board position openings! <a href="https://docs.google.com/forms/d/e/1FAIpQLSfpXgiOqyChZjeGbwQFzV4z08Qyn-r9kAKj8pWbEvkaqAvZ6g/viewform" target="_blank" className="text-[#003366] underline hover:text-[#336699] font-semibold">Volunteer Sign Up Form</a></li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfpXgiOqyChZjeGbwQFzV4z08Qyn-r9kAKj8pWbEvkaqAvZ6g/viewform" target="_blank" className="bg-[#003366] text-white font-bold rounded-full px-7 py-2 shadow hover:bg-[#002244] transition text-base">Sign Up</a>
                    </div>
                </div>
            </Modal>
            <Modal open={positions} change={setPositions}>
                <div className="overflow-y-auto">
                    <h3 className="text-2xl font-bold text-[#003366] mb-3 text-center">New Position Openings</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-3 text-base">
                        <li className="mb-2">See something we missed? If you enjoy ReactJS or NodeJS, we’d love your help making this site even better in exchange for volunteer hours! <a href="https://forms.gle/SgTgR6mwi97PKN3RA" target="_blank" className="text-[#003366] underline hover:text-[#336699] font-semibold">Apply</a></li>
                        <li className="mb-2">
                        Media Manager: Help Learn It grow by managing social media, creating engaging posts, blogs, and graphics with tools like Canva or Capcut. { }
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJOukeulEUBbSGb2QFT8WQdizU0-9f4bjtkwRtbgW7GW7SGg/viewform" target="_blank" className="text-[#003366] underline hover:text-[#336699] font-semibold">Apply</a>
                        </li>
                        <li className="mb-2">
                        Events Manager: Coordinate and oversee Learn It’s competitions, events, and webinars while working with a team to grow the community. { }
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdA07ckwnqKseAaXrxkYpf75U8vbLFx2X8__a0WPVoDZmoWlw/viewform" target="_blank" className="text-[#003366] underline hover:text-[#336699] font-semibold">Apply</a>
                        </li>
                    </ul>
                </div>
            </Modal>
            <Modal open={rebrand} change={setRebrand}>
                <div className="p-6 max-w-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-3 text-center">NEW Opportunity: Join Our Website Rebranding Team!</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-3 text-base">
                        <li>We are thrilled to share that Learn It is embarking on an exciting project to remake our website, and we need your help. We are looking for talented frontend and backend developers to join our team and contribute to this important initiative.</li>
                        <li>If you are interested in gaining valuable volunteer hours, enhancing your resume, and opening doors to future leadership positions, we would love to have you on board. This is a fantastic opportunity to apply your skills, collaborate with a passionate team, and make a meaningful impact.</li>
                        <li><a href="../contact-us" className="text-[#003366] underline hover:text-[#336699] font-semibold">Please contact us</a>, and we will forward it to our tech lead for further coordination.</li>
                    </ul>
                    <p className="text-gray-700 text-center">Thank you for your continued support and dedication to Learn It's mission. We look forward to hearing from you soon!</p>
                </div>
            </Modal>
        </div>
    );
}


export default JoinUs;