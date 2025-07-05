import React, { useState, useEffect } from "react";

const CircularProgress = ({ percentage, size = 130, segments }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;

  // If segments are provided, render multi-segment donut
  if (segments && segments.length > 0) {
    // Animation state for each segment
    const [animatedValues, setAnimatedValues] = useState(segments.map(() => 0));
    const [animatedPercent, setAnimatedPercent] = useState(0);
    useEffect(() => {
      let raf;
      const duration = 900; // ms
      const start = performance.now();
      function animate(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        setAnimatedPercent(Math.round(percentage * progress));
        if (progress < 1) {
          raf = requestAnimationFrame(animate);
        }
      }
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, [percentage]);
    useEffect(() => {
      let raf;
      const duration = 900; // ms
      const start = performance.now();
      function animate(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        setAnimatedValues(segments.map((seg) => seg.value * progress));
        if (progress < 1) {
          raf = requestAnimationFrame(animate);
        }
      }
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, [segments]);
    let offset = 0;
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="8"
            fill="none"
          />
          {segments.map((seg, idx) => {
            const segLength = (animatedValues[idx] / 100) * circumference;
            const dashArray = `${segLength} ${circumference - segLength}`;
            const dashOffset = offset;
            offset -= (seg.value / 100) * circumference;
            return (
              <circle
                key={idx}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={seg.color}
                strokeWidth="8"
                fill="none"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 0.3s" }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <span className="text-white text-2xl ">+{animatedPercent}%</span>
          <span className="text-[11.25px] text-gray-400 text-center ">
            Since last week
          </span>
        </div>
      </div>
    );
  }

  // Fallback: single percentage arc
  const [animatedPercent, setAnimatedPercent] = useState(0);
  useEffect(() => {
    let raf;
    const duration = 900; // ms
    const start = performance.now();
    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setAnimatedPercent(Math.round(percentage * progress));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [percentage]);
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="text-white text-4xl font-medium">+{animatedPercent}%</span>
        <span className="text-xs text-gray-400 text-center ">
          Since last week
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
