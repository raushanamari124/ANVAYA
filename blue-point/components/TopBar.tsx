"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function TopBar() {
  const t = useTranslations("app");
  return (
    // Background ko permanently white kiya gaya hai (dono modes me same)
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between gap-3">
        
        {/* Logo aur Name */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Logo thoda bada kiya gaya hai (w-14 h-14) */}
          <div className="relative w-14 h-14 shrink-0">
            <Image 
              src="/logo.png" 
              alt="THE BLUE POINT Logo" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          {/* Text bada aur dark blue kiya gaya hai */}
          <span className="font-extrabold text-[#1E5AA8] truncate text-2xl tracking-wide hidden sm:block">
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
