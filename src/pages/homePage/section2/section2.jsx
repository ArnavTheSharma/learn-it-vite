  import "./section2.css";
  import Certification1 from "./501c3.png";
  import Certification2 from "./CMHQ.png";
  import { TypeAnimation } from 'react-type-animation';
  import { FaHandshake } from "react-icons/fa";
  import { MdVolunteerActivism } from 'react-icons/md';
  import { FcConferenceCall } from 'react-icons/fc';
  import { useState } from 'react';
  import CountUp from "react-countup";
  import { useInView } from 'react-intersection-observer';




  function Section2() {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
      });

      const [members,setMembers]=useState(1000)
      const [partners,setPartners]=useState(100)
      const [countries,setCountries]=useState(50)
      // let members = 1000;
      // let partners = 100;
      // let countries = 50;
      
      // const handlePartnersClick=()=>{
      //     const target=document.getElementById('partners')
      //     target.scrollIntoView({behavior:'smooth'})
      //     // window.scrollTo()
      // }

      return(
          <>
          <div className="section2Container overflow-hidden mb-16 bg-white">
              {/* About Learn It + Mission + Certification*/}
              {/* <TypeAnimation
                  sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Our Journey',
                      3000, // wait 3s 
                      'Our Mission',
                      3000,
                      'Our Impact',
                      3000
                  ]}
                  wrapper="span"
                  speed={10}
                  className="title"
                  repeat={Infinity}
              /> */}
              <h2 className="title">Breaking Barriers, Building Futures</h2>

              {/* <h2 className="title">Our Story</h2> */}
              <p className="text text-[13px] sm:text-[2.5vw] md:text-[1.7vw] font-medium ">Learn It began as a small passion project from three high school sophomores who wanted to break barriers in STEM education and career-exploration. Now, we have grown to be a 1000-member-plus 501(c)(3) nonprofit with various international platforms!</p>

              
              <div className="middle">
                  <img src={Certification1}></img>
              </div>


              <div className="right">
                  <img src={Certification2} alt="CMHQ Verification Badge"></img>
              </div>


            <div className="statistics absolute lg:relative invisible lg:visible lg:w-full align-items:stretch justify-center flex flex-wrap gap-4">
              {/* Common card classes */}
              {[
                { icon: <FaHandshake className="text-white text-2xl md:text-3xl" />, key:1, value: partners, label: "NGO Partners", bg: "bg-[#1A2447]" },
                { icon: <MdVolunteerActivism className="text-white text-2xl md:text-3xl" />, key:2, value: members, label: "Members", bg: "bg-[#c4a77d]" },
                { icon: <FcConferenceCall className="text-white text-2xl md:text-3xl" />, key:3, value: countries, label: "Countries", bg: "bg-[#1A2447]" },
              ].map(({ icon, value, label, bg, key }) => (
                <div
                  key={key}
                  className={`${bg} min-w-[130px] max-w-[20vw] w-full sm:w-[30%] p-4 h-fit rounded-md flex flex-col items-center`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {icon}
                    <div ref={ref}>
                      <p className="text-white font-bold text-xl md:text-2xl">
                        {inView ? <CountUp start={0} end={value} duration={2.5} /> : `${value}`}+
                      </p>
                    </div>
                  </div>
                  <p className="text-white font-medium text-sm mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
          </>
      );
  }

  export default Section2;