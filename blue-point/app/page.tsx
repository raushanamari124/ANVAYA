"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("home");
  const tApp = useTranslations("app");

  // 9 Features Grid (3x3 Layout)
  const features = [
    // Row 1: High Impact & Safety
    { icon: "🆘", title: t("featSosTitle"), desc: t("featSosDesc"), color: "border-t-red-500", bg: "bg-red-500/10" },
    { icon: "📋", title: t("featFamilyTitle"), desc: t("featFamilyDesc"), color: "border-t-blue-500", bg: "bg-blue-500/10" },
    { icon: "🛵", title: t("featHelpersTitle"), desc: t("featHelpersDesc"), color: "border-t-green-500", bg: "bg-green-500/10" },
    
    // Row 2: Daily Needs & Delivery
    { icon: "⏰", title: t("featRemindersTitle"), desc: t("featRemindersDesc"), color: "border-t-orange-500", bg: "bg-orange-500/10" },
    { icon: "🛒", title: t("featGroceryTitle"), desc: t("featGroceryDesc"), color: "border-t-teal-500", bg: "bg-teal-500/10" },
    { icon: "🏥", title: t("featMedicineTitle"), desc: t("featMedicineDesc"), color: "border-t-pink-500", bg: "bg-pink-500/10" },
    
    // Row 3: Connection & Control
    { icon: "📹", title: t("featVideoTitle"), desc: t("featVideoDesc"), color: "border-t-indigo-500", bg: "bg-indigo-500/10" },
    { icon: "🎙️", title: t("featVoiceTitle"), desc: t("featVoiceDesc"), color: "border-t-yellow-500", bg: "bg-yellow-500/10" },
    { icon: "🔒", title: t("featConsentTitle"), desc: t("featConsentDesc"), color: "border-t-purple-500", bg: "bg-purple-500/10" },
  ];

  const workflow = [
    { step: t("step1Title"), desc: t("step1Desc"), icon: "📱" },
    { step: t("step2Title"), desc: t("step2Desc"), icon: "🔀" },
    { step: t("step3Title"), desc: t("step3Desc"), icon: "✅" },
    { step: t("step4Title"), desc: t("step4Desc"), icon: "🏁" },
  ];

  // Updated Portals with Descriptions and Colored Icons
  const portals = [
    { id: "person", label: t("parents"), desc: t("parentsDesc"), icon: "👴", href: "/dashboard", color: "hover:border-blue-500 hover:bg-blue-500/5", iconBg: "bg-blue-500/10 text-blue-500" }, 
    { id: "family", label: t("family"), desc: t("familyDesc"), icon: "👨‍👩‍👧", href: "/register?role=family", color: "hover:border-green-500 hover:bg-green-500/5", iconBg: "bg-green-500/10 text-green-500" },
    { id: "doctor", label: t("doctor"), desc: t("doctorDesc"), icon: "🩺", href: "/register?role=doctor", color: "hover:border-purple-500 hover:bg-purple-500/5", iconBg: "bg-purple-500/10 text-purple-500" },
    { id: "helper", label: t("ngo"), desc: t("ngoDesc"), icon: "🤝", href: "/register?role=helper", color: "hover:border-orange-500 hover:bg-orange-500/5", iconBg: "bg-orange-500/10 text-orange-500" },
  ];

  return (
    <div className="flex flex-col min-h-screen -mt-20 pt-20"> 
      
           {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background Image - Full Brightness */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Happy family together" fill className="object-cover object-center" priority />
          
          {/* Trick: Ek dark blurred circle sirf text ke peeche, taaki photo full bright rahe */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] md:w-[60%] h-[60%] bg-black/50 blur-[100px] rounded-full"></div>
          </div>

          {/* Niche wale section se blend karne ke liye gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          
          {/* H1 Text - White part with strong shadow */}
          <h1 className="text-[40px] md:text-[64px] font-extrabold leading-tight text-white mb-2 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            {t("heroTitle")}
          </h1>
          
          {/* H1 Text - Gradient part with THICK outline/shadow so it pops */}
          <h1 className="text-[40px] md:text-[64px] font-extrabold leading-tight mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              {t("heroTitleHighlight")}
            </span>
          </h1>
          
          {/* Subtitle - Bold white with strong black shadow */}
          <p className="text-lg md:text-2xl text-white font-bold mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
            {t("heroSubtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#features" className="w-full sm:w-auto px-8 h-[56px] flex items-center justify-center bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-hover shadow-lg transition-all transform hover:-translate-y-1">
              {t("btnPrimary")}
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto px-8 h-[56px] flex items-center justify-center bg-black/40 backdrop-blur-md border-2 border-white/50 text-white font-bold text-lg rounded-xl hover:bg-black/60 transition-all shadow-lg">
              {t("btnSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. REQUEST-TO-RESOLUTION WORKFLOW */}
      <section className="w-full bg-bg dark:bg-[#0F172A] py-20 px-4 border-b border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">{t("workflowTitle")}</h2>
          <p className="text-lg text-text/60 mb-16">{t("workflowSubtitle")}</p>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-border -z-10 -translate-y-1/2"></div>
            
            {workflow.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center bg-card p-6 rounded-2xl border border-border shadow-sm w-full md:w-auto relative z-10">
                <div className="w-16 h-16 rounded-full bg-bg border-2 border-primary flex items-center justify-center text-2xl mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{item.step}</h3>
                <p className="text-sm text-text/70 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE CARDS (9 Cards Grid) */}
      <section id="features" className="w-full bg-card py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-text mb-4">{t("featuresTitle")}</h2>
            <p className="text-lg text-text/60 max-w-2xl mx-auto">{t("featuresSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className={`bg-bg rounded-2xl p-8 border border-border border-t-4 ${feat.color} shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}>
                <div className={`w-16 h-16 rounded-2xl ${feat.bg} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{feat.title}</h3>
                <p className="text-text/70 leading-relaxed text-sm md:text-base">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ROLE SELECTION (PREMIUM CARDS) */}
      <section id="roles" className="w-full bg-bg py-24 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mb-4">{t("rolesTitle")}</h2>
          <p className="text-lg text-text/60 mb-16">{t("rolesSubtitle")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portals.map((portal) => (
              <Link 
                key={portal.id} 
                href={portal.href}
                className={`group flex flex-col items-start p-8 bg-card border-2 border-border rounded-3xl transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 ${portal.color}`}
              >
                {/* Icon with colored background */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 ${portal.iconBg}`}>
                  {portal.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors text-left">
                  {portal.label}
                </h3>
                
                {/* Description */}
                <p className="text-text/70 text-sm leading-relaxed text-left mb-6 flex-grow">
                  {portal.desc}
                </p>

                {/* Action Link */}
                <div className="mt-auto pt-4 w-full border-t border-border flex items-center justify-between text-primary font-semibold text-sm group-hover:text-primary-hover">
                  <span>Enter Portal</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
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
    </div>
  );
}
