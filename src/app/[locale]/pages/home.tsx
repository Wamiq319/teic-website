// app/[lang]/page.tsx
import { HeroSection } from "@/components/Hero";
import { Card } from "@/components/ui/Card";
import { Globe, ShieldCheck, Cpu } from "lucide-react";
import { useTranslations } from "next-intl";
import Testimonials from "@/components/Testimonial";
import { EmailSignup } from "@/components/EmailSignup";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const whyChooseUs = t.raw("whyChooseUs");

  const icons = [
    <Globe size={32} key="globe" />,
    <ShieldCheck size={32} key="shield" />,
    <Cpu size={32} key="cpu" />,
  ];

  return (
    <main>
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
              {whyChooseUs.title}
            </h2>
            <div className="w-20 h-1 bg-[#7FC242] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.features.map((feature: any, index: number) => (
              <Card
                key={index}
                icon={icons[index]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <EmailSignup />
    </main>
  );
}
