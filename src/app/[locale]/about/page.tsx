"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { EmailSignup } from "@/components/EmailSignup";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const params = useParams();
  const isRTL = params.locale === "ar";
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const linkedinUrl = process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN_SHARE_URL || "#";

  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F8F8F8]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="block text-[#2E2E2E]">{t("title1")}</span>
            <span className="block text-[#7FC242]">{t("title2")}</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#7FC242] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto text-left">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0E0E0]">
              <div className="flex items-center mb-4">
                <div className="w-2 h-6 bg-[#7FC242] mr-3 rounded-full"></div>
                <h2 className="text-xl font-bold text-[#2E2E2E]">
                  {t("mission.title")}
                </h2>
              </div>
              <p className="text-[#666666] text-base leading-relaxed">
                {t("mission.content")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0E0E0]">
              <div className="flex items-center mb-4">
                <div className="w-2 h-6 bg-[#7FC242] mr-3 rounded-full"></div>
                <h2 className="text-xl font-bold text-[#2E2E2E]">
                  {t("vision.title")}
                </h2>
              </div>
              <p className="text-[#666666] text-base leading-relaxed">
                {t("vision.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="flex w-full flex-col md:flex-row items-start gap-3 px-3">
          {/* Image */}
          <div className="w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/assets/images/team/teic-ceo.jpg"
                alt={t("founder.name")}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw "
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full bg-[#F8F8F8] p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-1">
              {t("founder.title")}
            </h3>
            <p className="text-[#7FC242] font-medium text-base mb-4">
              {t("founder.position")}
            </p>
            <div className="text-[#666666] space-y-4 text-base leading-relaxed mb-6">
              <p>{t("founder.bio1")}</p>
              <p>{t("founder.bio2")}</p>
              <p>{t("founder.bio3")}</p>
            </div>
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#2E2E2E] text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <Button
            onClick={() => setIsEmailModalOpen(true)}
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            {t("cta.ebookButton")}
          </Button>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
              {t("trust.title", { defaultValue: "Why Trust Us?" })}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t("trust.registered", {
                  defaultValue: "Registered Since 2020",
                }),
                desc: t("trust.registeredDesc", {
                  defaultValue: "Established with a commitment to excellence",
                }),
              },
              {
                title: t("trust.network", {
                  defaultValue: "Global Network Access",
                }),
                desc: t("trust.networkDesc", {
                  defaultValue:
                    "Working with vetted financial providers globally",
                }),
              },
              {
                title: t("trust.expertise", {
                  defaultValue: "Continual Expertise Growth",
                }),
                desc: t("trust.expertiseDesc", {
                  defaultValue: "Active in ICC, ITFA, and finance programs",
                }),
              },
              {
                title: t("trust.client", {
                  defaultValue: "Client-First Focus",
                }),
                desc: t("trust.clientDesc", {
                  defaultValue: "Built for SMEs, exporters, and consultants",
                }),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow-sm text-center border border-gray-100"
              >
                <h3 className="font-bold text-base mb-2 text-[#2E2E2E]">
                  {item.title}
                </h3>
                <p className="text-[#666666] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Modal */}
      <EmailSignup
        variant="modal"
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
