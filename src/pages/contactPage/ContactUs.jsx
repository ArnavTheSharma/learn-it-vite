import { CgMail } from 'react-icons/cg';
import './ContactUs.css'
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa6';
import logo from '../../companyLogos/learn-it-icon-transparent.png'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import  { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";




function ContactUs() {
    const [showFounders, setShowFounder] = useState(false);
    const [showSMM, setShowSMM] = useState(false);
    const [showComCo, setShowComCo] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef();
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

    
    return (
        <div className="contactUsPageContainer !w-full items-center sm:py-12 py-6 px-2">
            <div className="w-full sm:max-w-4xl max-w-[95%]  mx-auto flex flex-col md:flex-row gap-10 items-stretch">
                {/* Contact Card */}
                <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center border border-[#336699] mb-8 md:mb-0">
                    <img src={logo} className='w-24 h-24 object-contain mb-4 drop-shadow' alt="Learn It Logo" />
                    <h2 className="text-3xl font-extrabold text-[#003366] mb-2 tracking-tight text-center">Contact Us</h2>
                    <p className="text-base text-[#003366] mb-6 text-center font-medium">We'd love to hear from you! Reach out for questions, partnership, or to get involved.</p>
                    <form ref={formRef} className="w-full flex flex-col gap-4" onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className="bg-[#eaf1fa] !w-full border border-[#b3c6e0] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#336699] text-[#003366]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="bg-[#eaf1fa] !w-full border border-[#b3c6e0] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#336699] text-[#003366]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        className="bg-[#eaf1fa] !w-full border border-[#b3c6e0] rounded-xl px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#336699] text-[#003366]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
                    {status && <div className="text-green-600 text-sm mb-2">{status}</div>}

                    <button
                        type="submit"
                        className="rounded-full font-bold !bg-[#003366] cursor-pointer !text-white text-lg px-8 py-2 hover:!bg-[#002244] transition-colors w-full shadow"
                    >
                        SEND
                    </button>
                    </form>
                </div>
                {/* Info Card */}
                <div className="flex-1 bg-[#f5f8fc] rounded-3xl shadow-xl p-10 flex flex-col gap-6 border border-[#b3c6e0]">
                    <div className="flex flex-col gap-3">
                        <div className='bg-white rounded-xl p-4 text-base flex items-center gap-x-2 shadow-sm'>
                            <span className="smallText font-semibold text-[#003366] flex items-center gap-x-1">Email <CgMail /></span>
                            <a className="infoText smallText text-[#003366] underline hover:text-[#336699] ml-1 " href="mailto:information.learnit@gmail.com">information.learnit@gmail.com</a>
                        </div>
                        <div className='bg-white rounded-xl p-4 text-base flex items-center gap-x-2 shadow-sm'>
                            <span className="smallText font-semibold text-[#003366] flex items-center gap-x-1">Instagram <BsInstagram /></span>
                            <a className="smallText infoText text-[#003366] underline hover:text-[#336699] ml-1" href="https://www.instagram.com/learn.it_academics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@learn.it_academics</a>
                        </div>
                        <div className='bg-white rounded-xl p-4 text-base flex items-center gap-x-2 shadow-sm'>
                            <span className="smallText font-semibold text-[#003366] flex items-center gap-x-1">Tiktok <FaTiktok /></span>
                            <a className="smallText infoText text-[#003366] underline hover:text-[#336699] ml-1" href="https://www.tiktok.com/@learn.it_academics?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">@learn.it_academics</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-2">
                        {/* Co-Founders Dropdown */}
                        <div className='bg-white rounded-xl p-4 relative shadow-sm'>
                            <button type="button" className="w-full cursor-pointer flex items-center justify-between text-base font-bold text-[#003366] focus:outline-none transition-colors hover:bg-[#eaf1fa] rounded-lg px-2 py-1" onClick={() => setShowFounder((v) => !v)}>
                                <span className="smallText flex items-center text-sm gap-x-1">Email <CgMail />Co-Founders</span>
                                {showFounders ? <MdKeyboardArrowUp className='text-xl' /> : <MdKeyboardArrowDown className='text-xl' />}
                            </button>
                            {showFounders && (
                                <div className="mt-3 flex flex-col gap-1 animate-fade-in">
                                    <a href="mailto:piyusha.majgaonkar@gmail.com" className="smallText infoText text-[#003366] underline hover:text-[#336699]">piyusha.majgaonkar@gmail.com</a>
                                    <a href="mailto:sunainapal2006@gmail.com" className="smallText infoText text-[#003366] underline hover:text-[#336699]">sunainapal2006@gmail.com</a>
                                    <a href="mailto:itsaryandas15@gmail.com" className="smallText infoText text-[#003366] underline hover:text-[#336699]">itsaryandas15@gmail.com</a>
                                </div>
                            )}
                        </div>
                        {/* Social Media Manager Dropdown */}
                        <div className='bg-white rounded-xl p-4 relative shadow-sm'>
                            <a href="mailto:mariahboyce3@gmail.com"><button type="button" className="w-full cursor-pointer flex items-center justify-between text-base font-bold text-[#003366] focus:outline-none transition-colors hover:bg-[#eaf1fa] rounded-lg px-2 py-1" onClick={() => setShowSMM((v) => !v)}>
                                <span className="smallText flex items-center  text-sm gap-x-1">Email <CgMail />Social Media Manager</span>
                            </button></a>
                        </div>
                        {/* Communications Coordinator Dropdown */}
                        <div className='bg-white rounded-xl p-4 relative shadow-sm'>
                            <a href="mailto:meravsriram@gmail.com"><button type="button" className="w-full  flex items-center justify-between !text-sm font-bold text-[#003366] focus:outline-none transition-colors hover:bg-[#eaf1fa] rounded-lg px-2 py-1" onClick={() => setShowComCo((v) => !v)}>
                                <span className="smallText flex items-center gap-x-1">Email<CgMail />Communications Coordinator</span>
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;