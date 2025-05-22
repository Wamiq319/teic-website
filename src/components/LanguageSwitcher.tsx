"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "sw", label: "Kiswahili" },
  { code: "ar", label: "العربية" },
  { code: "pt", label: "Português" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const switchLocale = (targetLocale: string) => {
    if (!pathname) return;

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "/";

    // Redirect to new locale with the same path
    router.push(`/${targetLocale}/${pathWithoutLocale}`);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`hover:cursor-pointer flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors
          text-[#2E2E2E] hover:text-[#7FC242] 
          border border-[#2E2E2E]/20 hover:border-[#7FC242]/50
          bg-transparent hover:bg-[#F8F8F8]`}
        aria-label="Change language"
      >
        <Globe size={14} className="text-[#666666] min-w-[14px]" />
        <span className="hidden sm:inline">
          {languages.find((lang) => lang.code === locale)?.label || "Language"}
        </span>
      </button>

      {open && (
        <div
          className={`absolute  ${
            locale === "ar" ? "left-0" : "right-0"
          } mt-2 w-40 bg-white  border border-[#2E2E2E]/10 rounded-md shadow-lg z-10 overflow-hidden`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`block w-full  text-left px-4 py-2 text-sm transition-colors hover:cursor-pointer
                ${
                  locale === lang.code
                    ? "text-[#5A7D2C] bg-[#F8F8F8] font-medium "
                    : "text-[#2E2E2C] hover:text-[#7FC242] hover:bg-[#F8F8F8]"
                }`}
              aria-label={`Switch to ${lang.label}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
