// app/services/page.tsx
"use client";

import { useTranslations } from "next-intl";
import { CalendlyPopup } from "@/components/ui/CalendlyPopup";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  ChevronLeft,
  Globe,
  Shield,
  Cpu,
  Briefcase,
  Handshake,
  Landmark,
  FileText,
} from "lucide-react";
import { ReactElement, useState } from "react";
import { getCalendlyUrl, CalendlyServiceType } from "@/utils/calendly";
import { useParams } from "next/navigation";

type ServiceKey = CalendlyServiceType;

const serviceIcons: Record<ServiceKey, ReactElement> = {
  capital_raising: <Globe className="text-[#7FC242] h-6 w-6" />,
  debt_structuring: <Landmark className="text-[#7FC242] h-6 w-6" />,
  escrow_services: <FileText className="text-[#7FC242] h-6 w-6" />,
  bank_account_setup: <Briefcase className="text-[#7FC242] h-6 w-6" />,
  guarantees_solutions: <Shield className="text-[#7FC242] h-6 w-6" />,
  transaction_advisory: <Cpu className="text-[#7FC242] h-6 w-6" />,
  investor_representation: <Handshake className="text-[#7FC242] h-6 w-6" />,
};

interface ServiceItem {
  title: ServiceKey;
  includes: string[];
}

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [currentCalendlyUrl, setCurrentCalendlyUrl] = useState(getCalendlyUrl('default'));
  const params = useParams();
  const isRTL = params.locale === 'ar';
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const services: ServiceItem[] = [
    {
      title: "capital_raising",
      includes: [
        "structuring_proposals",
        "sourcing_investors",
        "facilitating_partnerships",
        "preparing_documentation",
      ],
    },
    {
      title: "debt_structuring",
      includes: [
        "loan_preparation",
        "terms_negotiation",
        "finance_types",
        "debt_restructuring",
      ],
    },
    {
      title: "escrow_services",
      includes: [
        "drafting_agreements",
        "coordinating_agents",
        "escrow_solutions",
      ],
    },
    {
      title: "bank_account_setup",
      includes: [
        "opening_accounts",
        "kyc_aml",
        "correspondence_banking",
        "multi_currency",
      ],
    },
    {
      title: "guarantees_solutions",
      includes: [
        "bank_guarantees",
        "performance_bonds",
        "monetization",
        "partnering_institutions",
      ],
    },
    {
      title: "transaction_advisory",
      includes: [
        "deal_structuring",
        "compliance_advisory",
        "risk_analysis",
        "post_deal_support",
      ],
    },
    {
      title: "investor_representation",
      includes: [
        "deal_screening",
        "due_diligence",
        "risk_return",
        "ongoing_reporting",
      ],
    },
  ];

  const handleServiceClick = (serviceKey: ServiceKey) => {
    setCurrentCalendlyUrl(getCalendlyUrl(serviceKey));
    setIsCalendlyOpen(true);
  };

  return (
    <section className="bg-[#F8F8F8] py-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-[#7FC242] mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-[#666666] max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0] hover:shadow-md transition-all"
            >
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-2 bg-[#7FC242]/10 rounded-full">
                  {serviceIcons[service.title]}
                </div>
                <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">
                    {t(`${service.title}.title`)}
                  </h3>
                  <p className="text-[#666666] mb-4">
                    {t(`${service.title}.description`)}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item) => (
                      <li key={item} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <ChevronIcon className="text-[#7FC242] h-4 w-4 mt-1 mx-2 flex-shrink-0" />
                        <span className="text-[#666666]">
                          {t(`${service.title}.includes.${item}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleServiceClick(service.title)}
                    variant="primary"
                    className="w-full px-6 py-3 text-base md:text-lg border-2"
                  >
                    {t("book_button")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0E0E0] text-center">
          <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">
            {t("cta.title")}
          </h3>
          <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <Button
            onClick={() => {
              setCurrentCalendlyUrl(getCalendlyUrl('default'));
              setIsCalendlyOpen(true);
            }}
            variant="outline"
            className="px-6 py-3 text-base md:text-lg border-2"
          >
            {t("cta.button")}
          </Button>
        </div>

        {/* Calendly Popup - Single instance */}
        <CalendlyPopup
          url={currentCalendlyUrl}
          isOpen={isCalendlyOpen}
          onClose={() => setIsCalendlyOpen(false)}
        />
      </div>
    </section>
  );
}
