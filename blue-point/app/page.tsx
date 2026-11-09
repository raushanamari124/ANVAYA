"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer"; // Footer import kiya

export default function RegisterPerson() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", phone: "", ageGroup: "60-70", pincode: "",
    familyId: "TBP-84920", childPhone: "", relation: "Son",
    illnesses: [] as string[], medications: [{ name: "", dosage: "" }],
    shareMedicine: false, shareMood: false, shareSOS: true,
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleIllnessChange = (illness: string) => {
    setFormData((prev) => ({
      ...prev,
      illnesses: prev.illnesses.includes(illness)
        ? prev.illnesses.filter((i) => i !== illness)
        : [...prev.illnesses, illness],
    }));
  };

  // Har step ke liye alag background image
  const bgImages = [
    "/helper-care.png",    // Step 1
    "/video-call-bg.png",  // Step 2
    "/medicine-bg.png",    // Step 3
    "/meal-bg.png"         // Step 4
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden -mt-20 pt-20">
      
      {/* Background Image - Full High Quality (No dark overlay, no blur) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImages[step - 1]} 
          alt="Background" 
          fill 
          className="object-cover object-center transition-all duration-700" 
          priority
        />
      </div>

      {/* Main Form Container with Glassmorphism */}
      <div className="relative z-10 flex-grow flex items-center justify-center py-12 px-4">
        
        <div className="w-full max-w-2xl bg-white/75 dark:bg-[#0B1120]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Top Bar inside form: Home Button & Progress */}
          <div className="relative">
            <div className="bg-gray-200/50 dark:bg-gray-800/50 h-2 w-full">
              <div className="bg-primary h-full transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
            
            {/* Home Link */}
            <Link href="/" className="absolute top-4 left-6 text-sm font-bold text-primary hover:underline flex items-center gap-1">
              ← Back to Home
            </Link>
          </div>

          <div className="p-8 md:p-10 pt-12">
            <h2 className="text-3xl font-extrabold text-text mb-2">Parent Registration</h2>
            <p className="text-text/60 mb-8 font-medium">
              Step {step} of 4: {step === 1 ? "Basic Details" : step === 2 ? "Family Connection" : step === 3 ? "Health Profile" : "Privacy & Consent"}
            </p>

            {/* STEP 1: Basic Details */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Ramesh Kumar" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 focus:ring-2 focus:ring-primary outline-none" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Age Group</label>
                    <select className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 outline-none">
                      <option>50-60 Years</option>
                      <option>60-70 Years</option>
                      <option>70+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">City Pincode</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 outline-none" placeholder="e.g. 110001" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Family ID (Mandatory) */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-blue-50/80 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-xl text-sm mb-4">
                  Aapki Family ID generate ho gayi hai. Ise apne bachhon ko bhejein taaki wo aapse link kar sakein.
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Your Family ID</label>
                  <div className="flex gap-2">
                    <input type="text" value="TBP-84920" readOnly className="w-full h-12 px-4 rounded-xl border border-border bg-white/60 dark:bg-black/60 font-mono font-bold text-lg" />
                    <button className="px-6 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-colors">Copy</button>
                  </div>
                </div>
                <hr className="my-6 border-border/50" />
                <div>
                  <label className="block text-sm font-bold mb-2">Child's Phone / Email (Mandatory)</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 outline-none" placeholder="Child's contact info" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Relation</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 outline-none">
                    <option>Son</option>
                    <option>Daughter</option>
                    <option>Relative</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: Health Profile */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <label className="block text-sm font-bold mb-3">Known Illnesses (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Diabetes (Sugar)", "Blood Pressure", "Heart Disease", "Asthma", "Arthritis", "None"].map((ill) => (
                      <label key={ill} className="flex items-center gap-3 p-3 border border-border rounded-xl cursor-pointer bg-white/40 dark:bg-black/40 hover:bg-white/80 transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-primary rounded" />
                        <span className="text-sm font-medium">{ill}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2">Current Medications</label>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input type="text" placeholder="Medicine Name" className="flex-1 h-12 px-3 rounded-xl border border-border bg-white/50 dark:bg-black/50 outline-none" />
                      <input type="text" placeholder="Dosage" className="w-1/3 h-12 px-3 rounded-xl border border-border bg-white/50 dark:bg-black/50 outline-none" />
                    </div>
                    <button className="text-sm text-primary font-bold hover:underline">+ Add Another Medicine</button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Consent */}
            {step === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-sm font-medium mb-4">Choose what you want to share with your family:</p>
                
                <label className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer bg-white/40 dark:bg-black/40 hover:bg-white/80 transition-colors">
                  <span className="font-medium">Share Medicine Status</span>
                  <input type="checkbox" className="w-6 h-6 rounded-full text-primary focus:ring-primary" />
                </label>
                <label className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer bg-white/40 dark:bg-black/40 hover:bg-white/80 transition-colors">
                  <span className="font-medium">Share Mood / Check-in</span>
                  <input type="checkbox" className="w-6 h-6 rounded-full text-primary focus:ring-primary" />
                </label>
                <label className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer bg-white/40 dark:bg-black/40 hover:bg-white/80 transition-colors">
                  <span className="font-medium">Share Location (during SOS only)</span>
                  <input type="checkbox" defaultChecked className="w-6 h-6 rounded-full text-primary focus:ring-primary" />
                </label>

                <div className="mt-6 p-4 bg-white/50 dark:bg-black/50 rounded-xl border border-border text-sm">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 mt-0.5 text-primary rounded" />
                    <span className="text-text/80">I agree to share my data for care coordination as per the DPDP Act. I can withdraw consent anytime.</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
              {step > 1 ? (
                <button onClick={handlePrev} className="px-6 py-3 rounded-xl font-bold border-2 border-border text-text hover:bg-white/50 dark:hover:bg-black/50 transition-colors">Back</button>
              ) : <div></div>}
              
              {step < 4 ? (
                <button onClick={handleNext} className="px-8 py-3 rounded-xl font-bold bg-primary text-white hover:bg-primary-hover shadow-lg transition-colors">Next Step →</button>
              ) : (
                <button 
                  onClick={() => {
                    alert("Registration Successful! Redirecting to Dashboard...");
                    router.push("/dashboard"); 
                  }} 
                  className="px-8 py-3 rounded-xl font-bold bg-success text-white hover:bg-success/90 shadow-lg transition-colors"
                >
                  Complete Registration ✓
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Common Footer Add kiya gaya hai */}
      <Footer />
    </div>
  );
}
