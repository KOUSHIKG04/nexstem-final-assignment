import React, { useState } from "react";
import {
    Search,
    Bell,
    MoreHorizontal,
    FileText,
    DollarSign,
    TrendingUp,
    Calendar,
    Users,
    Mail,
    Settings,
    LogOut,
    Menu,
    X,
    Moon,
} from "lucide-react";
import MiniChart from "./MiniChart";
import CircularProgress from "./CircularProgress";
import ProfitCard from "./ProfitCard";
import SalesReportCard from "./SalesReportCard";
import AnalyticalAICard from "./AnalyticalAICard";
import InvoicesTable from "./InvoicesTable";
import ActivityCard from "./ActivityCard";

const SpectraDashboard = () => {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Dashboard data state
    const [dashboardData] = useState({
        profit: {
            amount: 12895.5,
            change: 14,
            period: "Since last week",
        },
        salesReport: {
            earnings: Array.from(
                { length: 7 },
                () => Math.floor(Math.random() * 16) + 1
            ),
            payments: [3, 6, 9, 12, 8, 5, 3],
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        analyticalAI: {
            data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 61)),
            percentage: 60,
        },
        activity: {
            percentage: 13,
            transactions: 492,
            sales: 715,
            payouts: 412,
            reports: 128,
        },
        invoices: [
            {
                id: 1,
                customer: "Alena McCoy",
                date: "31 Aug 2023",
                amount: "$3,230.2",
                productId: "001423",
                status: "Paid",
                avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
            },
            {
                id: 2,
                customer: "Jacob Jones",
                date: "30 Aug 2023",
                amount: "$2,630.5",
                productId: "004533",
                status: "Unpaid",
                avatar:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
            },
            {
                id: 3,
                customer: "Martin Butcher",
                date: "30 Aug 2023",
                amount: "$4,230.0",
                productId: "001784",
                status: "Paid",
                avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
            },
        ],
    });

    const sidebarItems = [
        { icon: FileText, label: "Dashboard", active: true },
        { icon: TrendingUp, label: "Analytics" },
        { icon: Users, label: "Contacts" },
        { icon: Mail, label: "Mail" },
        { icon: Calendar, label: "Calendar" },
        { icon: Settings, label: "Settings" },
    ];

    return (
        <div className="min-h-screen bg-[#242529] text-white">
            <div className="flex">
                {/* Mobile Sidebar Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div
                    className={`
          fixed md:relative inset-y-0 left-0 z-50 w-full md:w-56 bg-[#242529] transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:block
        `}
                >
                    {/* Top bar for mobile: X and Log out */}
                    <div className="flex md:hidden items-center justify-between px-4 pt-4 ">
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="text-gray-300 hover:text-white rounded-full"
                        >
                            <X size={18} />
                        </button>
                        <button className="flex border-1 rounded-xl items-center gap-2 text-gray-200 hover:text-white p-2 ">
                            <LogOut size={20} className="mt-1 " />
                            <span className="text-base font-medium">Log out</span>
                        </button>
                    </div>
                    {/* Sidebar content, vertically centered on mobile */}
                    <div className="flex flex-col  justify-center md:justify-start items-center md:items-stretch px-14 pb-8 pt-8 md:pt-6 md:px-6">
                        {/* Logo and SPECTRA */}
                        <div className="flex flex-col items-center mb-10 mt-2 md:mt-0 md:flex-row md:items-center md:justify-start md:mb-6 md:ml-0 w-full">
                            {/* SVG logo */}
                            <svg
                                className="block md:mr-2"
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: "60px", height: "60px" }}
                            >
                                <circle cx="32" cy="40" r="16" fill="#fff" />
                                <path
                                    d="M48 24a16 16 0 1 1 0 32h-8v-8h8a8 8 0 1 0 0-16h-8v-8h8z"
                                    fill="#A5B4FC"
                                />
                            </svg>
                            <span className="mt-2 text-3xl font-bold tracking-widest text-white md:mt-0 md:text-lg md:font-semibold">
                                SPECTRA
                            </span>
                        </div>
                        {/* Navigation */}
                        <nav className="w-full space-y-2 mb-8">
                            {sidebarItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveTab(item.label);
                                        setSidebarOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-lg ${item.label === activeTab
                                        ? "bg-gray-700 text-white"
                                        : "text-gray-400 hover:text-white hover:bg-gray-700"
                                        }`}
                                >
                                    <item.icon size={22} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>
                        {/* Log out for desktop only */}
                        <div className="hidden md:block mt-auto w-full">
                            <button className="mt-48 w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors">
                                <LogOut size={20} />
                                <span>Log out</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 min-h-screen">
                    <div className="p-4 sm:p-6 lg:p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 sm:mb-8">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSidebarOpen(true)}
                                    className="md:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    <Menu size={24} />
                                </button>
                                <p className="hidden lg:block text-2xl font-bold">Overview</p>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-4">
                                <div className="relative hidden sm:block">
                                    <Search
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        size={16}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="pl-10 pr-4 py-2 bg-[#242529] border border-gray-400 rounded-xl focus:outline-none focus:border-gray-500 w-48 md:w-64 lg:w-80"
                                    />
                                </div>
                                <button className="sm:hidden bg-[#181a20] rounded-lg hover:bg-gray-700 transition-colors p-2">
                                    <Search size={16} />
                                </button>
                                <button className="bg-[#181a20] rounded-lg hover:bg-gray-700 transition-colors p-2">
                                    <Moon size={20} />
                                </button>
                                <button className="bg-[#181a20] rounded-lg hover:bg-gray-700 transition-colors p-2">
                                    <Bell size={20} />
                                </button>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                                        alt="Profile"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Grid */}
                        <p className="block lg:hidden text-3xl font-bold px-4 mb-4">Overview</p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
                            <ProfitCard
                                amount={dashboardData.profit.amount}
                                change={dashboardData.profit.change}
                                period={dashboardData.profit.period}
                            />
                            <SalesReportCard
                                earnings={dashboardData.salesReport.earnings}
                                payments={dashboardData.salesReport.payments}
                                days={dashboardData.salesReport.days}
                            />
                            <AnalyticalAICard
                                data={dashboardData.analyticalAI.data}
                                percentage={dashboardData.analyticalAI.percentage}
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                            <div className="lg:col-span-2">
                                <InvoicesTable invoices={dashboardData.invoices} />
                            </div>
                            <div className="lg:col-span-1">
                                <ActivityCard
                                    activity={dashboardData.activity}
                                    percentage={dashboardData.activity.percentage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpectraDashboard;
