"use client";

import { useState } from "react";

interface StatusDropdownProps {
  currentStatus?: string;
  onStatusChange?: (status: string) => void;
}

export default function StatusDropdown({
  currentStatus = "Doing",
  onStatusChange,
}: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const statusOptions = [
    { value: "Todo", label: "Todo" },
    { value: "Doing", label: "Doing" },
    { value: "Done", label: "Done" },
  ];

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    setIsOpen(false);
    onStatusChange?.(status);
  };

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="text-view-modal mb-2 block text-xs font-bold">
        Current Status
      </label>

      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-nav-background border-medium-grey/25 text-13px hover:border-main-purple focus:border-main-purple flex w-full items-center justify-between rounded border px-4 py-2 text-left font-medium text-white transition-colors focus:outline-none"
      >
        <span>{selectedStatus}</span>
        <svg
          className={`text-main-purple h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-nav-background border-medium-grey/25 absolute z-50 mt-1 w-full overflow-hidden rounded border shadow-[0_10px_20px_0_rgba(54,78,126,0.25)]">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleStatusSelect(option.value)}
              className={`text-13px hover:bg-main-purple/10 w-full px-4 py-2 text-left font-medium transition-colors ${
                selectedStatus === option.value
                  ? "bg-main-purple/5 text-white"
                  : "text-medium-grey hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
