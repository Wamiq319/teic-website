"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { EmailSignup } from "@/components/EmailSignup";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const params = useParams();
  const isRTL = params.locale === "ar";
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  // Get LinkedIn URL from environment variables
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_SHARE_URL || "#";

  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F8F8F8]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#2E2E2E] whitespace-nowrap block">
                {t("title1")}
              </span>
              <span className="text-[#7FC242] whitespace-nowrap block">
                {t("title2")}
              </span>
            </h1>
            <div className="w-24 h-1.5 bg-[#7FC242] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-[#666666] max-w-4xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Box */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-[#E0E0E0] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-[#7FC242] mr-4 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2E2E]">
                  {t("mission.title")}
                </h2>
              </div>
              <p className="text-[#666666] text-lg leading-relaxed">
                {t("mission.content")}
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-[#E0E0E0] hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-[#7FC242] mr-4 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2E2E2E]">
                  {t("vision.title")}
                </h2>
              </div>
              <p className="text-[#666666] text-lg leading-relaxed">
                {t("vision.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative h-96 w-full lg:w-1/3 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/images/team/teic-ceo.jpg"
                alt={t("founder.name")}
                fill
                className="object-cover object-top"
                style={{ objectPosition: "top" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="w-full lg:w-2/3">
              <div className="bg-[#F8F8F8] p-8 lg:p-10 rounded-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#2E2E2E] mb-2">
                  {t("founder.title")}
                </h3>
                <p className="text-[#7FC242] font-medium text-lg mb-6">
                  {t("founder.position")}
                </p>
                <div className="text-[#666666] space-y-5 mb-8 text-lg leading-relaxed">
                  <p>{t("founder.bio1")}</p>
                  <p>{t("founder.bio2")}</p>
                  <p>{t("founder.bio3")}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#2E2E2E] hover:text-[#7FC242] transition-colors px-4 py-2 border border-[#E0E0E0] rounded-lg"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    {t("founder.linkedin")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#2E2E2E] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => setIsEmailModalOpen(true)}
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              {t("cta.ebookButton")}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">
              {t("trust.title", { defaultValue: "Why Trust Us?" })}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-bold text-lg mb-2">
                {t("trust.registered", {
                  defaultValue: "Registered Since 2020",
                })}
              </h3>
              <p className="text-[#666666]">
                {t("trust.registeredDesc", {
                  defaultValue: "Established with a commitment to excellence",
                })}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-bold text-lg mb-2">
                {t("trust.network", { defaultValue: "Global Network Access" })}
              </h3>
              <p className="text-[#666666]">
                {t("trust.networkDesc", {
                  defaultValue:
                    "Working with vetted financial providers in the UK, UAE, Asia, and Europe",
                })}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-bold text-lg mb-2">
                {t("trust.expertise", {
                  defaultValue: "Continual Expertise Growth",
                })}
              </h3>
              <p className="text-[#666666]">
                {t("trust.expertiseDesc", {
                  defaultValue:
                    "Active participant in ICC, ITFA, and trade finance programs",
                })}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-bold text-lg mb-2">
                {t("trust.client", { defaultValue: "Client-First Focus" })}
              </h3>
              <p className="text-[#666666]">
                {t("trust.clientDesc", {
                  defaultValue:
                    "Built for SMEs, consultants, exporters, and business owners seeking real results",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmailSignup
        variant="modal"
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
