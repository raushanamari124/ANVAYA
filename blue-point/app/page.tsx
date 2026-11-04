"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("app");
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-10">
      <h1 className="text-[32px] md:text-[48px] font-extrabold text-primary mb-4">{t("name")}</h1>
      <p className="text-xl text-text/80 max-w-2xl mb-8">{t("tagline")}</p>
      
      <Link href="/register" className="px-8 h-[56px] flex items-center justify-center bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg">
        Get Started / शुरू करें
      </Link>
    </section>
  );
}
