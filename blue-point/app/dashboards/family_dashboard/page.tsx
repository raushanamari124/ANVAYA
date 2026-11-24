"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function RegisterFamily() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      
      {/* Main Form Section */}
      <div className="relative flex-grow flex items-center justify-center py-12 px-4 pt-28 md:pt-32">
        
        {/* Background Image (Same as Home) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="/hero-bg.png" alt="Background" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-2xl min-h-[500px] flex flex-col bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl border border-white/50 dark:border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Progress Bar */}
          <div className="bg-gray-200/30 dark:bg-gray-800/50 h-2 w-full">
            <div className="bg-success h-full transition-all duration-300" style={{ width: `${(step / 2) * 100}%` }}></div>
          </div>

          <div className="p-8 md:p-12 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-extrabold text-text">Family Registration</h2>
                <p className="text-text/60 font-medium mt-1">
                  Step {step} of 2: {step === 1 ? "Basic Details & Location" : "Link with Senior"}
                </p>
              </div>
              <Link href="/" className="text-sm font-bold text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>

            {/* STEP 1: Basic Details, Phone, Email, Location */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-success outline-none" placeholder="e.g. Rahul Kumar" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Mobile Number</label>
                    <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-success outline-none" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-success outline-none" placeholder="e.g. rahul@gmail.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Password</label>
                    <input type="password" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-success outline-none" placeholder="Create a strong password" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Current City Pincode</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-success outline-none" placeholder="e.g. 110001" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Relation & Family ID */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <label className="block text-sm font-bold mb-2">Your Relation with the Senior</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none">
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Son-in-law / Daughter-in-law</option>
                    <option>Nephew / Niece</option>
                    <option>Other Relative</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2">Senior's Family ID (Mandatory)</label>
                  <p className="text-xs text-text/60 mb-2">Ask your parent for their Family ID (e.g., TBP-XXXXX) to link accounts.</p>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 font-mono font-bold text-lg focus:ring-2 focus:ring-success outline-none" placeholder="Enter Family ID here" />
                </div>

                <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-xl">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 mt-0.5 text-success rounded" />
                    <span className="text-sm text-text/80">I agree that my parent has consented to share their health and location data with me as per DPDP Act.</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-auto pt-8">
              {step > 1 ? (
                <button onClick={handlePrev} className="px-6 py-3 rounded-xl font-bold border-2 border-border text-text hover:bg-white/50 transition-colors">Back</button>
              ) : <div></div>}
              
              {step < 2 ? (
                <button onClick={handleNext} className="px-8 py-3 rounded-xl font-bold bg-success text-white hover:bg-success/90 shadow-lg transition-colors">Next Step →</button>
              ) : (
                <button 
                  onClick={() => {
                    alert("Family Account Linked Successfully! Redirecting to Dashboard...");
                    router.push("/dashboards/family_dashboard"); 
                  }} 
                  className="px-8 py-3 rounded-xl font-bold bg-primary text-white hover:bg-primary-hover shadow-lg transition-colors"
                >
                  Complete Registration ✓
                </button>
              )}
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
