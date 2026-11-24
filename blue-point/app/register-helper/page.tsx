"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function RegisterHelper() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleComplete = () => {
    setIsSuccess(true);
    // 2.5 second baad automatically dashboard par bhej dega
    setTimeout(() => {
      router.push("/dashboards/helper_dashboard"); 
    }, 2500);
  };

    if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center bg-card p-12 rounded-3xl shadow-xl border border-border max-w-lg mx-auto">
          <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ⏳
          </div>
          <h1 className="text-3xl font-extrabold text-text mb-2">Verification Pending</h1>
          <p className="text-text/60 mb-6">
            Thank you for joining as a Helper! Our Admin team is reviewing your application.
            (For Demo purposes, you can click below to view the Helper Dashboard)
          </p>
          
          {/* Naya Button Dashboard par jane ke liye */}
          <Link href="/dashboards/helper_dashboard" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg">
            Go to Helper Dashboard →
          </Link>
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
            <div className="bg-orange-500 h-full transition-all duration-300" style={{ width: `${(step / 2) * 100}%` }}></div>
          </div>

          <div className="p-8 md:p-12 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-extrabold text-text flex items-center gap-2">
                  <span className="text-orange-500">🤝</span> Helper Registration
                </h2>
                <p className="text-text/60 font-medium mt-1">
                  Step {step} of 2: {step === 1 ? "Basic Details" : "Services & Verification"}
                </p>
              </div>
              <Link href="/" className="text-sm font-bold text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>

            {/* STEP 1: Basic Details */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name / NGO Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="e.g. Amit Kumar / Helping Hands NGO" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="helper@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Password</label>
                    <input type="password" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Create a strong password" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Are you an Individual or NGO?</label>
                    <select className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none">
                      <option>Individual Volunteer</option>
                      <option>Registered NGO</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Service Area (Pincode)</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="e.g. 110001" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Services & Verification */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <label className="block text-sm font-bold mb-3">Services You Can Provide</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Grocery Delivery", "Medicine Pickup", "Transport", "Hospital Support", "Companionship", "Other Errands"].map((service) => (
                      <label key={service} className="flex items-center gap-2 p-3 border border-border rounded-xl cursor-pointer bg-white/50 dark:bg-black/40 hover:bg-white/80 transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-orange-500 rounded" />
                        <span className="text-sm font-medium">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Upload ID Proof (Aadhaar/Voter ID)</label>
                    <div className="w-full h-12 px-4 rounded-xl border border-dashed border-orange-400 bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-sm font-medium text-orange-600 cursor-pointer hover:bg-orange-100 transition-colors">
                      + Click to Upload ID
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Emergency Contact Number</label>
                    <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border bg-white/70 dark:bg-black/50 outline-none" placeholder="Family member's number" />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 mt-0.5 text-orange-500 rounded" />
                    <span className="text-sm text-text/80">
                      I agree to treat all senior citizens with respect, maintain their privacy, and follow the platform's Code of Conduct.
                    </span>
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
                <button onClick={handleNext} className="px-8 py-3 rounded-xl font-bold bg-orange-500 text-white hover:bg-orange-600 shadow-lg transition-colors">Next Step →</button>
              ) : (
                <button 
                  onClick={handleComplete} 
                  className="px-8 py-3 rounded-xl font-bold bg-success text-white hover:bg-success/90 shadow-lg transition-colors"
                >
                  Submit Application ✓
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
