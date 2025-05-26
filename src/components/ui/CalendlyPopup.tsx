"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

interface CalendlyPopupProps {
  url: string;
  text?: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}

export const CalendlyPopup = ({
  url,
  text,
  className,
  isOpen,
  onClose,
  utm,
}: CalendlyPopupProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Close popup when pressing Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    // Show loading for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative h-[98vh] w-full max-w-4xl bg-white rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Close calendly popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2E2E2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Loading overlay - shows for 5 seconds */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7FC242] mb-4"></div>
              <p className="text-[#2E2E2E]">Loading scheduling tool...</p>
            </div>
          </div>
        )}

        {/* Calendly Widget - hidden for first 5 seconds */}
        <div
          style={{
            visibility: isLoading ? "hidden" : "visible",
            height: "100%",
          }}
        >
          <InlineWidget
            url={url}
            utm={utm}
            styles={{
              height: "100%",
              width: "100%",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideGdprBanner: true,
              primaryColor: "7fc242",
              textColor: "2e2e2e",
            }}
          />
        </div>
      </div>
    </div>
  );
};
