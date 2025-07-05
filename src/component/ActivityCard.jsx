import React from "react";
import { EllipsisVertical } from "lucide-react";
import CircularProgress from "./CircularProgress";

const ACTIVITY_COLORS = ["#b4735c", "#fb923c", "#ffffff", "#a78bfa"];

const ActivityCard = ({ activity, percentage }) => {
  const values = [
    activity.transactions,
    activity.payouts,
    activity.sales,
    activity.reports,
  ];
  const total = values.reduce((a, b) => a + b, 0) || 1;
  const segments = values.map((val, idx) => ({
    value: (val / total) * 100,
    color: ACTIVITY_COLORS[idx],
  }));
  const labels = [
    {
      label: "Transactions",
      color: ACTIVITY_COLORS[0],
      value: activity.transactions,
    },
    { label: "Payouts", color: ACTIVITY_COLORS[1], value: activity.payouts },
    { label: "Total Sales", color: ACTIVITY_COLORS[2], value: activity.sales },
    { label: "Reports", color: ACTIVITY_COLORS[3], value: activity.reports },
  ];

  return (
    <div className="bg-[#363740] rounded-3xl py-4 px-4 sm:py-5 sm:px-7 col-span-1">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold">Activity</h3>
        <p className="text-gray-400 hover:text-white">
          <EllipsisVertical size={15} className="text-white" />
        </p>
      </div>
      <div className="flex items-center justify-center mb-6 sm:mb-10">
        <CircularProgress percentage={percentage} segments={segments} size={140} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
        {labels.map((item, idx) => (
          <div className="flex items-center gap-1.5" key={item.label}>
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: item.color }}
            ></div>
            <span className="text-gray-400 text-xs">{item.label}</span>
            <span className="text-white text-xs font-medium ml-auto">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
