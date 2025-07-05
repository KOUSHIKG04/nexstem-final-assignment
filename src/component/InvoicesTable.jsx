import React from "react";
import { MoreHorizontal, EllipsisVertical } from "lucide-react";

const InvoicesTable = ({ invoices }) => (
  <div className="bg-[#363740] rounded-3xl p-4 sm:p-6 col-span-1 lg:col-span-2 text-xs">
    <div className="flex items-center justify-between mb-4">
      <p className="text-lg sm:text-xl font-semibold">
        Invoices <br />{" "}
        <span className="text-xs text-gray-400">
          {invoices.length} Invoices
        </span>
      </p>

      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-white">
          <EllipsisVertical size={15} className="text-white" />
        </button>
      </div>
    </div>

    {/* Mobile Table (simplified) */}
    <div className="sm:hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3 text-xs font-medium text-gray-400">
              Customer name
            </th>
            <th className="text-left py-3 text-xs font-medium text-gray-400">
              Amount
            </th>
            <th className="text-left py-3 text-xs font-medium text-gray-400">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b border-gray-800 last:border-b-0">
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <img
                    src={invoice.avatar}
                    alt={invoice.customer}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-white text-xs">{invoice.customer}</span>
                </div>
              </td>
              <td className="py-3 text-white font-medium text-xs">{invoice.amount}</td>
              <td className="py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-700 ${invoice.status === "Paid"
                    ? "text-green-300 bg-opacity-20 "
                    : "text-orange-300 bg-opacity-20"
                    }`}
                >
                  {invoice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Tablet Table (everything except date) */}
    <div className="hidden sm:block lg:hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Customer name
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Amount
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Product ID
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Status
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Option
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b border-gray-800 last:border-b-0">
              <td className="py-3.5">
                <div className="flex items-center gap-2">
                  <img
                    src={invoice.avatar}
                    alt={invoice.customer}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-white text-sm">{invoice.customer}</span>
                </div>
              </td>
              <td className="py-3.5 text-white font-medium text-sm">{invoice.amount}</td>
              <td className="py-3.5 text-gray-300 text-sm">{invoice.productId}</td>
              <td className="py-3.5">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-700 ${invoice.status === "Paid"
                    ? "text-green-300 bg-opacity-20 "
                    : "text-orange-300 bg-opacity-20"
                    }`}
                >
                  {invoice.status}
                </span>
              </td>
              <td className="py-3.5">
                <button className="text-sm text-gray-400 hover:text-white">More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Desktop Table (with scroll - everything including date) */}
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Customer name
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Date
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Amount
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Product ID
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Status
            </th>
            <th className="text-left py-3.5 text-sm font-medium text-gray-400">
              Option
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b border-gray-800 last:border-b-0">
              <td className="py-3.5">
                <div className="flex items-center gap-2">
                  <img
                    src={invoice.avatar}
                    alt={invoice.customer}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-white text-sm">{invoice.customer}</span>
                </div>
              </td>
              <td className="py-3.5 text-gray-300 text-sm">{invoice.date}</td>
              <td className="py-3.5 text-white font-medium text-sm">{invoice.amount}</td>
              <td className="py-3.5 text-gray-300 text-sm">{invoice.productId}</td>
              <td className="py-3.5">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-700 ${invoice.status === "Paid"
                    ? "text-green-300 bg-opacity-20 "
                    : "text-orange-300 bg-opacity-20"
                    }`}
                >
                  {invoice.status}
                </span>
              </td>
              <td className="py-3.5">
                <button className="text-sm text-gray-400 hover:text-white">More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default InvoicesTable;
