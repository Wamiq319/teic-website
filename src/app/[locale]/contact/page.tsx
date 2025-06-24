// app/contact/page.tsx
import { ContactForm } from "@/components/ContactForm";
import { ContactScheduler } from "@/components/ContactScheduler";
import { SocialMedia } from "@/components/ui/SocialMedia";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
            {t("title")}
          </h1>
          <div className="w-30 h-2 bg-[#7FC242] mx-auto mt-4"></div>
          <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactScheduler />
            <SocialMedia />
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
          <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
            {t("map.title")}
          </h3>
          <p className="text-[#666666] mb-4">{t("map.address")}</p>
          <div className="h-96 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.621085755985!2d11.513510414757853!3d3.868826397070722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc3a6d5e4c3f1%3A0x3f4a3f4a3f4a3f4a!2sSIS%20PHC%20IIE%20UNIVERSITE%2C%20Yaound%C3%A9%2C%20CENTRE%2C%20BP%208126%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1623861234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(20%) contrast(90%) hue-rotate(10deg)",
              }}
              allowFullScreen
              loading="lazy"
              className="dark:invert-[90%]"
              title="Location of SIS PHC IIE UNIVERSITE"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
