// app/services/page.tsx
"use client";

import { useTranslations } from "next-intl";
import { CalendlyPopup } from "@/components/ui/CalendlyPopup";
import {
  ChevronRight,
  Globe,
  Shield,
  Cpu,
  Briefcase,
  Handshake,
  Landmark,
  FileText,
} from "lucide-react";
import { ReactElement } from "react";

type ServiceKey =
  | "capital_raising"
  | "debt_structuring"
  | "escrow_services"
  | "bank_account_setup"
  | "guarantees_solutions"
  | "transaction_advisory"
  | "investor_representation";

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
  const CALENDLY_URL = "https://calendly.com/yourusername";

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

  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#7FC242]/10 rounded-full">
                  {serviceIcons[service.title]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">
                    {t(`${service.title}.title`)}
                  </h3>
                  <p className="text-[#666666] mb-4">
                    {t(`${service.title}.description`)}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <ChevronRight className="text-[#7FC242] h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-[#666666]">
                          {t(`${service.title}.includes.${item}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <CalendlyPopup
                    url={CALENDLY_URL}
                    text={t("book_button")}
                    className="px-6 py-2 text-sm bg-[#7FC242] hover:bg-[#5A7D2C] text-white rounded-md"
                    utm={{
                      utmSource: "services_page",
                      utmContent: service.title,
                    }}
                  />
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
          <CalendlyPopup
            url={CALENDLY_URL}
            text={t("cta.button")}
            className="px-8 py-3 bg-[#7FC242] hover:bg-[#5A7D2C] text-white font-medium rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
