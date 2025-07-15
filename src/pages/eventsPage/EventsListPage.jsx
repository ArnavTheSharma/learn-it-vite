import pastEvents from './pastEventsDesc';
import EventsList from '../../components/EventsList';
import hackathon from "./eventImages/pastEvents/hackathon.png";
import hackathon2 from "./eventImages/pastEvents/hackathon2.png";

function EventsListPage() {
    return (
        <div className="EventsListPageContainer bg-white text-gray-800">
            {/* Upcoming Events */}
            <div className='upcomingContainer max-w-4xl mx-auto py-8 px-4'>
                <h1 className='pageTitle text-3xl font-bold text-navy-800 mb-6'>Upcoming Events</h1>
                <p className="text-lg text-pretty leading-relaxed text-gray-700 ">
                    To sign up for any events please fill out the{" "}
                    <a 
                        className="inline-flex align-[2px] gap-1 text-navy-300 hover:text-navy-800 hover:underline font-medium" 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfeEdhXjwm2WP-_6tFYKegiToCikM93qCdg5r4G3dBsWXhcDg/viewform" 
                        target="_blank"
                    >
                        general member form
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                    </a>{" "}
                    and all information about upcoming webinars will be forwarded to you!
                </p>
            </div>

            {/* Past Events */}
            <div className="max-w-4xl mx-auto px-4 pb-12">
                <h1 className="text-3xl font-bold text-navy-800 mb-8">Our Past Events</h1>
                
                {/* Hackathon Featured Card */}
                <div className="hackathonContainer mb-12 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <a 
                        href="https://learn-it-global-hackathon.devpost.com/" 
                        target="_blank"
                        className="block"
                    >
                        <div className="p-6">
                            <h3 className='inline-flex items-center text-xl font-semibold text-navy-700 hover:text-navy-900 mb-4'>
                                Featured: Learn It Global Hackathon{" "}
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={2} 
                                    stroke="currentColor" 
                                    className="w-5 h-5 ml-1"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h3>
                            <div className='hackathonImage mb-4'>
                                <img src={hackathon} alt="Hackathon event" className="w-full rounded" />
                            </div>
                            <p className="text-white font-bold bg-navy-600 px-3 py-1 inline-block rounded-md">
                                Project Gallery
                            </p>
                            <div className='hackathonImage mt-4'>
                                <img src={hackathon2} alt="Hackathon projects" className="w-full rounded" />
                            </div>
                        </div>
                    </a>
                </div>

                {/* Other Past Events */}
                <div className="pastEventsContainer">
                    <EventsList events={pastEvents} />
                </div>
            </div>
        </div>
    );
}

export default EventsListPage;