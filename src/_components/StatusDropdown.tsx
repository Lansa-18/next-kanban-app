"use client";

import { useState } from "react";

interface StatusDropdownProps {
  currentStatus?: string;
  onStatusChange?: (status: string) => void;
}

export default function StatusDropdown({ 
  currentStatus = "Doing", 
  onStatusChange 
}: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const statusOptions = [
    { value: "Todo", label: "Todo" },
    { value: "Doing", label: "Doing" },
    { value: "Done", label: "Done" }
  ];

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    setIsOpen(false);
    onStatusChange?.(status);
  };

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="block text-view-modal text-xs font-bold mb-2">
        Current Status
      </label>
      
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-nav-background border border-medium-grey/25 rounded px-4 py-2 text-left text-white text-[13px] font-medium flex items-center justify-between hover:border-main-purple transition-colors focus:outline-none focus:border-main-purple"
      >
        <span>{selectedStatus}</span>
        <svg 
          className={`w-3 h-3 text-main-purple transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
        <div className="absolute z-50 w-full mt-1 bg-nav-background border border-medium-grey/25 rounded shadow-[0_10px_20px_0_rgba(54,78,126,0.25)] overflow-hidden">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleStatusSelect(option.value)}
              className={`w-full px-4 py-2 text-left text-[13px] font-medium transition-colors hover:bg-main-purple/10 ${
                selectedStatus === option.value 
                  ? 'text-white bg-main-purple/5' 
                  : 'text-medium-grey hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
