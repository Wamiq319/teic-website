"use client";

import { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useTranslations } from "next-intl";
import { Modal } from "./ui/Modal";
import { submitToGoogleSheets } from "@/utils/googleSheets";
import { CheckCircle2 } from "lucide-react";
import { Toast } from "./ui/Toast";

interface EmailSignupProps {
  variant?: "modal" | "standalone";
  onClose?: () => void;
  pdfLink?: string;
  isOpen?: boolean;
  buttonText?: string;
  placeholderText?: string;
  title?: string;
  subtitle?: string;
  disclaimer?: string;
  successMessage?: string;
}

export const EmailSignup = ({
  variant = "standalone",
  onClose = () => {},
  pdfLink = process.env.NEXT_PUBLIC_PDF_PATH,
  isOpen = false,
  buttonText,
  placeholderText,
  title,
  subtitle,
  disclaimer,
  successMessage,
}: EmailSignupProps) => {
  const PDF_PATH = process.env.NEXT_PUBLIC_PDF_PATH;
  const t = useTranslations("EmailSignup");
  const e = useTranslations("toastMessages");

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error" as "success" | "error" | "info",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleDownload = () => {
    window.open(PDF_PATH, "_blank");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.trim()) {
      setToast({
        show: true,
        message: e("emptyEmailError"),
        type: "error",
      });
      return;
    }

    if (!validateEmail(email)) {
      setToast({
        show: true,
        message: e("invalidEmailError"),
        type: "error",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await submitToGoogleSheets({
        email,
        type: "email_signup",
      });

      if (result) {
        setToast({
          show: true,
          message: e("successSubmission"),
          type: "success",
        });
        setIsSubmitted(true);
      } else {
        setToast({
          show: true,
          message: e("failedSubmission"),
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setToast({
        show: true,
        message: e("networkError"),
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Modal Variant
  if (variant === "modal") {
    return (
      <>
        <Modal
          isOpen={isOpen && !isSubmitted}
          onClose={onClose}
          title={t("title")}
        >
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input
              type="email"
              placeholder={t("placeholder")}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? t("submitting") : buttonText || t("button")}
            </Button>
            <p className="text-sm text-[#666666] text-center">
              {disclaimer || t("disclaimer")}
            </p>
          </form>
        </Modal>

        <Modal isOpen={isOpen && isSubmitted} onClose={onClose}>
          <div className="text-center space-y-4">
            <p className="text-[#666666]">{t("successModal.message")}</p>
            <div className="flex justify-center">
              <button
                onClick={handleDownload}
                className="text-[#7FC242] hover:text-[#5A7D2C] underline"
              >
                {t("successModal.download")}
              </button>
            </div>
            <Button variant="outline" onClick={onClose} className="w-full mt-4">
              {t("successModal.close")}
            </Button>
          </div>
        </Modal>

        {toast.show && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast((prev) => ({ ...prev, show: false }))}
          />
        )}
      </>
    );
  }

  // Standalone Variant
  return (
    <section className="py-12 md:py-16 bg-white border-t border-[#F0F0F0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
            {title || t("standalone.title")}{" "}
            {subtitle && <span className="text-[#7FC242]">{subtitle}</span>}
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
              disabled={isLoading}
            >
              {isLoading ? t("submitting") : t("button")}
            </Button>
          </div>
          <p className="text-sm text-[#666666] text-center">
            {t("disclaimer")}
          </p>
        </form>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
        />
      )}
    </section>
  );
};
