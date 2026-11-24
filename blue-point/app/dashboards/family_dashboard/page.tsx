"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function FamilyDashboard() {
  const t = useTranslations("familyDashboard");
  const [activeSos, setActiveSos] = useState(true); // Demo ke liye true

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <div className="max-w-[1400px] mx-auto w-full px-4 py-8 space-y-6 flex-grow mt-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-text">{t("greeting")}</h1>
            <p className="text-text/70 text-lg">{t("subtitle")}</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 h-12 bg-card border border-border text-text font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              📞 {t("callingPapa")}
            </button>
            <Link href="/" className="px-6 h-12 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-hover transition-colors flex items-center gap-2">
              🏠 Home
            </Link>
          </div>
        </div>

        {/* SOS Alert */}
        {activeSos && (
          <div className="bg-sos text-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-sos/30 border-4 border-red-400 animate-pulse-slow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-6xl">🚨</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-1">{t("sosAlert")}</h2>
                <p className="text-lg text-red-100">{t("sosDesc")}</p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-8 py-4 bg-white text-sos font-extrabold text-xl rounded-xl shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                {t("call112")}
              </button>
              <button 
                onClick={() => setActiveSos(false)}
                className="flex-1 md:flex-none px-6 py-4 bg-red-800 text-white font-bold rounded-xl hover:bg-red-900 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Status Card */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                👴 {t("fatherStatus")}
              </h3>
              <div className="bg-success/10 border border-success/20 rounded-2xl p-4 flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-success text-white rounded-full flex items-center justify-center text-2xl">✓</div>
                <p className="text-success font-bold text-lg">{t("statusFine")}</p>
              </div>
              
              <div className="bg-bg border border-border rounded-2xl p-4">
                <h4 className="font-bold text-text mb-2 flex items-center gap-2">💊 {t("medStatus")}</h4>
                <p className="text-sm text-text/80">{t("medTaken")}</p>
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                📋 {t("tasks")}
              </h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 p-3 bg-bg rounded-xl border border-border">
                  <input type="checkbox" className="w-5 h-5 rounded text-primary" />
                  <p className="font-medium">{t("task1")}</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-bg rounded-xl border border-border">
                  <input type="checkbox" className="w-5 h-5 rounded text-primary" />
                  <p className="font-medium">{t("task2")}</p>
                </div>
              </div>
              <button className="w-full py-3 border-2 border-dashed border-primary/40 text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors">
                {t("addTask")}
              </button>
            </div>

          </div>

          {/* Right Column (Approvals) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                ⚠️ {t("pendingApprovals")}
              </h3>
              
              <div className="space-y-4">
                {/* Grocery */}
                <div className="bg-bg border border-border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl bg-blue-100 text-blue-600 p-3 rounded-2xl">🛒</span>
                    <div>
                      <h4 className="text-xl font-bold text-text">{t("groceryReq")}</h4>
                      <p className="text-text/70">{t("groceryItems")}</p>
                      <p className="text-sm text-primary font-semibold mt-1">Estimated Cost: ₹150 - ₹200</p>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-hover transition-colors">
                      {t("approveBtn")}
                    </button>
                    <button className="px-6 py-3 border border-border text-text font-bold rounded-xl hover:bg-gray-100 transition-colors">
                      {t("declineBtn")}
                    </button>
                  </div>
                </div>

                {/* Medicine */}
                <div className="bg-bg border border-border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl bg-pink-100 text-pink-600 p-3 rounded-2xl">💊</span>
                    <div>
                      <h4 className="text-xl font-bold text-text">{t("medReq")}</h4>
                      <p className="text-text/70">{t("medItems")}</p>
                      <p className="text-sm text-primary font-semibold mt-1">Estimated Cost: ₹50 - ₹80</p>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary-hover transition-colors">
                      {t("approveBtn")}
                    </button>
                    <button className="px-6 py-3 border border-border text-text font-bold rounded-xl hover:bg-gray-100 transition-colors">
                      {t("declineBtn")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="relative z-10 w-full mt-auto bg-[#020617]">
        <Footer />
      </div>
    </div>
  );
}
