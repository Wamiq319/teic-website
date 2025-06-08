"use client";

import { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/Textarea";
import { useTranslations } from "next-intl";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { submitToGoogleSheets } from "@/utils/googleSheets";

export const ContactForm = () => {
  const t = useTranslations("ContactPage.form");
  const c = useTranslations("contact");
  const m = useTranslations("toastMessages");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formKey, setFormKey] = useState(0);

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
        setFormKey((prevKey) => prevKey + 1); // Change the key to reset the form
      } else {
        setStatus("error");
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
          {m("successSubmission")}
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
          {m("failedSubmission")}
        </div>
      )}

      <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
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

      <div className="flex items-center gap-4 p-3 hover:bg-[#F8F8F8] rounded-lg transition-all duration-200 cursor-pointer">
        <div className="p-2 bg-[#25D366]/10 rounded-full">
          <MessageSquare className="text-[#25D366] h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            {c("WhatsApp")}
          </span>
          <span className="text-xs text-gray-500 mt-1">{c("whatsapp")}</span>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center gap-4 p-3 hover:bg-[#F8F8F8] rounded-lg transition-all duration-200 cursor-pointer">
        <div className="p-2 bg-[#EA4335]/10 rounded-full">
          <Mail className="text-[#EA4335] h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            {c("Email")}
          </span>
          <span className="text-xs text-gray-500 mt-1">{c("email")}</span>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-center gap-4 p-3 hover:bg-[#F8F8F8] rounded-lg transition-all duration-200 cursor-pointer">
        <div className="p-2 bg-[#4285F4]/10 rounded-full">
          <MapPin className="text-[#4285F4] h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">
            {c("Address")}
          </span>
          <span className="text-xs text-gray-500 mt-1">{c("address")}</span>
        </div>
      </div>
    </div>
  );
};
