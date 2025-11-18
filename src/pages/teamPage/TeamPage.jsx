import React from 'react';
import "../../App.css";
import "./TeamPage.css";

import Avi from "./teamImages/aviImage.png";
import Daniel from "./teamImages/danielImage.jpeg";
import Himal from "./teamImages/himalImage.png";
import Kush from "./teamImages/kushImage.png";
import Merav from "./teamImages/meravImage.jpeg";
import Owen from "./teamImages/owenImage.jpeg";
import Shreya from "./teamImages/shreyaImage.png";
import Sid from "./teamImages/sidImage.jpeg";
import Placeholder from "./teamImages/placeholderImage.png";

const teamMembers = [
    {
        name: 'Himal Bokka',
        email: 'himalkumar2020@gmail.com',
        role: 'Co-President',
        img: Himal,
        description: 'Hi, I’m Himal Bokka, the Co-President of Learn It and a student at Carmel High School. I’m passionate about expanding STEM and career education opportunities and want to have a lasting impact through this organization. At school, I’m involved in HOSA, track and field, and other medical-related activities. I enjoy collaborating with others to bring new ideas and initiatives to bigger causes. My goal is to grow Learn It into a global platform that provides meaningful and accessible opportunities for all students.',
        category: 'Leadership',
    },
    {
        name: 'Merav Sriram',
        email: 'meravsriram@gmail.com',
        role: 'Co-President',
        img: Merav,
        description: 'Merav Sriram is the current Co-President of Learn It, where he is dedicated to expanding access to educational resources worldwide. At Westborough High School, he serves as President of both the DECA Chapter and the Entrepreneurship Club, leading peers in business, innovation, and leadership. Beyond academics, Merav plays Varsity Soccer and enjoys staying active through sports. In his free time, he loves listening to music, which fuels his creativity and focus. Passionate about making a lasting difference, Merav sees Learn It as the perfect platform to scale his mission globally—where LearnIt\'s efforts and impact are already gaining international recognition.',
        category: 'Leadership',
    },
    {   
        name: 'Daniel Zhang',
        email: 'DanielZhang2010@icloud.com',
        role: 'Outreach Manager',
        img: Daniel,
        description: 'Hi, I’m Daniel Zhang. I am the lead Outreach manager in Learn It. I am from Carmel High School and I am in 10th grade. I have a passion for science, specifically Chemistry and I like to play soccer and video games. I joined this nonprofit organization to help students who are confused on which path to take and influence them to take the right path with confidence.',
        category: "Outreach",
    },
    {   
        name: 'Sid Gowda',
        email: 'sigow28@gmail.com',
        role: 'Outreach Manager',
        img: Sid,
        description: 'Hi, I’m Sid Gowda. I am the Outreach Manager for Learn It. I go to school at Carmel High School, and I am in 10th grade. Currently, I am a premedical student who is passionate about biology and research. In my free time, I like to play tennis and video games. I also enjoy running. I joined this nonprofit organization to help students in high school who have not yet decided on a career path or need some guidance to find the best one.',
        category: "Outreach",
    },
    {   
        name: 'Owen Lodato',
        email: 'owenlodato@gmail.com',
        role: 'Media Manager',
        img: Owen,
        description: 'Hi, I’m Owen Lodato, a sophomore at Carmel High School, and I am a social media manager for Learn It. In the future, I have a passion to be a marketing manager for a large business or company. I joined this organization so I could help students and young adults who are confused or uncertain about their future careers.',
        category: "Media",
    },
    {   
        name: 'Shreya Nallagonda',
        email: 'shreyasnallagonda@gmail.com',
        role: 'International Manager',
        img: Shreya,
        description: 'Hi, I’m Shreya Nallagonda, a senior at Greenwood High International School in Bangalore and the International Manager of Learn It. Moving from the United States as a teen helped me value global connections and diverse learning. I’m passionate about design and creativity, and I love finding ways to make education more engaging and accessible. In my free time, I enjoy playing the flute, painting, and volunteering. Through Learn It, I hope to help the organization grow internationally and inspire more students.',
        category: 'International & Global Affairs',
    },
    {   
        name: 'Avi Singh',
        email: 'avisingh5876@gmail.com',
        role: 'Vice President',
        img: Avi,
        description: 'Hi! My name is Avi Singh and I’m the current Co-Vice President of Learn It. I’m a junior at Westborough High School. I aspire to major in biology in college with a pre-dental track. In my free time, I’m a part of my high school’s varsity soccer and outdoor track teams. I’m also a Co-Founder and Co-President of the philanthropy club at my high school,  a member of HOSA, on my student council’s executive board and part of my town’s youth commission. I joined LearnIt in order to assist students with career paths and college applications as I know it can be a very nerve-racking experience, and I noticed there aren’t many free resources for students to gain access to such information.',
        category: 'Leadership',
    },
    {   
        name: 'Kush Sinha',
        email: 'kushsinha8119@gmail.com',
        role: 'Vice President',
        img: Kush,
        description: "Hi, I'm Kush Sinha and I'm the vice president of Learn It. Currently, I am a junior at Westborough High School where I lead/take part in many STEM-oriented clubs and activities. I'm passionate about computer engineering and like to code in my free time. I also enjoy playing basketball, reading, and going to the gym. I joined Learn It because it gives me an opportunity to help others that are concerned about their future, much like how I used to be. I hope to make a real difference through this institution.",
        category: 'Leadership',
    },

];

const categories = [
    "Leadership",
    "Outreach",
    "Media",
    "International & Global Affairs",
]


const Team = () => {
    return (
        <div className="teamPageContainer flex flex-col items-center bg-gradient-to-b from-blue-50 to-white min-h-screen py-8">
            <div className="w-full sm:max-w-[90%] mx-auto px-4">
                <h1 className="pageTitle font-serif font-bold text-blue-900 text-4xl md:text-5xl text-center mb-10 drop-shadow-sm">Meet The Team</h1>

                {categories.map(roleCategory => {
                    return (
                    <div key={roleCategory}>
                        <div className="text-center text-4xl font-bold text-gray-700 mb-4 tracking-tight">{roleCategory === "President" ? "Leadership" : `${roleCategory} Team`}</div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
                            {teamMembers.filter(member => member.category === roleCategory).map(member => {
                                return(
                                    <div key={member.name} className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6 border border-blue-100 hover:shadow-2xl transition-all duration-200 group">
                                        <span className="text-gray-800 text-3xl font-bold mb-2">{member.role}</span>
                                        <img src={member.img} alt={member.name} className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-4 group-hover:scale-105 transition-transform duration-200 "  />
                                        <span className="text-4xl font-bold text-blue-900 mb-4">{member.name}</span>
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
