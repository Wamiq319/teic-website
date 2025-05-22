// i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "sw", "ar", "pt"],
  defaultLocale: "ar",
});
