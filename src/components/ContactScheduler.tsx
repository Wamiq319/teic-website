"use client";

import { useTranslations } from "next-intl";
import { Calendar } from "lucide-react";
import { CalendlyPopup } from "@/components/ui/CalendlyPopup";
import { useState } from "react";
import { getCalendlyUrl, CalendlyPageType } from "@/utils/calendly";

interface ContactSchedulerProps {
  pageType?: CalendlyPageType;
}

export const ContactScheduler = ({ pageType = 'contact' }: ContactSchedulerProps) => {
  const t = useTranslations("ContactPage.schedule");
  const [isOpen, setIsOpen] = useState(false);
  const CALENDLY_URL = getCalendlyUrl(pageType);

  if (!CALENDLY_URL) {
    console.warn('Calendly URL is not configured in environment variables');
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0] space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">{t("title")}</h3>
        <h4 className="text-lg text-[#7FC242] font-medium mb-2">
          {t("subtitle")}
        </h4>
        <p className="text-[#666666] mb-4">{t("description")}</p>

        <div className="bg-[#F8F8F8] p-4 rounded-md mb-4">
          <div className="bg-white p-8 rounded border border-[#E0E0E0] text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-[#7FC242]/10 rounded-full">
                <Calendar className="h-6 w-6 text-[#7FC242]" />
              </div>
            </div>
            <h5 className="text-lg font-medium text-[#2E2E2E]">
              Book a Free Consultation
            </h5>
            <p className="text-[#666666] mb-4">
              Select a time that works for you
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full px-6 py-3 rounded-md bg-[#7FC242] hover:bg-[#5A7D2C] text-white font-medium transition-colors"
            >
              {t("button")}
            </button>

            <CalendlyPopup
              url={CALENDLY_URL}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              utm={{
                utmSource: "website",
                utmMedium: "contact_page",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
