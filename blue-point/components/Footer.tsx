"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("home");
  const tApp = useTranslations("app");

  return (
    <footer className="w-full bg-[#020617] text-white pt-16 pb-8 px-4 mt-auto border-t border-white/10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Emergency Disclaimer Banner */}
        <div className="inline-flex items-center gap-3 bg-sos text-white px-6 py-3 rounded-xl font-bold mb-12 shadow-lg shadow-sos/20 text-center">
          <span className="text-2xl">⚠️</span>
          <p className="text-sm md:text-base">{t("footerDisclaimer")}</p>
        </div>
        
        {/* Footer Links Row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm md:text-base font-medium text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">{t("footerAbout")}</Link>
          <Link href="#" className="hover:text-white transition-colors">{t("footerPrivacy")}</Link>
          <Link href="#" className="hover:text-white transition-colors">{t("footerTerms")}</Link>
          <Link href="#" className="hover:text-white transition-colors">{t("footerContact")}</Link>
        </div>
        
        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 mb-8 max-w-4xl mx-auto"></div>
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center justify-center gap-4 text-gray-500">
          <div className="relative w-16 h-16 mb-2">
            <Image src="/logo.png" alt="Logo" fill className="object-contain opacity-80" />
          </div>
          <p className="font-extrabold text-2xl text-white tracking-wide">{tApp("name")}</p>
          <p className="text-sm">{t("footerRights")}</p>
        </div>
      </div>
    </footer>
  );
}
