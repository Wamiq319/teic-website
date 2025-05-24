// app/about/page.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const teamMembers = [
    {
      name: "john_doe",
      position: "ceo",
      image: "/assets/images/team/john-doe.jpg",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "jane_smith",
      position: "cfo",
      image: "/assets/images/team/jane-smith.jpg",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      name: "amina_bello",
      position: "finance_advisor",
      image: "/assets/images/team/amina-bello.jpg",
      linkedin: "https://linkedin.com/in/aminabello",
    },
  ];

  return (
    <section className="bg-[#F8F8F8]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-[#7FC242] mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-[#666666] max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* History & Mission Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* History Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0E0E0]">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
              {t("history.title")}
            </h2>
            <div className="text-[#666666] space-y-4">
              <p>{t("history.content.line1")}</p>
              <p>{t("history.content.line2")}</p>
              <p>{t("history.content.line3")}</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0E0E0]">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
              {t("mission.title")}
            </h2>
            <div className="text-[#666666] space-y-4">
              <p>{t("mission.content.line1")}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t("mission.content.point1")}</li>
                <li>{t("mission.content.point2")}</li>
                <li>{t("mission.content.point3")}</li>
              </ul>
              <p>{t("mission.content.line2")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] mb-4">
            {t("team.title")}
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0] hover:shadow-md transition-all"
            >
              <div className="relative w-full h-60 mb-4 rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={t(`team.members.${member.name}.name`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h4 className="text-lg font-bold text-[#2E2E2E]">
                {t(`team.members.${member.name}.name`)}
              </h4>
              <p className="text-[#7FC242] mb-2">
                {t(`team.members.${member.name}.position`)}
              </p>
              <p className="text-[#666666] text-sm mb-4">
                {t(`team.members.${member.name}.bio`)}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#0077B5] hover:text-[#005582] transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                {t("team.linkedin")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
