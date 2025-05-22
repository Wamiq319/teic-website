// components/ui/Textarea.tsx
import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = ({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 rounded-md border ${
          error ? "border-red-500" : "border-[#E0E0E0]"
        } focus:border-[#7FC242] focus:ring-2 focus:ring-[#7FC242]/20 transition-all duration-200 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
