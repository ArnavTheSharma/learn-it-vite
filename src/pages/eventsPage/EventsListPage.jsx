import pastEvents from './pastEventsDesc';
import EventsList from '../../components/EventsList/EventsList';
import hackathon from "./eventImages/pastEvents/hackathon.png";
import hackathon2 from "./eventImages/pastEvents/hackathon2.png";
import UpcomingEventsSlider from '../../components/UpcomingEventsSlider/UpcomingEventsSlider';


function EventsListPage() {
    return (
        <div className="EventsListPageContainer sm:max-w-[90%] mx-auto pt-8 text-gray-800">
            {/* Hero/Intro Section - Modern Banner Style */}
            <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 mt-16 bg-gradient-to-r from-[#F7E6E8] via-white to-blue-50 border-b-4 border-[#DD6C73] relative overflow-x-clip">
                {/* Illustration or Accent */}
                <div className="hidden md:block flex-shrink-0 ml-8">
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="90" r="90" fill="#DD6C73" fillOpacity="0.12"/>
                        <circle cx="90" cy="90" r="60" fill="#DD6C73" fillOpacity="0.18"/>
                        <circle cx="90" cy="90" r="30" fill="#DD6C73" fillOpacity="0.25"/>
                    </svg>
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4">
                    <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-navy-800 mb-4 tracking-tight leading-tight drop-shadow">Events at Learn It</h1>
                    <p className="text-xl sm:text-2xl text-blue-900 max-w-2xl mb-8 font-medium leading-relaxed">
                        Discover, connect, and grow with our vibrant community! From hands-on hackathons to inspiring webinars, every event is designed to empower you on your STEM journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfeEdhXjwm2WP-_6tFYKegiToCikM93qCdg5r4G3dBsWXhcDg/viewform"
                            target="_blank"
                            className="bg-[#DD6C73] text-white font-bold rounded-lg px-8 py-3 shadow hover:bg-rose-600 transition text-lg"
                        >
                            Become a Member
                        </a>
                        {/* <span className="text-blue-700 text-base font-semibold">or</span> */}
                        <a
                            href="#past-events"
                            className="bg-blue-100 text-blue-900 font-bold rounded-lg px-8 py-3 shadow hover:bg-blue-200 transition text-lg"
                        >
                            Explore Past Events
                        </a>
                    </div>
                </div>
            </section>

            

            {/* Upcoming Events */}
            <section className='upcomingContainer px-4'>
                <h2 className='pageTitle font-serif text-4xl font-bold text-navy-800 !mb-4 !mt-16 tracking-tight'>Upcoming Events</h2>
                <UpcomingEventsSlider events={pastEvents} />
                    <p className="mt-6 text-lg text-gray-700 font-medium">To sign up for any events please fill out the 
                        <a 
                        className="inline-flex gap-1 px-1 text-rose-500 text-navy-300 hover:text-navy-800 hover:underline font-medium" 
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
                    </a>
                         and all information about upcoming webinars will be forwarded to you!</p>
            </section>

            {/* Past Events */}
            <section id="past-events" className="px-4 pb-14">
                <h2 className="text-4xl font-serif font-bold text-navy-800 !mb-4 !my-16 tracking-tight">Our Past Events</h2>
                {/* Hackathon Featured Card (optional: uncomment and style if needed) */}
                {/* ...existing code... */}
                <EventsList events={pastEvents} /> 
            </section>
        </div>
    );
}

export default EventsListPage;