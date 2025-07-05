import {Link} from 'react-router-dom';

const EventsList = ( {events} ) => {
    return(
        <>
            {events.map(event => (
            <Link key={event.name}  className="event-list-item" to={`/events/${event.name}`}>
                <h2>{event.title}</h2>
                <img src={event.image}></img>
                <p>{event.content[0].substring(0, 100)} ...</p> 
            </Link>
        ))}
        </>
    );
}

export default EventsList;