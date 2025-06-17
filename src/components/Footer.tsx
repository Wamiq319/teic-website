// components/Footer.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Send,
} from "lucide-react";
import { Contact } from "lucide-react";

export const Footer = () => {
  const t = useTranslations("Footer");
  const c = useTranslations("contact");
  const currentYear = new Date().getFullYear();
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_SHARE_URL || "#";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_SHARE_URL || "#";
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_SHARE_URL || "#";
  const telegramURL = process.env.NEXT_PUBLIC_TELEGRAM_SHARE_URL || "#";

  const socialIcons = {
    twitter: (
      <Twitter
        size={20}
        className="text-[#7FC242] hover:text-[#5A7D2C] transition-colors"
      />
    ),
    linkedin: (
      <Linkedin
        size={20}
        className="text-[#7FC242] hover:text-[#5A7D2C] transition-colors"
      />
    ),
    facebook: (
      <Facebook
        size={20}
        className="text-[#7FC242] hover:text-[#5A7D2C] transition-colors"
      />
    ),
    telegram: (
      <Send
        size={20}
        className="text-[#7FC242] hover:text-[#5A7D2C] transition-colors"
      />
    ),
  };

  const socialLinks = {
    twitter: twitterUrl,
    linkedin: linkedinUrl,
    facebook: facebookUrl,
    telegram: telegramURL,
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("company.title")}</h3>
            <p className="text-[#B3B3B3]">{t("company.description")}</p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "facebook", "telegram"].map((social) => (
                <Link
                  key={social}
                  href={socialLinks[social as keyof typeof socialLinks]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`social.${social}`)}
                  className="hover:scale-110 transition-transform"
                >
                  {socialIcons[social as keyof typeof socialIcons]}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("links.title")}</h3>
            <ul className="space-y-2">
              {["home", "about", "services", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "home" ? "" : item}`}
                    className="text-[#B3B3B3] hover:text-[#7FC242] transition-colors"
                  >
                    {t(`links.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("services.title")}
            </h3>
            <ul className="space-y-2">
              {[
                "finance",
                "debt",
                "escrow",
                "banking",
                "guarantees",
                "advisory",
                "due_diligence",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services#${service}`}
                    className="text-[#B3B3B3] hover:text-[#7FC242] transition-colors"
                  >
                    {t(`services.${service}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              {c("title")}
            </h3>

            <address className="not-italic space-y-4">
              {/* WhatsApp - green icon */}
              <div className="flex items-center gap-3 text-gray-300 pt-1">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-[#25D366]" />
                <p>{c("whatsapp")}</p>
              </div>

              {/* International Number */}
              <div className="flex items-center gap-3 text-gray-300">
                <Globe className="h-5 w-5 flex-shrink-0 text-[#7FC242]" />
                <p>{c("intl")}</p>
              </div>

              {/* Primary Phone */}
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#7FC242]" />
                <p>{c("office")}</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#7FC242]" />
                <p>{c("email")}</p>
              </div>

              {/* Address - at bottom as requested */}
              <div className="flex items-start gap-3 text-gray-300 pt-3 border-t border-gray-700 mt-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[#7FC242] mt-0.5" />
                <p>{c("address")}</p>
              </div>

              {/* Language Selector */}
              <div className="pt-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#7FC242] hover:text-[#5A7D2C] transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">{t("language")}</span>
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#333] mt-12 pt-8 text-center text-[#B3B3B3]">
          <p>
            &copy; {currentYear} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
