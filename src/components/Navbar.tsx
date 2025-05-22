"use client";

import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";

const NAV_ITEMS = [
  { path: "home", key: "home" },
  { path: "about", key: "about" },
  { path: "services", key: "services" },
  { path: "contact", key: "contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "home") {
      return pathname === `/${locale}` || pathname === `/${locale}/home`
        ? "text-[#5A7D2C] font-semibold"
        : "";
    }
    return pathname?.includes(path) ? "text-[#5A7D2C] font-semibold" : "";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F8F8] shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <nav className="max-w-7xl mx-auto px-2 py-1 sm:px-4 sm:py-2">
        <div className="flex items-center justify-between gap-1 sm:gap-3">
          {/* Logo */}
          <Link href={`/${locale}`} aria-label="TEIC Global Home">
            <Image
              src="/assets/images/logo.png"
              alt="TEIC Global Logo"
              className="w-8 sm:w-10 md:w-12"
              width={32}
              height={32}
              loading="eager"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-0.5 sm:gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={`/${locale}/${item.path === "home" ? "" : item.path}`}
                  className={`text-xs sm:text-sm px-1.5 sm:px-2.5 py-1 rounded-md
                    text-[#2E2E2E] hover:text-[#7FC242] transition-colors ${isActive(
                      item.path
                    )}`}
                  aria-label={t(item.key)}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
