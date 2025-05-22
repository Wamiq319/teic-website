// components/ui/Input.tsx
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-md border ${
          error ? "border-red-500" : "border-[#E0E0E0]"
        } focus:border-[#7FC242] focus:ring-2 focus:ring-[#7FC242]/20 transition-all duration-200 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
