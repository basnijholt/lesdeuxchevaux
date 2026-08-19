"use client";

import { useTranslation } from "@/i18n";

const EMAIL = "lesdeuxchevaux@gmail.com";

interface ReserveButtonProps {
  /** "light" op een donkere achtergrond, "dark" op een lichte achtergrond */
  variant?: "light" | "dark";
  className?: string;
}

export default function ReserveButton({
  variant = "dark",
  className = "",
}: ReserveButtonProps) {
  const { t } = useTranslation();

  const href =
    `mailto:${EMAIL}` +
    `?subject=${encodeURIComponent(t.common.reserveSubject)}` +
    `&body=${encodeURIComponent(t.common.reserveBody)}`;

  const styles =
    variant === "light"
      ? "bg-white text-amber-800 hover:bg-amber-50"
      : "bg-amber-700 text-white hover:bg-amber-800";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all ${styles} ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
      {t.common.reserve}
    </a>
  );
}