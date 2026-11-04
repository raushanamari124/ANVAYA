"use client";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("app");
  return (
    <section className="py-10">
      <h1 className="text-[28px] md:text-[36px] font-extrabold text-primary">{t("name")}</h1>
      <p className="mt-2 text-text text-lg">{t("tagline")}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">Language switch test (Top bar)</div>
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">Dark/Light mode test (Top bar)</div>
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">Vercel Auto-deploy test</div>
      </div>
    </section>
  );
}
