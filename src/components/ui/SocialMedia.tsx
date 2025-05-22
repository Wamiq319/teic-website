// components/SocialMedia.tsx
import { useTranslations } from "next-intl";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export const SocialMedia = () => {
  const t = useTranslations("ContactPage.social");

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">{t("title")}</h3>
      <div className="flex gap-4">
        <SocialIcon
          name="twitter"
          label={t("twitter")}
          icon={<Twitter className="h-6 w-6" />}
        />
        <SocialIcon
          name="linkedin"
          label={t("linkedin")}
          icon={<Linkedin className="h-6 w-6" />}
        />
        <SocialIcon
          name="facebook"
          label={t("facebook")}
          icon={<Facebook className="h-6 w-6" />}
        />
      </div>
    </div>
  );
};

const SocialIcon = ({
  name,
  label,
  icon,
}: {
  name: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <a
    href="#"
    className="flex items-center gap-2 p-3 rounded-full bg-[#F8F8F8] hover:bg-[#7FC242] hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);
