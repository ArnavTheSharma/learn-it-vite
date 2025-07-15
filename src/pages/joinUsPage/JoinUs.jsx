import "../../App.css";
import "./JoinUs.css";
import { BsExclamationCircle } from "react-icons/bs";
import { FaPeopleGroup, FaSuitcase } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function JoinUs() {
    const [general,setGeneral]=useState(false)
    const [volunteer,setVolunteer]=useState(false)
    const [positions,setPositions]=useState(false)
    const [rebrand,setRebrand]=useState(false)
    return (
        <div className="joinContainer max-w-[1400px] w-[100%] flex flex-col justify-center items-center mx-auto">
            <div className="flex justify-center items-center">
                <div className=" flex justify-center flex-col ">
                    <h1 className="pageTitle">Join Us</h1>
                    <h4 className="text-center my-0 px-4 text-balance">By joining our organization, you can receive verified volunteer/service hours, valuable leadership experience, and make an impact in your community!</h4>
                    <div className=" flex justify-center my-5">
                        {/* <button type="button" className="messageButton rounded-full bg-[#31478600] text-[#314786] text-lg w-[fit-content] py-2">Get Involved Today</button> */}
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-normal w-[70vw] sm:w-[50vw] lg:w-[90%] lg:flex-nowrap my-4 mx-0 flex-wrap gap-x-4 md:gap-x-2 gap-y-4 pb-10 h-3/6">
                <div className="bucket1 flex justify-center items-center flex-col bg-white px-6 py-10 sm:py-3 sm:h-full lg:w-[30vw]">
                    <FaPeopleGroup />
                    <h5 className="my-2 text-center">General member application</h5>
                    <h5 className="font-light my-2 text-center">Volunteer with Learn It to give back to your community and earn certified hours for NHS or other service requirements!</h5>
                    <button type="button" className="rounded-3xl font-normal bg-[#314786] text-white text-base w-[fit-content] border-none py-2 hover:cursor-pointer"
                        onClick={()=>setGeneral(true)}
                    >
                        Apply
                    </button>
                </div>
                <div className="bucket2 flex justify-center items-center flex-col bg-white px-6 py-10 sm:py-3 sm:h-full lg:w-[30vw]">
                    <MdVolunteerActivism />
                    <h5 className="my-2">Volunteer Sign up</h5>
                    <h5 className="font-light my-2 text-center">
                        Consider joining our incredible team of volunteers (and get certified volunteer hours!) or apply for any executive board position openings! 
                    </h5>
                    <button type="button" className="rounded-3xl font-normal bg-[#314786] text-white text-base w-[fit-content] border-none py-2 hover:cursor-pointer"
                        onClick={()=>setVolunteer(true)}>
                        More
                    </button>
                </div>
                <div className="bucket3 flex justify-center items-center flex-col bg-white px-6 py-10 sm:py-3 sm:h-full lg:w-[30vw] ">
                    <FaSuitcase />
                    <h5 className="my-2 text-center">New position openings</h5>
                    <h5 className="font-light my-2 mt-0 text-center">
                        Learn It is hiring an International Relations Manager and Social Media Co-Manager to expand global reach and manage content for volunteer hours!
                    </h5>
                    <button type="button" className="rounded-3xl font-normal bg-[#314786] text-white text-base w-[fit-content] border-none py-2 hover:cursor-pointer"
                        onClick={()=>setPositions(true)}
                    >
                        More
                    </button>
                </div>
                {/* <div className="bucket4 flex justify-center items-center flex-col bg-white px-6 py-3 sm:h-full xl:w-[24%]  lg:w-[20%] md:w-[18%] sm:w-[40%] w-[100%] ">
                    <BsExclamationCircle />
                    <h5 className="my-2 text-center"><span>NEW Opportunity!</span> Join our website rebranding team</h5>
                    <h5 className="font-light my-2 text-center">
                    We are thrilled to share that Learn It is embarking on an exciting project to improve our website, and we need your help.
                    </h5>
                    <button type="button" className="rounded-3xl font-normal bg-[#314786] text-white text-base w-[fit-content] border-none py-2 hover:cursor-pointer"
                        onClick={()=>setRebrand(true)}
                    >
                        More
                    </button>
                </div> */}
            </div>
            {/* Modal for general membership */}
            <Modal open={general} change={setGeneral}>
                <p>Integrated form will be available soon, please fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeEdhXjwm2WP-_6tFYKegiToCikM93qCdg5r4G3dBsWXhcDg/viewform" target="_blank">google form</a></p>
            </Modal>
            {/* Modal for volunteers */}
            <Modal open={volunteer} change={setVolunteer}>
                <h5>Volunteer Sign Up</h5>
                <ul>
                    <li>
                    Want to make an impact in your community all while improving that resumé? Consider joining our 
                    incredible team of volunteers (and get certified volunteer hours!) 
                    or apply for any executive board position openings! <a href="https://docs.google.com/forms/d/e/1FAIpQLSfpXgiOqyChZjeGbwQFzV4z08Qyn-r9kAKj8pWbEvkaqAvZ6g/viewform" target="_blank"> Volunteer Sign Up Form</a> 
                    </li>
                    <li>
                    As Learn It is now certified, the volunteer hours you gain by contributing to our organization will have that much more merit! 
                    Below is the volunteer sign-up form. There are various volunteer opportunities with different levels of commitment 
                    so you can choose one that is right for you! These hours will help you as you prepare to apply for NHS, 
                    or if you are already in NHS or another community service organization, these hours will count towards that as well. 
                    Please forward this form to anyone you may 
                    know who is in need of volunteer hours and do not hesitate to reach out with any questions, concerns, or feedback! 
                    </li>
                </ul>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfpXgiOqyChZjeGbwQFzV4z08Qyn-r9kAKj8pWbEvkaqAvZ6g/viewform" target="_blank" className="ml-10">Sign Up</a>
            </Modal>
            {/* Modal for open positions */}
            <Modal open={positions} change={setPositions}>
                <h5>New position openings</h5>
                <ul>
                    <li>
                    International Relations Manager: Learn It is officially opening up a new role, an International Manager. 
                    As Learn It continues to grow worldwide, we are looking for a candidate who can start new chapters of 
                    Learn It around the world with a team of ambassadors
                     that they will work with, ultimately increasing the total number of members of Learn It. Interested? <a href="https://docs.google.com/forms/d/e/1FAIpQLScaN-KBg3d1NcdeD0SaPU14FC1-4xhCBsbb-hSCLXjS2NYS-w/viewform?usp=sf_link" target="_blank">Apply</a> 
                    </li>
                    <li>
                    Social media co-manager: The social media co-manager will have access to our TikTok, Instagram, 
                    Facebook, and Youtube accounts and will receive 1 volunteer hour for every 2 posts. 
                    This also serves as a great leadership role as Learn It is continuing to expand globally. <a href="https://docs.google.com/forms/d/e/1FAIpQLScfzfA5vRGjasF1_9zzx-qOH_LCMj82ZgDMuBi-Zf-9-4NHOA/viewform" target="_blank">Apply</a> 
                        <ul><li>Responsibilities Include:</li></ul>
                        <ol>
                            <li>
                            Dedicating at least 2-4 hrs/week to the role.
                            </li>
                            <li> Being able to post/publish 3-4 times on TikTok every week.</li>
                            <li>Collaborating with Mariah Boyce, who would be your social media co-manager.</li>
                            <li> Communicating with the founders about availability for Executive Committee meetings.</li>
                            <li>Creating creative, entertaining, and respectful posts/content.</li>
                        </ol>
                    </li>
                </ul>
            </Modal>
            {/* Modal for rebranding team */}
            <Modal open={rebrand} change={setRebrand}>
                <h5>NEW Opportunity: Join Our Website Rebranding Team!</h5>
                <ul>
                    <li>
                    We are thrilled to share that Learn It is embarking on an exciting 
                    project to remake our website, and we need your help. We are looking for talented frontend and backend 
                    developers to join our team and contribute to this important initiative. 
                    </li>
                    <li>
                    If you are interested in gaining valuable volunteer hours, enhancing your resume, and 
                    opening doors to future leadership positions, we would love to have you on board.
                    This is a fantastic opportunity to apply your skills, collaborate with a passionate team, and make a meaningful impact.
                    </li>
                    <li>
                        <a href="../contact-us">
                        Please contact us, and we will forward it to our tech lead for further coordination.
                        </a>
                    </li>
                    <p>
                    Thank you for your continued support and dedication to Learn It's mission. We look forward to hearing from you soon!
                    </p>
                </ul>
            </Modal>
        </div>
    );
}


export default JoinUs;