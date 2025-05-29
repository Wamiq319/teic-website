// components/Footer.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Globe, Twitter, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  const t = useTranslations("Footer");
  const c = useTranslations("contact");
  const currentYear = new Date().getFullYear();

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
              {["twitter", "linkedin", "facebook"].map((social) => (
                <Link
                  key={social}
                  href="#"
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

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{c("title")}</h3>
            <address className="not-italic text-[#B3B3B3] space-y-2">
              <p>{c("address")}</p>
              <p>{c("phone1")}</p>
              <p>{c("phone2")}</p>
              <p>{c("phone3")}</p>
              <p>{c("phone4")}</p>
              <p>{c("email")}</p>
              <div className="pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center text-[#7FC242] hover:text-[#5A7D2C]"
                >
                  <Globe className="mr-2" size={16} />
                  {t("language")}
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
