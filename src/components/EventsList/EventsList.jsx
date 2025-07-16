import { Link } from 'react-router-dom';

const EventsList = ({ events }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
            {events.slice(0,10).map(event => (
                <Link
                    key={event.name}
                    to={`/events/${event.name}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-rose-100 hover:border-rose-300 transition-all duration-200 flex flex-col overflow-hidden hover:-translate-y-1"
                >
                    <div className="relative h-48 w-full overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Optional: Event date badge if available */}
                        {event.date && (
                            <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                {event.date}
                            </span>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col p-5">
                        <h2 className="text-xl font-bold text-rose-600 mb-2 group-hover:text-rose-700 transition">{event.title}</h2>
                        <p className="text-gray-600 text-sm mb-4 flex-1">
                            {event.content[0].substring(0, 120)}{event.content[0].length > 120 ? '...' : ''}
                        </p>
                        <div className="mt-auto flex justify-between items-center">
                            <span className="text-xs text-gray-400">Read more</span>
                            <svg className="w-5 h-5 text-rose-400 group-hover:text-rose-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default EventsList;
