import EventsList from "../../../components/EventsList/EventsList";
import pastEvents from '../../eventsPage/pastEventsDesc';
import upcomingEvents from '../../eventsPage/upcomingEventsDesc';
import UpcomingEventsSlider from '../../../components/UpcomingEventsSlider/UpcomingEventsSlider';
import { useNavigate } from "react-router-dom";
// Dummy data for upcoming events (replace with real data or import)

function Section4() {
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col gap-8">
            <div className="mb-2 flex flex-col flex-1 items-center">
                <h2 className="text-pretty mb-2 text-center md:text-left">Upcoming Events</h2>
                <UpcomingEventsSlider events={upcomingEvents} />
                <button
                    className="cursor-pointer text-sm my-2"
                    onClick={() => navigate('/events')}
                >
                    View All Events
                </button>
            </div>
            {/* <div>
                <h2 className="text-2xl font-bold text-rose-600 mb-4 text-center md:text-left">Past Webinars & Events</h2>
                <EventsList events={pastEvents}/>
            </div> */}
        </div>
    )
}

export default Section4;