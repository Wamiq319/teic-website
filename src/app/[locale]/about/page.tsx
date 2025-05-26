// app/about/page.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Linkedin } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const params = useParams();
  const isRTL = params.locale === "ar";

  const teamMembers = [
    {
      image: "/assets/images/team/teic-ceo.jpg", // Path relative to public folder
      name: t("team.members.john_doe.name"),
      position: t("team.members.john_doe.position"),
      bio: t("team.members.john_doe.bio"),
      linkedin: "https://linkedin.com/in/example",
    },
    {
      image: "/assets/images/team/teic-ceo.jpg",
      name: t("team.members.jane_smith.name"),
      position: t("team.members.jane_smith.position"),
      bio: t("team.members.jane_smith.bio"),
      linkedin: "https://linkedin.com/in/example",
    },
    {
      image: "/assets/images/team/teic-ceo.jpg",
      name: t("team.members.amina_bello.name"),
      position: t("team.members.amina_bello.position"),
      bio: t("team.members.amina_bello.bio"),
      linkedin: "https://linkedin.com/in/example",
    },
  ];
  return (
    <div className="bg-[#F8F8F8]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
              {t("title")}
            </h1>
            <div className="w-20 h-1 bg-[#7FC242] mx-auto mb-4"></div>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* History Box */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                {t("history.title")}
              </h2>
              <div className="space-y-4 text-[#666666]">
                <p>{t("history.content.line1")}</p>
                <p>{t("history.content.line2")}</p>
                <p>{t("history.content.line3")}</p>
              </div>
            </div>

            {/* Mission Box */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0E0E0] hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                {t("mission.title")}
              </h2>
              <div className="space-y-4 text-[#666666]">
                <p>{t("mission.content.line1")}</p>
                <ul
                  className={`list-disc ${isRTL ? "mr-4" : "ml-4"} space-y-2`}
                >
                  <li>{t("mission.content.point1")}</li>
                  <li>{t("mission.content.point2")}</li>
                  <li>{t("mission.content.point3")}</li>
                </ul>
                <p>{t("mission.content.line2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">
              {t("team.title")}
            </h2>
            <p className="text-lg text-[#666666]">{t("team.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F8F8F8] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top" // Focus on top alignment
                    style={{ objectPosition: "top" }} // Explicit top alignment
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#7FC242] font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-[#666666] mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#2E2E2E] hover:text-[#7FC242] transition-colors"
                  >
                    <Linkedin
                      className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`}
                    />
                    {t("team.linkedin")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
