import { CgMail } from 'react-icons/cg';
import './ContactUs.css'
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa6';
import logo from '../../companyLogos/learn-it-icon-transparent.png'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

function ContactUs() {
    const [showFounders,setShowFounder]=useState(false)
    const [showSMM,setShowSMM]=useState(false)
    const [showComCo,setShowComCo]=useState(false)
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [error,setError]=useState('')
    const handleSend=(e)=>{
        e.preventDefault()
        try {
            console.log(email,message)
        } catch (error) {
           setError(error)
           console.log(error) 
        }
    }
    return(
       <div className="contactUsPageContainer md:flex w-[fit-content] h-[100%] sm:mx-auto justify-center items-start p-6 sm:py-12">
            <div className="form bg-[white] md:w-1/2 sm:w-1/2 w-[fit-content] p-10 h-[100%]">
                <div className='flex justify-center items-center'> <img src={logo} className='w-[28%]' /> </div>
                <h3 className="contact-title">Contact Us</h3>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" placeholder="Your Email" className="bg-[#DAB8C5] w-[90%] border-white pl-4" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <label htmlFor="message">
                    <textarea name="message" id="message" placeholder="Your Message" className="bg-[#DAB8C5] w-[90%] border-white pl-4" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </label>
                <button type="submit" className="p-4 py-2 text-lg bg-[#DAB8C5] w-full border-white" onClick={(e)=>handleSend(e)}>SEND</button>
            </div>
            <div className="info bg-[#DAB8C5] md:w-3/5 sm:w-1/2 w-[fit-content] p-10 h-[100%]">
                <div>
                    <p className='bg-white rounded-lg p-4 text-sm flex items-center gap-x-1 hover:cursor-pointer text-wrap'><span>Email <CgMail /></span>:<a className="infoText" href="mailto:information.learnit@gmail.com">information.learnit@gmail.com</a>   </p>
                    <p className='bg-white rounded-lg p-4 text-xs flex items-center gap-x-1 hover:cursor-pointer'> <span> DM us on Instagram <BsInstagram />:</span> <span><a className="infoText" href="https://www.instagram.com/learn.it_academics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">@learn.it_academics</a></span>   </p>
                    <p className='bg-white rounded-lg p-4 text-sm flex items-center gap-x-1 hover:cursor-pointer'>DM us on Tiktok <FaTiktok />:  <a className="infoText" href="https://www.tiktok.com/@learn.it_academics?is_from_webapp=1&sender_device=pc" target="_blank">@learn.it_academics</a> </p> 
                </div>
                <div>
                    <div className='bg-white rounded-lg p-4 relative mb-3'>
                        <p className=' text-sm flex items-center gap-x-1 justify-between hover:cursor-pointer my-0'>
                            <span>Email <CgMail /> the Co-Founders</span> 
                            {!showFounders && <MdKeyboardArrowDown className='text-base' onClick={()=>setShowFounder(true)} />} 
                            {showFounders && <MdKeyboardArrowUp className='text-base' onClick={()=>setShowFounder(false)} />} 
                        </p>
                        { showFounders &&
                            <div class="absolute top-[3em] left-0 z-10 origin-left w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1 pl-4" role="none">
                                <a className="infoText" href="mailto:piyusha.majgaonkar@gmail.com" class="infoText block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">piyusha.majgaonkar@gmail.com</a>

                                <a className="infoText" href="mailto:sunainapal2006@gmail.com" class="infoText block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">sunainapal2006@gmail.com</a>

                                <a className="infoText" href="mailto:itsaryandas15@gmail.com" class="infoText block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">itsaryandas15@gmail.com</a>
                            </div>
                        </div>}
                    </div>
                    <div className='bg-white rounded-lg p-4 relative mb-3'>
                        <p className=' text-sm flex items-center gap-x-1 justify-between hover:cursor-pointer my-0'>
                            <span>Email <CgMail /> the Social Media Manager</span> 
                            {!showSMM && <MdKeyboardArrowDown className='text-base' onClick={()=>setShowSMM(true)} />} 
                            {showSMM && <MdKeyboardArrowUp className='text-base' onClick={()=>setShowSMM(false)} />} 
                        </p>
                        { showSMM &&
                            <div class="absolute top-[3em] z-10 left-0 origin-left w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1 pl-4" role="none">
                            <a href="mailto:mariahboyce3@gmail.com" class=" infoText block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">mariahboyce3@gmail.com</a>
                            </div>
                        </div>}
                    </div>
                    <div className='bg-white rounded-lg p-4 relative mb-3'>
                        <p className=' text-xs flex items-center gap-x-1 justify-between hover:cursor-pointer my-0'>
                            <span>Email <CgMail /> the Communications Coordinator</span>
                            {!showComCo && <MdKeyboardArrowDown className='text-base' onClick={()=>setShowComCo(true)} />} 
                            {showComCo && <MdKeyboardArrowUp className='text-base' onClick={()=>setShowComCo(false)} />} 
                        </p>
                        { showComCo &&
                            <div class="absolute top-[3em] z-10 left-0 origin-left w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1 pl-4" role="none">
                            <a href="mailto:meravsriram@gmail.com" class="infoText block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">meravsriram@gmail.com</a>
                            </div>
                        </div>}
                    </div>
                </div>
                {/* <div class="relative inline-block text-left w-full">
                    <div className='w-full'>
                        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm border-white hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Options
                        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
                        </div>
                        <div class="py-1" role="none">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
                        </div>
                        <div class="py-1" role="none">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
                        </div>
                        <div class="py-1" role="none">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
                        </div>
                    </div>
                </div> */}

            </div>
       </div> 
    );
}

export default ContactUs;