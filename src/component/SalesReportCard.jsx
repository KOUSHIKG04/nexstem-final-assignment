import React from "react";
import { CircleChevronDown } from "lucide-react";
import MiniChart from "./MiniChart";

const SalesReportCard = ({ earnings, payments, days }) => (
  <div className="bg-[#363740] rounded-3xl py-4 px-4 sm:py-5 sm:px-7 col-span-1">
    <div className="flex items-center justify-between mb-2 sm:mb-2">
      <p className="text-lg sm:text-xl font-semibold">Sales Report</p>
      <p className="text-gray-400 hover:text-white text-xs sm:text-sm mt-1 flex items-center gap-1.5">
        <span className="text-white">week</span>{" "}
        <CircleChevronDown size={12} className="text-white mt-0.5 sm:w-3.5 sm:h-3.5" />
      </p>
    </div>
    <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
        <span className="text-gray-400 text-xs">Earnings</span>
      </div>
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
        <span className="text-gray-400 text-xs">Payments</span>
      </div>
    </div>
    <div className="mb-3 sm:mb-4">
      <MiniChart data={earnings} />
    </div>
    <div className="flex justify-between ml-4 sm:ml-6 text-[8px] sm:text-[10px] text-gray-100">
      {days.map((day, index) => (
        <span key={index}>{day}</span>
      ))}
    </div>
  </div>
);

export default SalesReportCard;
