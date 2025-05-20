"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (targetLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  };

  const navigateToPage = (page: string) => {
    router.push(`/${locale}?page=${page}`);
  };

  return (
    <nav className="p-4 border-b flex justify-between items-center">
      <div className="text-lg font-bold">TEIC Global</div>
      <div className="flex gap-4 items-center">
        <button onClick={() => navigateToPage("home")}>{t("home")}</button>
        <button onClick={() => navigateToPage("about")}>{t("about")}</button>
        <button onClick={() => navigateToPage("services")}>
          {t("services")}
        </button>
        <button onClick={() => navigateToPage("contact")}>
          {t("contact")}
        </button>

        <select
          value={locale}
          onChange={(e) => {
            const newUrl = switchLocale(e.target.value);
            window.location.href = newUrl;
          }}
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="sw">SW</option>
          <option value="ar">AR</option>
          <option value="pt">PT</option>
        </select>
      </div>
    </nav>
  );
}
