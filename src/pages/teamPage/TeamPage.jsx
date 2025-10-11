import React from 'react';
import "../../App.css";
import "./TeamPage.css";

import Daniel from "./teamImages/danielImage.jpeg";
import Himal from "./teamImages/himalImage.png";
import Merav from "./teamImages/meravImage.jpeg";
import Owen from "./teamImages/owenImage.jpeg";
import Sid from "./teamImages/sidImage.jpeg";
import Placeholder from "./teamImages/placeholderImage.png";

const teamMembers = [
    {
        name: 'Himal Bokka',
        email: 'himalkumar2020@gmail.com',
        role: 'Co-President',
        img: Himal,
        description: 'Hi, I’m Himal Bokka, the Co-President of Learn It and a student at Carmel High School. I’m passionate about expanding STEM and career education opportunities and want to have a lasting impact through this organization. At school, I’m involved in HOSA, track and field, and other medical-related activities. I enjoy collaborating with others to bring new ideas and initiatives to bigger causes. My goal is to grow Learn It into a global platform that provides meaningful and accessible opportunities for all students.',
    },
    {
        name: 'Merav Sriram',
        email: 'meravsriram@gmail.com',
        role: 'Co-President',
        img: Merav,
        description: 'Merav Sriram is the current Co-President of Learn It, where he is dedicated to expanding access to educational resources worldwide. At Westborough High School, he serves as President of both the DECA Chapter and the Entrepreneurship Club, leading peers in business, innovation, and leadership. Beyond academics, Merav plays Varsity Soccer and enjoys staying active through sports. In his free time, he loves listening to music, which fuels his creativity and focus. Passionate about making a lasting difference, Merav sees Learn It as the perfect platform to scale his mission globally—where LearnIt\'s efforts and impact are already gaining international recognition.',
    },
    {   
        name: 'Daniel Zhang',
        email: 'DanielZhang2010@icloud.com',
        role: 'Outreach Manager',
        img: Daniel,
        description: 'Hi, I’m Daniel Zhang. I am the lead Outreach manager in Learn It. I am from Carmel High School and I am in 10th grade. I have a passion for science, specifically Chemistry and I like to play soccer and video games. I joined this nonprofit organization to help students who are confused on which path to take and influence them to take the right path with confidence.',
    },
    {   
        name: 'Sid Gowda',
        email: null,
        role: 'Outreach Manager',
        img: Sid,
        description: 'Hi, I’m Sid Gowda. I am the Outreach Manager for Learn It. I go to school at Carmel High School, and I am in 10th grade. Currently, I am a premedical student who is passionate about biology and research. In my free time, I like to play tennis and video games. I also enjoy running. I joined this nonprofit organization to help students in high school who have not yet decided on a career path or need some guidance to find the best one.',
    },
    {   
        name: 'Owen Lodato',
        email: null,
        role: 'Media Manager',
        img: Owen,
        description: 'Hi, I’m Owen Lodato, a sophomore at Carmel High School, and I am a social media manager for Learn It. In the future, I have a passion to be a marketing manager for a large business or company. I joined this organization so I could help students and young adults who are confused or uncertain about their future careers.',
    },

];

const categories = [
    "President",
    "Outreach",
    "Media",
]


const Team = () => {
    return (
        <div className="teamPageContainer flex flex-col items-center bg-gradient-to-b from-blue-50 to-white min-h-screen py-8">
            <div className="w-full sm:max-w-[90%] mx-auto px-4">
                <h1 className="pageTitle font-serif font-bold text-blue-900 text-4xl md:text-5xl text-center mb-10 drop-shadow-sm">Meet The Team</h1>

                {categories.map(roleCategory => {
                    return (
                    <div key={roleCategory}>
                        <div className="text-center text-4xl font-bold text-gray-700 mb-4 tracking-tight">{roleCategory === "President" ? "Presidents" : `${roleCategory} Team`}</div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
                            {teamMembers.filter(member => member.role.includes(roleCategory)).map(member => {
                                return(
                                    <div key={member.name} className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6 border border-blue-100 hover:shadow-2xl transition-all duration-200 group">
                                        <span className="text-gray-800 text-3xl font-bold mb-2">{member.role}</span>
                                        <img src={member.img} alt={member.name} className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-4 group-hover:scale-105 transition-transform duration-200 "  />
                                        <h2 className="text-xl font-semibold text-blue-700 mb-1">{member.name}</h2>
                                        <p className="text-gray-600 text-sm mb-3 text-center min-h-[48px]">{member.description}</p>
                                        <a href={`mailto:${member.email}`} className="text-blue-600 underline hover:text-blue-800 text-sm">{member.email}</a>
                                    </div>
                                )
                            })} 
                        </div>

                    </div> 
                    ) 
               })}

                {/* Others */}
                {/* <div className="text-center text-3xl font-bold text-gray-700 mb-4 tracking-tight">Our Team</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
                        {teamMembers.filter(member => member.role !== 'Co-President').map((member) => (
                            <div key={member.email} className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6 border border-blue-100 hover:shadow-2xl transition-all duration-200 group  ">
                                <img src={member.img} alt={member.name} className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-4" />
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h2>
                                <span className="text-blue-700 text-sm font-medium mb-2">{member.role}</span>
                                <p className="text-gray-600 text-sm mb-3 text-center">{member.description}</p>
                                <a href={`mailto:${member.email}`} className="text-blue-600 underline hover:text-blue-800 text-sm">{member.email}</a>
                            </div>
                        ))}
                </div> */}
            </div>
        </div>
    );
};

export default Team;
