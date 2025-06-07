"use client";

import { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/Textarea";
import { useTranslations } from "next-intl";
import { Phone, MessageSquare } from "lucide-react";
import { submitToGoogleSheets } from "@/utils/googleSheets";

export const ContactForm = () => {
  const t = useTranslations("ContactPage.form");
  const c = useTranslations("contact");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      type: "contact_form" as const,
    };

    try {
      const result = await submitToGoogleSheets(data);

      if (result) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0E0E0]">
      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">{t("title")}</h3>

      {status === "success" && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
          {t("success")}
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
          {t("error")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label={t("name")}
          name="name"
          placeholder="John Doe"
          required
          disabled={isLoading}
        />
        <Input
          label={t("email")}
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          disabled={isLoading}
        />
        <Textarea
          label={t("message")}
          name="message"
          rows={4}
          placeholder={t("message")}
          required
          disabled={isLoading}
        />
        <Button
          variant="primary"
          type="submit"
          className="w-full md:w-auto"
          disabled={isLoading}
        >
          {isLoading ? t("sending") : t("button")}
        </Button>
      </form>

      <div className="space-y-1 mt-6">
        <div className="flex items-center gap-3 p-3 hover:bg-[#F8F8F8] rounded transition">
          <Phone className="text-[#7FC242] h-5 w-5" />
          <span className="text-[#666666]">{c("mobile")}</span>
        </div>
        <div className="flex items-center gap-3 p-3 hover:bg-[#F8F8F8] rounded transition">
          <MessageSquare className="text-[#7FC242] h-5 w-5" />
          <span className="text-[#666666]">{c("whatsapp")}</span>
          <span className="text-[#666666]">{c("intl")}</span>
        </div>
      </div>
    </div>
  );
};
