import React from "react";
import { DollarSign, EllipsisVertical } from "lucide-react";

const ProfitCard = ({ amount, change, period }) => (
  <div className="bg-[#a5a8ff] rounded-3xl py-4 px-4 sm:py-5 sm:px-7 col-span-1">
    <div className="flex items-center gap-3 mb-3 sm:mb-4">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-xl px-1.5 sm:px-2 flex items-center justify-center">
        <DollarSign size={14} className="text-black sm:w-4 sm:h-4" />
      </div>
      <div className="flex items-center justify-between w-full">
        <span className="text-black font-medium text-lg sm:text-2xl">Profit</span>
        <p className="text-gray-400 hover:text-white">
          <EllipsisVertical size={15} className="text-black" />
        </p>
      </div>
    </div>
    <div className="flex justify-center mb-2 sm:mb-3">
      <img
        src="/image.png"
        alt="Profit Illustration"
        className="w-32 h-24 sm:w-40 sm:h-32 lg:w-46 lg:h-38 object-contain"
      />
    </div>
    <div className="text-green-800 text-xs sm:text-sm text-center font-semibold mb-1">
      +{change}% {period}
    </div>
    <div className="text-2xl sm:text-3xl font-bold text-black text-center">
      ${amount.toLocaleString()}
    </div>
  </div>
);

export default ProfitCard;
