"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Register() {
  const t = useTranslations("register");
  const tApp = useTranslations("app");
  const [role, setRole] = useState("person");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true); // Fake success for now
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-success mb-4">{t("success")}</h2>
        <Link href="/" className="text-primary hover:underline font-semibold">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center gap-10 py-10">
      
      {/* Left Side (Desktop Only) */}
      <div className="hidden md:flex flex-col w-1/2 max-w-md">
        <h1 className="text-[36px] font-extrabold text-primary leading-tight">{tApp("name")}</h1>
        <p className="text-xl text-text mt-4">{tApp("tagline")}</p>
        <ul className="mt-8 space-y-4 text-text/80">
          <li className="flex items-center gap-3">✅ Secure & Private</li>
          <li className="flex items-center gap-3">✅ Family & Community Support</li>
          <li className="flex items-center gap-3">✅ Real-time Help Coordination</li>
        </ul>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full max-w-[480px] bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="text-[28px] font-bold mb-1">{t("title")}</h2>
        <p className="text-text/70 mb-6">{t("subtitle")}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">{t("fullName")}</label>
            <input required type="text" className="w-full h-12 px-3 rounded-lg border border-border bg-bg focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Phone or Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">{t("contact")}</label>
            <input required type="text" className="w-full h-12 px-3 rounded-lg border border-border bg-bg focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">{t("password")}</label>
            <input required type="password" className="w-full h-12 px-3 rounded-lg border border-border bg-bg focus:ring-2 focus:ring-primary outline-none" />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold mb-2">{t("role")}</label>
            <div className="space-y-3">
              {[
                { id: "person", label: t("rolePerson") },
                { id: "family", label: t("roleFamily") },
                { id: "helper", label: t("roleHelper") },
              ].map((r) => (
                <label key={r.id} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${role === r.id ? "border-primary bg-primary/5" : "border-border hover:bg-bg"}`}>
                  <input type="radio" name="role" value={r.id} checked={role === r.id} onChange={() => setRole(r.id)} className="w-5 h-5 text-primary focus:ring-primary" />
                  <span className="font-medium text-text">{r.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Consent Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer mt-4">
            <input required type="checkbox" className="w-5 h-5 mt-1 rounded border-border text-primary focus:ring-primary" />
            <span className="text-sm text-text/80 leading-tight">{t("consent")}</span>
          </label>

          <button type="submit" className="w-full h-[56px] bg-primary text-white font-bold text-lg rounded-xl mt-2 hover:bg-primary/90 transition-colors">
            {t("continue")}
          </button>
        </form>
      </div>
    </div>
  );
}
