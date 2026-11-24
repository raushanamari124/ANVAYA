"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function RegisterDoctor() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleComplete = () => {
    setIsSuccess(true);
    setTimeout(() => {
      // Abhi ke liye home par redirect kar rahe hain, baad mein doctor dashboard banayenge
      router.push("/"); 
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center bg-card p-12 rounded-3xl shadow-xl border border-border">
          <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            🩺
          </div>
          <h1 className="text-3xl font-extrabold text-text mb-2">Application Submitted!</h1>
          <p className="text-text/60">Your profile is pending Admin verification. We will notify you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      
      {/* Main Form Section */}
      <div className="relative flex-grow flex items-center justify-center py-12 px-4 pt-28 md:pt-32">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="/hero-bg.png" alt="Background" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm"></div>
        </div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-3xl min-h-[550px] flex flex-col bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl border border-white/50 dark:border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Progress Bar */}
          <div className="bg-gray-200/30 dark:bg-gray-800/50 h-2 w-full">
            <div className="bg-purple-600 h-full transition-all duration-300" style={{ width: `${(step / 2) * 100}%` }}></div>
          </div>

          <div className="p-8 md:p-12 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-extrabold text-text flex items-center gap-2">
                  <span className="text-purple-600">🩺</span> Doctor Registration
                </h2>
                <p className="text-text/60 font-medium mt-1">
                  Step {step} of 2: {step === 1 ? "Professional Identity" : "Clinic & Verification"}
                </p>
              </div>
              <Link href="/" className="text-sm font-bold text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>

            {/* STEP 1: Professional Identity */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name (With Title)</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="e.g. Dr. Anil Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Medical Registration No.</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="e.g. NMC-123456" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="doctor@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Specialization</label>
                    <select className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none">
                      <option>General Physician</option>
                      <option>Cardiologist</option>
                      <option>Orthopedic</option>
                      <option>Neurologist</option>
                      <option>Diabetologist</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Qualifications</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="e.g. MBBS, MD" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Clinic & Verification */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Clinic / Hospital Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none" placeholder="e.g. City Care Clinic" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Clinic Pincode</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none" placeholder="e.g. 110001" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2">Clinic Full Address</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none" placeholder="Shop 4, Main Market..." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Consultation Fee (₹)</label>
                    <input type="number" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none" placeholder="e.g. 500" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Verification Document (ID)</label>
                    <div className="w-full h-12 px-4 rounded-xl border border-dashed border-purple-400 bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-sm font-medium text-purple-600 cursor-pointer hover:bg-purple-100 transition-colors">
                      + Upload Medical Council ID
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 mt-0.5 text-purple-600 rounded" />
                    <span className="text-sm text-text/80">I agree that all provided information is accurate. I consent to Admin verification and agree to the platform's DPDP Act guidelines.</span>
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
                <button onClick={handleNext} className="px-8 py-3 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-700 shadow-lg transition-colors">Next Step →</button>
              ) : (
                <button 
                  onClick={handleComplete} 
                  className="px-8 py-3 rounded-xl font-bold bg-success text-white hover:bg-success/90 shadow-lg transition-colors"
                >
                  Submit for Verification ✓
                </button>
              )}
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
