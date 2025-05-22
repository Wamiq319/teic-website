// components/CalendlyPopup.tsx
"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

interface CalendlyPopupProps {
  url: string;
  text: string;
  className?: string;
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
  utm,
}: CalendlyPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close popup when pressing Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-4xl h-[700px] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
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
      )}
    </>
  );
};
