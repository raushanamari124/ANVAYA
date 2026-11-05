"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function TopBar() {
  const t = useTranslations("app");
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card/90 backdrop-blur-md border-b border-border z-50 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-9 h-9 rounded-full bg-primary shrink-0 shadow-sm" aria-hidden />
          <span className="font-extrabold text-primary truncate text-lg tracking-wide">{t("name")}</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
