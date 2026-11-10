"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer"; 

export default function RegisterPerson() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  // Background images array
  const bgImages = [
    "/helper-care.png",    
    "/video-call-bg.png",  
    "/medicine-bg.png",    
    "/meal-bg.png"         
  ];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    // Root wrapper
    <div className="flex flex-col min-h-screen bg-bg">
      
      {/* 1. FORM SECTION (Yahan background image absolute hai, isliye sirf is part mein rahegi) */}
      <div className="relative flex-grow flex items-center justify-center py-12 px-4 pt-28 md:pt-32">
        
        {/* Background Image - Absolute taaki sirf is section tak hi rahe */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src={bgImages[step - 1]} 
            alt="Background" 
            fill 
            className="object-cover object-center transition-all duration-700" 
            priority
          />
          {/* Halka sa dark overlay taaki form ke text clear dikhein */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"></div>
        </div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-4xl min-h-[600px] flex flex-col bg-white/60 dark:bg-[#0B1120]/70 backdrop-blur-md border border-white/60 dark:border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Top Bar inside form: Home Button & Progress */}
          <div className="relative">
            <div className="bg-gray-200/30 dark:bg-gray-800/50 h-2 w-full">
              <div className="bg-primary h-full transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
            <Link href="/" className="absolute top-6 left-8 text-sm font-bold text-primary hover:underline flex items-center gap-1">
              ← Back to Home
            </Link>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-14 pt-16 flex-grow flex flex-col">
            <h2 className="text-4xl font-extrabold text-text mb-3 drop-shadow-sm">Parent Registration</h2>
            <p className="text-lg text-text/80 mb-10 font-medium">
              Step {step} of 4: {step === 1 ? "Basic Details" : step === 2 ? "Family Connection" : step === 3 ? "Health Profile" : "Privacy & Consent"}
            </p>

            {/* STEP 1: Basic Details */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold mb-2">Full Name</label>
                    <input type="text" className="w-full h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-primary outline-none text-lg shadow-sm" placeholder="e.g. Ramesh Kumar" />
                  </div>
                  <div>
                    <label className="block text-base font-bold mb-2">Phone Number</label>
                    <input type="tel" className="w-full h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-primary outline-none text-lg shadow-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold mb-2">Age Group</label>
                    <select className="w-full h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 outline-none text-lg shadow-sm">
                      <option>50-60 Years</option>
                      <option>60-70 Years</option>
                      <option>70+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-base font-bold mb-2">City Pincode</label>
                    <input type="text" className="w-full h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 outline-none text-lg shadow-sm" placeholder="e.g. 110001" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Family ID */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-blue-50/80 dark:bg-blue-900/40 border border-blue-200/50 dark:border-blue-800 p-5 rounded-xl text-base backdrop-blur-sm">
                  Aapki Family ID generate ho gayi hai. Ise apne bachhon ko bhejein taaki wo aapse link kar sakein.
                </div>
                <div>
                  <label className="block text-base font-bold mb-2">Your Family ID</label>
                  <div className="flex gap-3">
                    <input type="text" value="TBP-84920" readOnly className="w-full h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/80 dark:bg-black/60 font-mono font-bold text-xl shadow-sm" />
                    <button className="px-8 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-md">Copy</button>
                  </div>
                </div>
                <hr className="my-6 border-border/50" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold mb-2">Child's Phone / Email (Mandatory)</label>
                    <input type="text" className="w-full h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 outline-none text-lg shadow-sm" placeholder="Child's contact info" />
                  </div>
                  <div>
                    <label className="block text-base font-bold mb-2">Relation</label>
                    <select className="w-full h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 outline-none text-lg shadow-sm">
                      <option>Son</option>
                      <option>Daughter</option>
                      <option>Relative</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Health Profile */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <label className="block text-base font-bold mb-3">Known Illnesses (Select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Diabetes (Sugar)", "Blood Pressure", "Heart Disease", "Asthma", "Arthritis", "None"].map((ill) => (
                      <label key={ill} className="flex items-center gap-3 p-4 border border-white/50 dark:border-white/20 rounded-xl cursor-pointer bg-white/50 dark:bg-black/40 hover:bg-white/80 transition-colors shadow-sm">
                        <input type="checkbox" className="w-6 h-6 text-primary rounded" />
                        <span className="text-base font-medium">{ill}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-base font-bold mb-3">Current Medications</label>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-3">
                      <input type="text" placeholder="Medicine Name" className="flex-1 h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 outline-none text-lg shadow-sm" />
                      <input type="text" placeholder="Dosage" className="w-full md:w-1/3 h-14 px-5 rounded-xl border border-white/50 dark:border-white/20 bg-white/70 dark:bg-black/50 outline-none text-lg shadow-sm" />
                    </div>
                    <button className="text-base text-primary font-bold hover:underline">+ Add Another Medicine</button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Consent */}
            {step === 4 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-base font-medium mb-4">Choose what you want to share with your family:</p>
                
                <label className="flex items-center justify-between p-5 border border-white/50 dark:border-white/20 rounded-xl cursor-pointer bg-white/50 dark:bg-black/40 hover:bg-white/80 transition-colors shadow-sm">
                  <span className="text-lg font-medium">Share Medicine Status</span>
                  <input type="checkbox" className="w-7 h-7 rounded-full text-primary focus:ring-primary" />
                </label>
                <label className="flex items-center justify-between p-5 border border-white/50 dark:border-white/20 rounded-xl cursor-pointer bg-white/50 dark:bg-black/40 hover:bg-white/80 transition-colors shadow-sm">
                  <span className="text-lg font-medium">Share Mood / Check-in</span>
                  <input type="checkbox" className="w-7 h-7 rounded-full text-primary focus:ring-primary" />
                </label>
                <label className="flex items-center justify-between p-5 border border-white/50 dark:border-white/20 rounded-xl cursor-pointer bg-white/50 dark:bg-black/40 hover:bg-white/80 transition-colors shadow-sm">
                  <span className="text-lg font-medium">Share Location (during SOS only)</span>
                  <input type="checkbox" defaultChecked className="w-7 h-7 rounded-full text-primary focus:ring-primary" />
                </label>

                <div className="mt-8 p-5 bg-white/60 dark:bg-black/50 rounded-xl border border-white/50 dark:border-white/20 shadow-sm">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" required className="w-6 h-6 mt-1 text-primary rounded" />
                    <span className="text-base text-text/90 leading-relaxed">I agree to share my data for care coordination as per the DPDP Act. I can withdraw consent anytime.</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-auto pt-10 border-t border-white/40 dark:border-white/10 mt-8">
              {step > 1 ? (
                <button onClick={handlePrev} className="px-8 py-4 rounded-xl font-bold border-2 border-border/50 text-text hover:bg-white/50 dark:hover:bg-black/50 transition-colors text-lg">Back</button>
              ) : <div></div>}
              
              {step < 4 ? (
                <button onClick={handleNext} className="px-10 py-4 rounded-xl font-bold bg-primary text-white hover:bg-primary-hover shadow-xl transition-colors text-lg">Next Step →</button>
              ) : (
                <button 
                  onClick={() => {
                    alert("Registration Successful! Redirecting to Dashboard...");
                    // Naye folder structure ke hisaab se link update kiya gaya hai
                    router.push("/dashboards/parent_dashboard"); 
                  }} 
                  className="px-10 py-4 rounded-xl font-bold bg-success text-white hover:bg-success/90 shadow-xl transition-colors text-lg"
                >
                  Complete Registration ✓
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 2. FOOTER SECTION */}
      <div className="relative z-10 w-full mt-auto bg-[#020617]">
        <Footer />
      </div>
    </div>
  );
}
