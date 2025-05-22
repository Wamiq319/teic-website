// components/ui/Card.tsx
import { ReactNode } from "react";

export const Card = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-[#F0F0F0] hover:shadow-md transition-all duration-200 h-full">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-[#7FC242]">{icon}</div>
      <h3 className="text-lg font-semibold text-[#2E2E2E] mb-2">{title}</h3>
      <p className="text-[#666666] text-sm">{description}</p>
    </div>
  </div>
);
