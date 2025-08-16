    import React, { useState, useEffect, useRef } from "react";

    const PartnersSlider = ({partners}) => {
        const [current, setCurrent] = useState(0);
        const total = partners?.length || 0;
        const intervalRef = useRef();


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

        let visibleCount = 1;
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1300) visibleCount = 5;
            else if (window.innerWidth >= 1000) visibleCount = 3;
            else if (window.innerWidth >= 640) visibleCount = 2;
        }


        const getVisiblePartners = () => {
            if (total <= visibleCount) return partners;
            let start = current;
            let end = start + visibleCount;
            if (end > total) {
                // Wrap around
                return [...partners.slice(start, total), ...partners.slice(0, end - total)];
            }
            return partners.slice(start, end);
        };

        const visiblePartners = getVisiblePartners();

        // Animation helpers
        const getCardAnimation = (idx) => {
            // Animate in from below with fade for entrance
            return `animate-fadeinup`;
        };

        
    return (
    <div className="w-full relative py-4 flex items-center">
        {/* Left arrow */}
        <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-0 z-10 !bg-white cursor-pointer hover:!bg-[#fbe6e8] rounded-full p-1.5 shadow-lg  transition disabled:opacity-30 active:scale-90"
        disabled={total <= visibleCount}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
        <svg className="w-6 h-6 text-[#DD6C73]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        </button>

        {/* Carousel */}
        <div className="flex gap-6 w-full justify-center">
        {visiblePartners.map((partner, idx) => {
            const isActiveCard = idx === Math.floor(visibleCount / 2) || visiblePartners.length === 1;
            return (
            <div
                key={partner.name}
                className={`group align-middle min-w-[200px] max-w-48 bg-white rounded-2xl shadow-md  flex-shrink-0 overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg relative ${getCardAnimation(idx)} ${isActiveCard ? 'ring-4 ring-[#DD6C73] ring-opacity-30 scale-105 z-10' : ''}`}
                onClick={() => { window.open(partner.link, "_blank") }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${partner.name}`}
            >
                <div className=" flex flex-col ">
                {/* <h4 className="font-semibold text-[#DD6C73] font-stretch-[16rem] text-full text-md mb-1 group-hover:text-indigo-600 transition-colors">
                    {partner.name}
                </h4> */}
                <img
                    src={partner.image}
                    alt={partner.name}
                    className=" w-full object-cover h-cover align-middle group-hover:scale-105 transition-transform duration-300"
                />
                </div>
            </div>
            );
        })}
        </div>

        {/* Right arrow */}
        <button
        onClick={next}
        aria-label="Next"
        className="absolute right-0 z-10 cursor-pointer !bg-white hover:!bg-[#fbe6e8] rounded-full p-1.5 shadow-lg transition disabled:opacity-30 active:scale-95 "
        disabled={total <= visibleCount}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
        <svg className="w-6 h-6 text-[#DD6C73]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        </button>

        {/* Animations: fadeinup */}
        <style>{`
        @keyframes fadeinup {
            0% { opacity: 0; transform: translateY(20px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeinup {
            animation: fadeinup 0.5s cubic-bezier(.4,0,.2,1);
        }
        `}</style>
    </div>
    );


        
    }

    export default PartnersSlider;