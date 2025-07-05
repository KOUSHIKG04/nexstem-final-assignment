import React, { useState, useEffect } from "react";

const MiniChart = ({ data, type = "bar" }) => {
    const maxValue = Math.max(...data);
    const yMarkers = [0, Math.round(maxValue / 2), maxValue];

    // Animation state for each bar
    const [animatedHeights, setAnimatedHeights] = useState(data.map(() => 0));
    useEffect(() => {
        let raf;
        const duration = 700; // ms
        const start = performance.now();
        function animate(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setAnimatedHeights(
                data.map(value => (value * progress))
            );
            if (progress < 1) {
                raf = requestAnimationFrame(animate);
            }
        }
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [data]);

    return (
        <div className="flex w-full h-24 sm:h-32">
            {/* Y-axis */}
            <div className="flex flex-col justify-between items-end mr-1 sm:mr-2 text-[8px] sm:text-[10px] text-gray-400 h-full gap-1 sm:gap-2">
                {yMarkers
                    .slice()
                    .reverse()
                    .map((val, idx) => (
                        <span key={idx}>{val}k</span>
                    ))}
            </div>
            {/* Chart bars */}
            <div className="flex items-end justify-between ml-1 sm:ml-2 h-full w-full">
                {data.map((value, index) => (
                    <div
                        key={index}
                        className={`w-1.5 sm:w-2 transition-all duration-300 hover:opacity-80 ${type === "bar" ? "bg-[#fc9f73] rounded-sm" : "bg-white"
                            }`}
                        style={{
                            height: `${(animatedHeights[index] / maxValue) * 100}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MiniChart;
