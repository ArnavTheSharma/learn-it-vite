// import "./section3.css";
import EventsList from "../../../components/EventsList";
import pastEvents from '../../eventsPage/pastEventsDesc';

function Section3() {
    return (
        <EventsList events={pastEvents}/>
    )
}

export default Section3;