// components/ContactForm.tsx
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/Textarea";
import { useTranslations } from "next-intl";
import { Phone, MessageSquare } from "lucide-react";

export const ContactForm = () => {
  const t = useTranslations("ContactPage.form");

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">{t("title")}</h3>
      <form className="space-y-4">
        <Input label={t("name")} name="name" placeholder="John Doe" required />
        <Input
          label={t("email")}
          name="email"
          type="email"
          placeholder="john@example.com"
          required
        />
        <Textarea
          label={t("message")}
          name="message"
          rows={4}
          placeholder={t("message")}
          required
        />
        <Button variant="primary" type="submit" className="w-full md:w-auto">
          {t("button")}
        </Button>
      </form>

      <div className="space-y-1">
        <div className="flex items-center gap-3 p-3 hover:bg-[#F8F8F8] rounded transition">
          <Phone className="text-[#7FC242] h-5 w-5" />
          <span className="text-[#666666]">+123 456 7890</span>
        </div>
        <div className="flex items-center gap-3 p-3 hover:bg-[#F8F8F8] rounded transition">
          <MessageSquare className="text-[#7FC242] h-5 w-5" />
          <span className="text-[#666666]">+123 456 7890</span>
        </div>
      </div>
    </div>
  );
};
