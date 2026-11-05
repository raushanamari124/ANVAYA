"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("home");

  const portals = [
    { id: "parents", label: t("parents"), icon: "👴", href: "/register?role=person" },
    { id: "family", label: t("family"), icon: "👨‍👩‍👧", href: "/register?role=family" },
    { id: "doctor", label: t("doctor"), icon: "🩺", href: "/register?role=doctor" },
    { id: "ngo", label: t("ngo"), icon: "🤝", href: "/register?role=helper" },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center py-12 px-4 max-w-[1200px] mx-auto">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-[32px] md:text-[42px] font-extrabold text-primary mb-3">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-text/80">
          {t("subtitle")}
        </p>
      </div>

      {/* 4 Portals Grid (Aapke sketch ke hisaab se) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
        {portals.map((portal) => (
          <Link 
            key={portal.id} 
            href={portal.href}
            className="group flex flex-col items-center justify-center p-8 bg-card border-2 border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-primary transition-all duration-200 min-h-[200px]"
          >
            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {portal.icon}
            </span>
            <h2 className="text-xl font-bold text-center text-text group-hover:text-primary transition-colors">
              {portal.label}
            </h2>
          </Link>
        ))}
      </div>

      {/* About Website Section (Niche wala bada box) */}
      <div className="w-full bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        {/* Background design element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">ℹ️</span>
            {t("aboutTitle")}
          </h2>
          <p className="text-text/80 text-lg leading-relaxed max-w-4xl">
            {t("aboutDesc")}
          </p>
        </div>
      </div>

    </div>
  );
}
