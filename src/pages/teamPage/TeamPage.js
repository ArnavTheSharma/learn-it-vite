import React from 'react';
import "../../App.css";
import "./TeamPage.css";
import Founders from "./learn-it-founders.jpg";
import Himal from "./himal.png";
import Merav from "./merav.png";

const teamMembers = [
    {
        name: 'Sunaina Pal',
        email: 'sunainapal2006@gmail.com',
        role: 'Co-Founder',
        description: '',
    },
    {
        name: 'Aryan Das',
        email: 'itsaryandas15@gmail.com',
        role: 'Co-Founder',
        description: '',
    },
    {
        name: 'Piyusha Majgaonkar',
        email: 'piyusha.majgaonkar@gmail.com',
        role: 'Co-Founder',
        description: '',
    },
    {
        name: 'Himal Bokka',
        email: 'himalkumar2020@gmail.com',
        role: 'Social Media Manager',
        description: 'Meet Himal Bokka, the Social Media Manager here at Learn It. Alongside being the design manager for the rocketry club at his high school, he is part of the social media team at his local library. Himal loves to play various sports like football, basketball, and soccer in his free time. Himal is willing to help out Learn It on the social media side of the organization and wants to contribute more to the Learn It group.',
    },
    {
        name: 'Merav Sriram',
        email: 'meravsriram@gmail.com',
        role: 'Communications Coordinator',
        description: 'Meet Merav Sriram, the new Communications Coordinator at Learn It. He has made multiple appearances on TV show PL Fanzone, which features soccer enthusiasts as they compete in challenges, and enjoys interviewing international soccer stars. Merav enjoys competitive soccer, chess, debate, and is a part of NEFC. Merav is excited to contribute to the Learn It team and hopes to organize fun and effective events!',
    },
];

const Team = () => {
    return (
        <div className="teamPageContainer flex flex-col items-center bg-gray-50 h-fit">
            <div className="bg-blue-100 p-8 py-0">
                <h1 className="pageTitle font-serif font-bold text-blue-900 text-4xl text-center mb-8">Meet The Team</h1>

                {/* Co-Founders Section */}
                <div className="text-center text-xl font-bold text-blue-800 mb-6">Co-Founders</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 m-auto">
                    {teamMembers.filter(member => member.role === 'Co-Founder').map((member) => (
                        <div key={member.email} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
                            {/* Placeholder for image */}
                            {/* <div className="w-full h-64 bg-gray-300"></div> */}
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h2>
                                <a href={`mailto:${member.email}`} className="text-center text-blue-600 underline hover:text-blue-800">{member.email}</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Combined Description for Co-Founders */}
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img src={Founders} className="w-full rounded-lg"></img>
                    <p className="text-pretty text-gray-700 text-lg">
                        Hi Everyone, we are the Co-Founders of Learn It! We are seniors from Massachusetts and we've always had a passion for learning and making a difference in our community.
                        What better way to do that than to spread joy through our program? We hope you join us on this journey and learn a little something along the way!
                    </p>
                </div>

                {/* Social Media Manager and Communications Coordinator Section */}
                <div className="cardsParent flex md:flex-row justify-between mt-12 mb-28">
                    {/* Social Media Manager Section */}
                    <div className="leftCard w-full h-full md:w-1/3 px-4 mb-6 md:mb-0">
                        <div className="text-center text-xl font-bold text-blue-800 mb-6">Social Media Manager</div>
                        <div className="grid grid-cols-1 gap-8">
                            {teamMembers.filter(member => member.role === 'Social Media Manager').map((member) => (
                                <div key={member.email} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
                                    {/* <div className="w-full h-64 bg-gray-300"></div> */}
                                    <img src={Himal} className='w-full'></img>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h2>
                                        <p className="text-gray-700 mb-4 text-pretty">{member.description}</p>
                                        <a href={`mailto:${member.email}`} className="text-blue-600 underline hover:text-blue-800">{member.email}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Communications Coordinator Section */}
                    <div className="rightCard w-full h-full md:w-1/3 px-4">
                        <div className="text-center text-xl font-bold text-blue-800 mb-6">Communications Coordinator</div>
                        <div className="grid grid-cols-1 gap-8">
                            {teamMembers.filter(member => member.role === 'Communications Coordinator').map((member) => (
                                <div key={member.email} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
                                    {/* <div className="w-full h-64 bg-gray-300"></div> */}
                                    <img src={Merav} className='w-full pt-3'></img>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h2>
                                        <p className="text-gray-700 mb-4 text-pretty">{member.description}</p>
                                        <a href={`mailto:${member.email}`} className="text-blue-600 underline hover:text-blue-800">{member.email}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
