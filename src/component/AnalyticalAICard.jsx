import React, { useState, useEffect, useRef } from "react";
import { EllipsisVertical } from "lucide-react";

const AnalyticalAICard = ({ data, percentage }) => {
    // Y-axis markers
    const yMarkers = [0, 15, 30, 45, 60];
    // X-axis markers (assuming 8 data points for now)
    const xMarkers = [1, 5, 10, 15, 20, 25, 30];

    return (
        <div className="bg-[#363740] rounded-3xl py-4 px-4 sm:py-5 sm:px-7 col-span-1">
            <div className="flex items-center justify-between mb-2">
                <p className="text-base sm:text-lg font-semibold">Analytical AI</p>
                <p className="text-gray-400 hover:text-white">
                    {/* <MoreHorizontal /> */}
                    <EllipsisVertical size={15} className="text-white" />
                </p>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">September 2023</div>
            <div className="mb-4 relative w-full h-32 sm:h-42">
                {/* Y-axis markers */}
                <div
                    className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] sm:text-xs text-gray-400 z-10"
                    style={{ height: "100%" }}
                >
                    {yMarkers
                        .slice()
                        .reverse()
                        .map((val, idx) => (
                            <span key={idx}>{val}k</span>
                        ))}
                </div>
                {/* SVG Chart */}
                <AnimatedPolyline data={data} />
                {/* X-axis markers */}
                <div className="absolute left-6 sm:left-8 bottom-0 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] flex justify-between text-[8px] sm:text-xs text-gray-400 z-10">
                    {xMarkers.map((val, idx) => (
                        <span key={idx}>{val}</span>
                    ))}
                </div>
            </div>
            {/* <div className="text-2xl font-bold">{percentage}%</div> */}
        </div>
    );
};

// Animated polyline as a subcomponent
const AnimatedPolyline = ({ data }) => {
    const [length, setLength] = useState(0);
    const polyRef = useRef(null);
    // Calculate points string
    const points = data
        .map((value, index) => `${index * 28},${60 - (value / 60) * 60}`)
        .join(" ");
    useEffect(() => {
        if (polyRef.current) {
            setLength(polyRef.current.getTotalLength());
        }
    }, [points]);
    const [draw, setDraw] = useState(0);
    useEffect(() => {
        let raf;
        const duration = 900;
        const start = performance.now();
        function animate(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setDraw(progress);
            if (progress < 1) raf = requestAnimationFrame(animate);
        }
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [points]);
    return (
        <svg className="w-full h-32 sm:h-38 pl-6 sm:pl-8" viewBox="0 0 200 60">
            <polyline
                ref={polyRef}
                points={points}
                fill="none"
                stroke="orange"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={length}
                strokeDashoffset={length * (1 - draw)}
                style={{ transition: "stroke-dashoffset 0.2s" }}
            />
            <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default AnalyticalAICard;
