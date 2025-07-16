import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Dummy data for upcoming events (replace with real data or import)
function hasUpcomingEvents(events) {
    return Array.isArray(events) && events.length > 0;
}


const UpcomingEventsSlider = ({ events }) => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const showCount = 1;
    const total = events?.length || 0;
    const intervalRef = useRef();

    if (!hasUpcomingEvents(events)) {
        return (
            <div className="w-full flex flex-col items-center justify-center py-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No upcoming events at this time.</h3>
                <p className="text-gray-500 text-sm">Check out our past webinars below!</p>
            </div>
        );
    }

    // Auto-slide effect
    useEffect(() => {
        if (total <= 1) return;
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearInterval(intervalRef.current);
    }, [total]);

    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
    const next = () => setCurrent((prev) => (prev + 1) % total);

    // Responsive: show 1 on mobile, 2 on md, 3 on lg+
    let visibleCount = 1;
    if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) visibleCount = 3;
        else if (window.innerWidth >= 640) visibleCount = 2;
    }

    // Clamp current index if events removed
    useEffect(() => {
        if (current > total - visibleCount) setCurrent(Math.max(0, total - visibleCount));
        // eslint-disable-next-line
    }, [total, visibleCount]);

    const getVisibleEvents = () => {
        if (total <= visibleCount) return events;
        let start = current;
        let end = start + visibleCount;
        if (end > total) {
            // Wrap around
            return [...events.slice(start, total), ...events.slice(0, end - total)];
        }
        return events.slice(start, end);
    };

    const visibleEvents = getVisibleEvents();

    // Animation helpers
    const getCardAnimation = (idx) => {
        // Animate in from below with fade for entrance
        return `animate-fadeinup`;
    };

    return (
        <div className="w-full relative py-6 flex items-center">
            {/* Left arrow */}
            <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-0 z-10 !bg-white cursor-pointer hover:!bg-[#fbe6e8] rounded-full p-2 shadow-lg border border-rose-200 transition disabled:opacity-30 active:scale-90"
                disabled={total <= visibleCount}
                style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
                <svg className="w-7 h-7 text-[#DD6C73]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Carousel */}
            <div className="flex gap-8 w-full justify-center">
                {visibleEvents.map((event, idx) => {
                    // Highlight the center/active card
                    const isActiveCard = idx === Math.floor(visibleCount / 2) || visibleEvents.length === 1;
                    return (
                        <div
                            key={event.name}
                            className={`group min-w-[220px] max-w-xs bg-white rounded-2xl shadow-xl border border-rose-100 flex-shrink-0 overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative ${getCardAnimation(idx)} ${isActiveCard ? 'ring-4 ring-[#DD6C73] ring-opacity-30 scale-105 z-10' : ''}`}
                            onClick={() => navigate(`/events/${event.slug || event.name.replace(/\s+/g, '-').toLowerCase()}`)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View details for ${event.title}`}
                        >
                            <div className="relative h-36 w-full overflow-hidden">
                                <img src={event.image} alt={event.title} className="h-36 w-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute top-2 right-2 bg-[#DD6C73] text-white text-xs px-3 py-1 rounded-full shadow font-semibold group-hover:bg-rose-500 transition">Upcoming</div>
                            </div>
                            <div className="p-4 flex flex-col">
                                <h4 className="font-bold text-[#DD6C73] text-lg mb-1 group-hover:text-rose-600 transition-colors">{event.title}</h4>
                                <p className="text-xs text-[#003366] mb-2 font-semibold">{event.date || "TBA"}</p>
                                <p className="text-xs text-gray-600 line-clamp-2 mb-2">{event.content[0].substring(0, 80)}...</p>
                                <span className="text-xs text-[#003366] font-bold mt-auto group-hover:underline">View Details</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Right arrow */}
            <button
                onClick={next}
                aria-label="Next"
                className="absolute right-0 z-10 cursor-pointer !bg-white hover:!bg-[#fbe6e8] rounded-full p-2 shadow-lg border border-rose-200 transition disabled:opacity-30 active:scale-90"
                disabled={total <= visibleCount}
                style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
                <svg className="w-7 h-7 text-[#DD6C73]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
            {/* Animations: fadeinup */}
            <style>{`
                @keyframes fadeinup {
                    0% { opacity: 0; transform: translateY(30px) scale(0.98); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fadeinup {
                    animation: fadeinup 0.6s cubic-bezier(.4,0,.2,1);
                }
            `}</style>
        </div>
    );
};

export default UpcomingEventsSlider
