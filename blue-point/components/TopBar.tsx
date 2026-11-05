"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function TopBar() {
  const t = useTranslations("app");
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-card/90 backdrop-blur-md border-b border-border z-50 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between gap-3">
        
        {/* Logo aur Name */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Yahan humne image lagayi hai */}
          <div className="relative w-10 h-10 shrink-0">
            <Image 
              src="/logo.png" 
              alt="THE BLUE POINT Logo" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          <span className="font-extrabold text-primary truncate text-lg tracking-wide hidden sm:block">
            {t("name")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
