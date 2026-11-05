"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPerson() {
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

  return (
    <div className="min-h-screen bg-bg py-12 px-4">
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
        
        {/* Progress Bar */}
        <div className="bg-primary/10 h-2 w-full">
          <div className="bg-primary h-full transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-text mb-2">Parent Registration</h2>
          <p className="text-text/60 mb-8">Step {step} of 4: {step === 1 ? "Basic Details" : step === 2 ? "Family Connection" : step === 3 ? "Health Profile" : "Privacy & Consent"}</p>

          {/* STEP 1: Basic Details */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <label className="block text-sm font-bold mb-1">Full Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-border bg-bg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Ramesh Kumar" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Phone Number</label>
                <input type="tel" className="w-full h-12 px-4 rounded-lg border border-border bg-bg focus:ring-2 focus:ring-primary outline-none" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Age Group</label>
                  <select className="w-full h-12 px-4 rounded-lg border border-border bg-bg outline-none">
                    <option>50-60 Years</option>
                    <option>60-70 Years</option>
                    <option>70+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">City Pincode</label>
                  <input type="text" className="w-full h-12 px-4 rounded-lg border border-border bg-bg outline-none" placeholder="e.g. 110001" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Family ID (Mandatory) */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-xl text-sm mb-4">
                Aapki Family ID generate ho gayi hai. Ise apne bachhon ko bhejein taaki wo aapse link kar sakein.
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Your Family ID</label>
                <div className="flex gap-2">
                  <input type="text" value="TBP-84920" readOnly className="w-full h-12 px-4 rounded-lg border border-border bg-gray-100 dark:bg-gray-800 font-mono font-bold text-lg" />
                  <button className="px-4 bg-primary text-white rounded-lg font-bold">Copy</button>
                </div>
              </div>
              <hr className="my-6 border-border" />
              <div>
                <label className="block text-sm font-bold mb-1">Child's Phone / Email (Mandatory)</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-border bg-bg outline-none" placeholder="Child's contact info" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Relation</label>
                <select className="w-full h-12 px-4 rounded-lg border border-border bg-bg outline-none">
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Relative</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3: Health Profile */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <label className="block text-sm font-bold mb-3">Known Illnesses (Select all that apply)</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Diabetes (Sugar)", "Blood Pressure", "Heart Disease", "Asthma", "Arthritis", "None"].map((ill) => (
                    <label key={ill} className="flex items-center gap-2 p-3 border border-border rounded-lg cursor-pointer hover:bg-bg">
                      <input type="checkbox" className="w-5 h-5 text-primary rounded" />
                      <span className="text-sm font-medium">{ill}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">Current Medications</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input type="text" placeholder="Medicine Name (e.g. Metformin)" className="flex-1 h-12 px-3 rounded-lg border border-border bg-bg outline-none" />
                    <input type="text" placeholder="Dosage (e.g. 500mg)" className="w-1/3 h-12 px-3 rounded-lg border border-border bg-bg outline-none" />
                  </div>
                  <button className="text-sm text-primary font-bold hover:underline">+ Add Another Medicine</button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Consent */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in">
              <p className="text-sm font-medium mb-4">Choose what you want to share with your family:</p>
              
              <label className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer hover:bg-bg">
                <span className="font-medium">Share Medicine Status</span>
                <input type="checkbox" className="w-6 h-6 rounded-full text-primary focus:ring-primary" />
              </label>
              <label className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer hover:bg-bg">
                <span className="font-medium">Share Mood / Check-in</span>
                <input type="checkbox" className="w-6 h-6 rounded-full text-primary focus:ring-primary" />
              </label>
              <label className="flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer hover:bg-bg">
                <span className="font-medium">Share Location (during SOS only)</span>
                <input type="checkbox" defaultChecked className="w-6 h-6 rounded-full text-primary focus:ring-primary" />
              </label>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-border text-sm">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="w-5 h-5 mt-0.5 text-primary rounded" />
                  <span className="text-text/80">I agree to share my data for care coordination as per the DPDP Act. I can withdraw consent anytime.</span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            {step > 1 ? (
              <button onClick={handlePrev} className="px-6 py-3 rounded-xl font-bold border border-border text-text hover:bg-bg">Back</button>
            ) : <div></div>}
            
            {step < 4 ? (
              <button onClick={handleNext} className="px-8 py-3 rounded-xl font-bold bg-primary text-white hover:bg-primary-hover shadow-lg">Next Step</button>
            ) : (
              <button className="px-8 py-3 rounded-xl font-bold bg-success text-white hover:bg-success/90 shadow-lg">Complete Registration</button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
