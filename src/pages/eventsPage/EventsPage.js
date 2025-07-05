import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CiLink } from "react-icons/ci";

import "./EventsPage.css";
import pastEvents from "./pastEventsDesc";
import NotFoundPage from "../NotFoundPage";
import CommentsList from '../../components/CommentsList';
import AddCommentForm from "../../components/AddCommentForm";
import useUser from "../../hooks/useUser";

function EventsPage() {
    const [eventInfo, setEventInfo] = useState({comments : []});
    const {eventId} = useParams();
    const navigate = useNavigate();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadEventInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken: token} : {};
            const response = await axios.get(`/api/events/${eventId}`, { headers });
            const newEventInfo = response.data;
            setEventInfo(newEventInfo);
        }
        if (!isLoading) {
            loadEventInfo();
        }
    }, [isLoading, user]);


    const event = pastEvents.find(event => event.name === eventId);
    if (!event) {
        return <NotFoundPage />;
    }

    return(
        <div className="eventContainer p-200">
            <h2>{event.title}</h2>
            <p className="desc">{event.content}</p>
            <p className="desc">{event.content2}</p>
            {event.presentation
                ? <a href={`${event.presentation}`} target='_blank'><p style={{"text-align": "center"}}>Presentation Link<CiLink /></p></a>
                : <></>
            }
            {event.recording
                ? <a href={`${event.recording}`} target='_blank'><p style={{"text-align": "center"}}>Recording Link<CiLink /></p></a>
                : <></>
            }
            {event.resources
                ? <a href={`${event.resources}`} target='_blank'><p style={{"text-align": "center"}}>Provided Resources<CiLink /></p></a>
                : <></>
            }
            <img alt="event-img" className="eventImg" src={event.image}></img>
            
            
            {/* { user
                ? <AddCommentForm
                    eventName={eventId}
                    onEventUpdated={updatedEvent => setEventInfo(updatedEvent)} />
                : <button style={{ "margin-left": "100px"}} onClick={()=> {navigate('/login')}}>Log in to Comment</button>}
            <CommentsList comments={eventInfo.comments} /> */}
        </div>
    );
}

export default EventsPage;