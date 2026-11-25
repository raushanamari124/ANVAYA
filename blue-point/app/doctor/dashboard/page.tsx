"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function DoctorDashboard() {
  // Demo ke liye static data
  const [patients] = useState([
    { id: 1, name: "Ramesh Kumar", age: "68 Yrs", issue: "Hypertension, Diabetes", lastVisit: "10 Oct 2026", status: "Stable" },
    { id: 2, name: "Sunita Devi", age: "72 Yrs", issue: "Arthritis", lastVisit: "05 Oct 2026", status: "Needs Review" },
    { id: 3, name: "Mohan Lal", age: "65 Yrs", issue: "Post-Cardiac Care", lastVisit: "12 Oct 2026", status: "Stable" },
  ]);

  return (
    <div className="relative flex flex-col min-h-screen bg-bg">
      
      {/* BACKGROUND IMAGE - Full Visibility with Glass Overlay */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Background" 
          fill 
          className="object-cover object-center" 
          priority
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-black/75 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 py-8 space-y-6 flex-grow mt-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border border-white/40 dark:border-white/10 p-6 rounded-3xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center text-3xl shadow-inner">
              🩺
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-text">Welcome, Dr. Sharma</h1>
              <p className="text-text/70 text-lg">Cardiologist • Max Hospital</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 h-12 bg-purple-600 text-white font-bold rounded-xl shadow-md hover:bg-purple-700 transition-colors flex items-center gap-2">
              📅 View Schedule
            </button>
            <Link href="/" className="px-6 h-12 bg-white dark:bg-gray-800 border border-border text-text font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              🏠 Home
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-lg">
            <p className="text-text/60 font-medium mb-1">Total Patients</p>
            <h3 className="text-4xl font-extrabold text-text">124</h3>
          </div>
          <div className="bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-lg">
            <p className="text-text/60 font-medium mb-1">Appointments Today</p>
            <h3 className="text-4xl font-extrabold text-purple-600">8</h3>
          </div>
          <div className="bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-lg">
            <p className="text-text/60 font-medium mb-1">Pending Reviews</p>
            <h3 className="text-4xl font-extrabold text-sos">3</h3>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Patients List */}
          <div className="lg:col-span-2 bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
              👥 My Patients (Recent)
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border text-text/60 text-sm">
                    <th className="pb-3 font-semibold">Patient Name</th>
                    <th className="pb-3 font-semibold">Health Issue</th>
                    <th className="pb-3 font-semibold">Last Visit</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                      <td className="py-4">
                        <p className="font-bold text-text">{patient.name}</p>
                        <p className="text-sm text-text/60">{patient.age}</p>
                      </td>
                      <td className="py-4 text-text/80 text-sm">{patient.issue}</td>
                      <td className="py-4 text-text/80 text-sm">{patient.lastVisit}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          patient.status === "Stable" 
                            ? "bg-success/10 text-success" 
                            : "bg-sos/10 text-sos"
                        }`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-purple-600 font-bold text-sm hover:underline">
                          View Record
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button className="w-full mt-6 py-3 border-2 border-dashed border-purple-300 text-purple-600 font-bold rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
              View All Patients
            </button>
          </div>

          {/* Right Column: Quick Actions & Alerts */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Today's Schedule */}
            <div className="bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                ⏰ Today's Schedule
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-purple-600 font-bold text-sm min-w-[60px]">10:00 AM</div>
                  <div>
                    <p className="font-bold text-text">Ramesh Kumar</p>
                    <p className="text-sm text-text/60">Follow-up consultation</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-purple-600 font-bold text-sm min-w-[60px]">11:30 AM</div>
                  <div>
                    <p className="font-bold text-text">Sunita Devi</p>
                    <p className="text-sm text-text/60">Report review</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Verifications Alert */}
            <div className="bg-sos/10 border border-sos/20 rounded-3xl p-6 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-sos mb-2 flex items-center gap-2">
                ⚠️ Action Required
              </h3>
              <p className="text-sm text-text/80 mb-4">
                You have 2 new prescription requests from seniors waiting for your approval.
              </p>
              <button className="w-full py-2 bg-sos text-white font-bold rounded-lg hover:bg-sos/90 transition-colors">
                Review Prescriptions
              </button>
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
