"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { EmailSignup } from "./EmailSignup";

interface HeroSectionProps {
  onCallButtonClick: () => void;
}

export const HeroSection = ({ onCallButtonClick }: HeroSectionProps) => {
  const t = useTranslations("HomePage.hero");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-[#F8F8F8]">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/images/africa-map-bg.jpeg"
          alt="Africa map background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center py-12">
        {/* Logo */}
        <div className="mb-1 w-32 md:w-44 h-16 md:h-22 overflow-hidden">
          <Image
            src="/assets/svgs/logo.svg"
            alt="TEIC Global Logo"
            width={180}
            height={90}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#2E2E2E] mb-4 leading-snug">
          {t("headline1")} <br className="hidden md:block" />
          {t("headline2")}
          <span className="inline-block w-2" />
          <span className="text-[#7FC242]">{t("headline3")}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto mb-8">
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            onClick={() => setIsEmailModalOpen(true)}
            className="px-6 py-3 text-base md:text-lg"
          >
            {t("ctaEmail")}
          </Button>

          <Button
            variant="outline"
            onClick={onCallButtonClick}
            className="px-6 py-3 text-base md:text-lg border-2"
          >
            {t("ctaCall")}
          </Button>
        </div>
      </div>

      <EmailSignup
        variant="modal"
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </section>
  );
};
