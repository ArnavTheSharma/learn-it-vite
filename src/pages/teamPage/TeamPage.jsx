import React from 'react';
import "../../App.css";
import "./TeamPage.css";

import Founders from "./learn-it-founders.jpg";
import Himal from "./himal.png";
import Merav from "./merav.png";
import Placeholder from "./placeholderPicture.png";

const teamMembers = [
    {
        name: 'Sunaina Pal',
        email: 'sunainapal2006@gmail.com',
        role: 'Co-Founder',
        img: Placeholder,
        description: 'Sunaina is a passionate learner and co-founder of Learn It, dedicated to making a difference in the community.',
    },
    {
        name: 'Aryan Das',
        email: 'itsaryandas15@gmail.com',
        role: 'Co-Founder',
        img: Placeholder,
        description: 'Aryan is a co-founder of Learn It, always eager to spread knowledge and joy through education.',
    },
    {
        name: 'Piyusha Majgaonkar',
        email: 'piyusha.majgaonkar@gmail.com',
        role: 'Co-Founder',
        img: Placeholder,
        description: 'Piyusha is a co-founder of Learn It, passionate about empowering others to learn and grow.',
    },
    {
        name: 'Himal Bokka',
        email: 'himalkumar2020@gmail.com',
        role: 'Social Media Manager',
        img: Himal,
        description: 'Meet Himal Bokka, the Social Media Manager here at Learn It. Alongside being the design manager for the rocketry club at his high school, he is part of the social media team at his local library. Himal loves to play various sports like football, basketball, and soccer in his free time. Himal is willing to help out Learn It on the social media side of the organization and wants to contribute more to the Learn It group.',
    },
    {
        name: 'Merav Sriram',
        email: 'meravsriram@gmail.com',
        role: 'Communications Coordinator',
        img: Merav,
        description: 'Meet Merav Sriram, the new Communications Coordinator at Learn It. He has made multiple appearances on TV show PL Fanzone, which features soccer enthusiasts as they compete in challenges, and enjoys interviewing international soccer stars. Merav enjoys competitive soccer, chess, debate, and is a part of NEFC. Merav is excited to contribute to the Learn It team and hopes to organize fun and effective events!',
    },
];


const Team = () => {
    return (
        <div className="teamPageContainer flex flex-col items-center bg-gradient-to-b from-blue-50 to-white min-h-screen py-8">
            <div className="w-full sm:max-w-[90%] mx-auto px-4">
                <h1 className="pageTitle font-serif font-bold text-blue-900 text-4xl md:text-5xl text-center mb-10 drop-shadow-sm">Meet The Team</h1>

                {/* Co-Founders Section */}
                <div className="text-center text-2xl font-bold text-blue-800 mb-4 tracking-tight">Co-Founders</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {teamMembers.filter(member => member.role === 'Co-Founder').map((member, idx) => (
                        <div key={member.email} className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6 border border-blue-100 hover:shadow-2xl transition-all duration-200 group">
                            <img src={member.img} alt={member.name} className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-4 group-hover:scale-105 transition-transform duration-200" />
                            <h2 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h2>
                            <span className="text-blue-700 text-sm font-medium mb-2">{member.role}</span>
                            <p className="text-gray-600 text-sm mb-3 text-center min-h-[48px]">{member.description}</p>
                            <a href={`mailto:${member.email}`} className="text-blue-600 underline hover:text-blue-800 text-sm">{member.email}</a>
                        </div>
                    ))}
                </div>

                {/* Combined Description for Co-Founders */}
                <div className="text-center p-6 bg-white rounded-2xl shadow-md mb-12 flex flex-col items-center">
                    <img src={Founders} className="w-full max-w-xl rounded-xl mb-4 shadow" alt="Learn It Founders" />
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Hi Everyone, we are the Co-Founders of Learn It! We are seniors from Massachusetts and we've always had a passion for learning and making a difference in our community.<br/>
                        What better way to do that than to spread joy through our program? We hope you join us on this journey and learn a little something along the way!
                    </p>
                </div>

                {/* Social Media Manager and Communications Coordinator Section */}
                <div className="flex flex-col md:flex-row gap-8 justify-between mb-20">
                    {/* Social Media Manager Section */}
                    <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition-all duration-200">
                        <div className="text-xl font-bold text-blue-800 mb-4">Social Media Manager</div>
                        {teamMembers.filter(member => member.role === 'Social Media Manager').map((member) => (
                            <div key={member.email} className="flex flex-col items-center">
                                <img src={member.img} alt={member.name} className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-4" />
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h2>
                                <span className="text-blue-700 text-sm font-medium mb-2">{member.role}</span>
                                <p className="text-gray-600 text-sm mb-3 text-center">{member.description}</p>
                                <a href={`mailto:${member.email}`} className="text-blue-600 underline hover:text-blue-800 text-sm">{member.email}</a>
                            </div>
                        ))}
                    </div>

                    {/* Communications Coordinator Section */}
                    <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition-all duration-200">
                        <div className="text-xl font-bold text-blue-800 mb-4">Communications Coordinator</div>
                        {teamMembers.filter(member => member.role === 'Communications Coordinator').map((member) => (
                            <div key={member.email} className="flex flex-col items-center">
                                <img src={member.img} alt={member.name} className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-4" />
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h2>
                                <span className="text-blue-700 text-sm font-medium mb-2">{member.role}</span>
                                <p className="text-gray-600 text-sm mb-3 text-center">{member.description}</p>
                                <a href={`mailto:${member.email}`} className="text-blue-600 underline hover:text-blue-800 text-sm">{member.email}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
