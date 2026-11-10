"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ParentDashboard() {
  const t = useTranslations("dashboard");
  const [isFine, setIsFine] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <div className="max-w-[1500px] mx-auto w-full px-4 md:px-8 py-8 space-y-8 flex-grow mt-16">
        
        {/* 1. Top Welcome & Check-in Section */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-text mb-2 tracking-tight">{t("greeting")}</h1>
            <p className="text-text/70 text-lg md:text-xl">{t("statusCheckDesc")}</p>
          </div>
          <button 
            onClick={() => setIsFine(true)}
            className={`px-10 h-[64px] rounded-2xl font-bold text-xl md:text-2xl transition-all shadow-lg flex items-center gap-3 ${
              isFine 
                ? "bg-success text-white shadow-success/30 cursor-default" 
                : "bg-success/10 text-success border-2 border-success hover:bg-success/20"
            }`}
          >
            {isFine ? "✓ Sent to Family" : `✓ ${t("statusCheck")}`}
          </button>
        </div>

        {/* 2. SOS & Voice Assistant Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* SOS Button */}
          <button className="md:col-span-2 relative overflow-hidden bg-sos hover:bg-sos/90 text-white rounded-3xl p-8 shadow-xl shadow-sos/20 transition-transform transform active:scale-[0.98] flex flex-col items-center justify-center min-h-[220px] border-4 border-red-400/30">
            <span className="text-7xl mb-3 animate-pulse">🆘</span>
            <span className="text-4xl font-extrabold tracking-wide">{t("sos")}</span>
            <span className="text-lg font-medium opacity-90 mt-3 bg-black/20 px-6 py-2 rounded-full">Tap to Alert Family & Call 112</span>
          </button>

          {/* Voice Assistant */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/20 transition-colors shadow-sm min-h-[220px]">
            <div className="w-28 h-28 bg-primary text-white rounded-full flex items-center justify-center text-6xl shadow-xl animate-bounce">
              🎙️
            </div>
            <h3 className="text-3xl font-bold text-primary mt-5">{t("voiceAssist")}</h3>
            <p className="text-text/70 text-base mt-2">{t("voiceAssistDesc")}</p>
          </div>
        </div>

        {/* 3. Upcoming Reminders (4 Cards Grid) */}
        <div>
          <h2 className="text-3xl font-bold text-text mb-5">{t("upcoming")}</h2>
          
          {/* Grid updated to 4 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Medicine Card (Bed Image) */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden group shadow-lg border border-border">
              <Image src="/medicine-bg.png" alt="Medicine" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-3xl mb-1 block drop-shadow-md">💊</span>
                <h3 className="text-xl font-bold mb-1">{t("medReminder")}</h3>
                <p className="text-gray-300 text-sm mb-4">{t("medTime")}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-success hover:bg-success/90 text-white py-2 rounded-xl font-bold text-sm shadow-md transition-colors">Taken</button>
                  <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white py-2 rounded-xl font-bold text-sm transition-colors">Snooze</button>
                </div>
              </div>
            </div>

            {/* Meal Card (Food Image) */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden group shadow-lg border border-border">
              <Image src="/meal-bg.png" alt="Meal" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-3xl mb-1 block drop-shadow-md">🍲</span>
                <h3 className="text-xl font-bold mb-1">{t("mealReminder")}</h3>
                <p className="text-gray-300 text-sm mb-4">{t("mealTime")}</p>
                <button className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-xl font-bold text-sm shadow-md transition-colors">Mark as Done</button>
              </div>
            </div>

            {/* Video Call Card (Sofa Image) */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden group shadow-lg border border-border">
              <Image src="/video-call-bg.png" alt="Video Call" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-3xl mb-1 block drop-shadow-md">📹</span>
                <h3 className="text-xl font-bold mb-1">{t("videoCall")}</h3>
                <p className="text-gray-300 text-sm mb-4">{t("videoCallDesc")}</p>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl font-bold text-sm shadow-md transition-colors flex justify-center items-center gap-2">
                  {t("joinCall")}
                </button>
              </div>
            </div>

            {/* NEW: Doctor Appointment Card (Helper Image) */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden group shadow-lg border border-border">
              <Image src="/helper-care.png" alt="Doctor Appointment" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-3xl mb-1 block drop-shadow-md">🩺</span>
                <h3 className="text-xl font-bold mb-1">{t("doctorAppt")}</h3>
                <p className="text-gray-300 text-sm mb-1">{t("doctorApptDesc")}</p>
                <p className="text-purple-200 text-xs mb-4 font-semibold">{t("doctorApptTime")}</p>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-xl font-bold text-sm shadow-md transition-colors">
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Order Services (Grocery/Medicine) */}
        <div>
          <h2 className="text-3xl font-bold text-text mb-5">{t("orderServices")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Grocery Card (Helper Image) */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden border border-border shadow-sm group cursor-pointer">
              <Image src="/helper-care.png" alt="Grocery" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent w-full md:w-4/5"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center w-full md:w-3/4 text-white">
                <span className="text-4xl mb-2">🛒</span>
                <h3 className="text-3xl font-bold mb-2">{t("grocery")}</h3>
                <p className="text-gray-200 text-base mb-5">{t("groceryDesc")}</p>
                <button className="w-fit bg-white text-blue-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-md">Order Now</button>
              </div>
            </div>

            {/* Medicine Delivery Card (Helper Image) */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden border border-border shadow-sm group cursor-pointer">
              <Image src="/helper-care.png" alt="Medicine Delivery" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/60 to-transparent w-full md:w-4/5"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center w-full md:w-3/4 text-white">
                <span className="text-4xl mb-2">🏥</span>
                <h3 className="text-3xl font-bold mb-2">{t("medicine")}</h3>
                <p className="text-gray-200 text-base mb-5">{t("medicineDesc")}</p>
                <button className="w-fit bg-white text-teal-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-md">Order Now</button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10 w-full mt-auto bg-[#020617]">
        <Footer />
      </div>
    </div>
  );
}
