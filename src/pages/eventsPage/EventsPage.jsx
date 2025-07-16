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
import { MdArrowBack } from "react-icons/md";

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
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
                <NotFoundPage />
                <p className="text-lg text-gray-500 mt-4">Sorry, this event does not exist or could not be found.</p>
            </div>
        );
    }

    return (
        <div className="relative sm:max-w-[90%] max-w-[95%] mx-auto bg-white rounded-lg p-6 md:p-14 my-10 md:my-20 !mt-36  flex flex-col gap-6">
            {/* Sticky Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute left-4 sm:top-4 -top-12 bg-rose-50 hover:bg-rose-100 text-rose-600 !rounded-full shadow text-sm font-semibold z-10"
            >
                <MdArrowBack />
            </button>

            {/* Event Title & Date */}
            <div className="flex flex-col items-center gap-2 mt-2">
                <h2 className="text-3xl font-bold text-rose-600 text-center">{event.title || 'Untitled Event'}</h2>
                {event.date && (
                    <span className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm mt-1">{event.date}</span>
                )}
                {/* Tags (if any) */}
                {event.tags && Array.isArray(event.tags) && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {event.tags.map((tag, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                )}
            </div>

            {/* Event Image with fallback */}
            <div className="flex justify-center">
                {event.image ? (
                    <img
                        alt="event-img"
                        className="eventImg rounded-xl shadow mx-auto max-h-72 object-cover"
                        src={event.image}
                        onError={e => { e.target.style.display = 'none'; }}
                    />
                ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl text-gray-400 text-lg">No Image Available</div>
                )}
            </div>

            {/* Description */}
            <div className="text-gray-700 text-center text-base space-y-2">
                {Array.isArray(event.content)
                    ? event.content.map((c, i) => <p key={i}>{c}</p>)
                    : <p>{event.content || 'No description available.'}</p>
                }
                {event.content2 && <p>{event.content2}</p>}
            </div>

            {/* Resource Links & Share */}
            <div className="flex flex-wrap gap-4 justify-center mt-2">
                {event.presentation && (
                    <a href={event.presentation} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded transition">
                        Presentation Link <CiLink />
                    </a>
                )}
                {event.recording && (
                    <a href={event.recording} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded transition">
                        Recording Link <CiLink />
                    </a>
                )}
                {event.resources && (
                    <a href={event.resources} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded transition">
                        Provided Resources <CiLink />
                    </a>
                )}
                {/* Share Button */}
                <button
                    className="inline-flex items-center gap-1 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded transition border border-gray-200"
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: event.title,
                                url: window.location.href
                            });
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert('Link copied to clipboard!');
                        }
                    }}
                >
                    Share
                </button>
            </div>

            {/* Comments Section */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Comments</h3>
                {user ? (
                    <AddCommentForm
                        eventName={eventId}
                        onEventUpdated={updatedEvent => setEventInfo(updatedEvent)}
                    />
                ) : (
                    <button
                        className="px-4 py-2 bg-rose-500 text-white rounded mb-4"
                        onClick={() => { navigate('/login'); }}
                    >
                        Log in to Comment
                    </button>
                )}
                <CommentsList comments={eventInfo.comments} />
            </div>
        </div>
    );
}

export default EventsPage;