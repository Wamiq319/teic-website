import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        cta1={t("hero.ctaEmail")}
        cta2={t("hero.ctaCall")}
      />
    </main>
  );
}
