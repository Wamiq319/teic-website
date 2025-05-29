// components/EmailSignup.tsx
import { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useTranslations } from "next-intl";
import { EmailSignupModal } from "./EmailSignupModal";

export const EmailSignup = () => {
  const t = useTranslations("HomePage.emailSignup");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="email-signup"
      className="py-12 md:py-16 bg-white border-t border-[#F0F0F0]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
            {t("title")} <span className="text-[#7FC242]">{t("subtitle")}</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder={t("placeholder")}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-10/12"
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto px-8"
            >
              {t("button")}
            </Button>
          </div>
          <p className="text-sm text-[#666666] text-center">
            {t("disclaimer")}
          </p>
        </form>
      </div>

      <EmailSignupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialEmail={email}
        initialIsSubmitted={true}
      />
    </section>
  );
};
