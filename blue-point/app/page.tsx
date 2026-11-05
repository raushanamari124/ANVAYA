"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("home");
  const tApp = useTranslations("app");

  // Features List based on your project brief
  const features = [
    { icon: "⏰", title: t("featRemindersTitle"), desc: t("featRemindersDesc"), border: "border-t-blue-500" },
    { icon: "🤝", title: t("featHelpTitle"), desc: t("featHelpDesc"), border: "border-t-orange-500" },
    { icon: "🆘", title: t("featSosTitle"), desc: t("featSosDesc"), border: "border-t-red-500" },
    { icon: "📋", title: t("featFamilyTitle"), desc: t("featFamilyDesc"), border: "border-t-green-500" },
    { icon: "🛡️", title: t("featHelpersTitle"), desc: t("featHelpersDesc"), border: "border-t-purple-500" },
    { icon: "🔒", title: t("featConsentTitle"), desc: t("featConsentDesc"), border: "border-t-yellow-500" },
  ];

  // Role boxes from your sketch
  const portals = [
    { id: "person", label: t("parents"), icon: "👴", href: "/register?role=person" },
    { id: "family", label: t("family"), icon: "👨‍👩‍👧", href: "/register?role=family" },
    { id: "doctor", label: t("doctor"), icon: "🩺", href: "/register?role=doctor" },
    { id: "helper", label: t("ngo"), icon: "🤝", href: "/register?role=helper" },
  ];

  return (
    <div className="flex flex-col min-h-screen -mt-16 pt-16"> 
      {/* Note: -mt-16 pt-16 use kiya hai taaki topbar ke niche se full width background shuru ho sake */}

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/20 py-20 lg:py-32 flex flex-col items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[40px] md:text-[60px] font-extrabold leading-tight text-text mb-4">
            {t("heroTitle")} <br className="hidden md:block" />
            <span className="text-primary">{t("heroTitleHighlight")}</span>
          </h1>
          <p className="text-lg md:text-2xl text-text/80 mb-10 max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#roles" className="w-full sm:w-auto px-8 h-[56px] flex items-center justify-center bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg">
              {t("btnGetStarted")}
            </Link>
            <Link href="#features" className="w-full sm:w-auto px-8 h-[56px] flex items-center justify-center bg-card border-2 border-border text-text font-bold text-lg rounded-xl hover:border-primary transition-colors">
              {t("btnLearnMore")}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section id="features" className="w-full max-w-[1200px] mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t("featuresTitle")}</h2>
          <p className="text-lg text-text/70">{t("featuresSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className={`bg-card rounded-2xl p-8 border border-border border-t-4 ${feat.border} shadow-sm hover:shadow-md transition-shadow`}>
              <div className="w-14 h-14 rounded-full bg-bg flex items-center justify-center text-3xl mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{feat.title}</h3>
              <p className="text-text/70 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ROLE SELECTION SECTION (Aapka Sketch) */}
      <section id="roles" className="w-full bg-card border-y border-border py-20 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t("rolesTitle")}</h2>
          <p className="text-lg text-text/70 mb-12">{t("rolesSubtitle")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portals.map((portal) => (
              <Link 
                key={portal.id} 
                href={portal.href}
                className="group flex flex-col items-center justify-center p-8 bg-bg border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all duration-200 min-h-[220px]"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {portal.icon}
                </span>
                <h3 className="text-xl font-bold text-center text-text group-hover:text-primary transition-colors">
                  {portal.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER / SAFETY DISCLAIMER */}
      <footer className="w-full bg-text text-bg py-12 px-4 mt-auto">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-block bg-sos text-white px-6 py-3 rounded-xl font-bold mb-8 shadow-lg">
            ⚠️ {t("footerDisclaimer")}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-bg/60">
            <p className="font-bold text-xl text-bg">{tApp("name")}</p>
            <p className="hidden md:block">•</p>
            <p>{t("footerRights")}</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
