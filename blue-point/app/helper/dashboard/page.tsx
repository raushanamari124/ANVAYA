"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function HelperDashboard() {
  const [isVerified, setIsVerified] = useState(true);
  const [requests, setRequests] = useState([
    { id: 1, type: "Grocery", items: "Milk, Bread, Apples", area: "110001, Sector 5", time: "Today, 2:00 PM", status: "pending" },
    { id: 2, type: "Medicine", items: "BP Tablet (1 Strip)", area: "110001, Sector 2", time: "Today, 4:30 PM", status: "pending" },
  ]);

  const handleAccept = (id: number) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "accepted" } : req));
  };

  if (!isVerified) {
    return (
      <div className="relative min-h-screen flex flex-col bg-bg">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-white/70 dark:bg-[#0B1120]/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 flex-grow flex items-center justify-center p-4">
          <div className="bg-card/90 backdrop-blur-xl border border-border max-w-md w-full p-8 rounded-3xl text-center shadow-xl">
            <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              ⏳
            </div>
            <h1 className="text-3xl font-extrabold text-text mb-3">Verification Pending</h1>
            <p className="text-text/70 mb-8">Our Admin team is reviewing your ID and documents. You will be able to see local help requests once your account is approved.</p>
            <Link href="/" className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-bg">
      
      {/* BACKGROUND IMAGE - Full Visibility with Glass Overlay */}
      <div className="absolute inset-0 z-0 fixed">
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
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center text-3xl shadow-inner">
              🤝
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-text">Welcome, Amit</h1>
                <span className="bg-success/20 text-success text-xs font-bold px-2 py-1 rounded-md border border-success/30 flex items-center gap-1">
                  ✓ Verified
                </span>
              </div>
              <p className="text-text/70 text-lg">Local Helper • Sector 5, Delhi</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 h-12 bg-orange-500 text-white font-bold rounded-xl shadow-md hover:bg-orange-600 transition-colors flex items-center gap-2">
              📍 Update Location
            </button>
            <Link href="/" className="px-6 h-12 bg-white dark:bg-gray-800 border border-border text-text font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              🏠 Home
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-lg">
            <p className="text-text/60 font-medium mb-1">Tasks Completed</p>
            <h3 className="text-4xl font-extrabold text-text">42</h3>
          </div>
          <div className="bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-lg">
            <p className="text-text/60 font-medium mb-1">Pending Requests</p>
            <h3 className="text-4xl font-extrabold text-orange-500">2</h3>
          </div>
          <div className="bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-lg">
            <p className="text-text/60 font-medium mb-1">Total Earnings (Est.)</p>
            <h3 className="text-4xl font-extrabold text-success">₹850</h3>
          </div>
        </div>

        {/* Requests Section */}
        <div>
          <h2 className="text-2xl font-bold text-text mb-5 flex items-center gap-3 bg-white/60 dark:bg-black/40 w-fit px-4 py-2 rounded-xl backdrop-blur-sm">
            📍 Nearby Help Requests
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requests.map((req) => (
              <div key={req.id} className={`bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl border-2 rounded-3xl p-6 shadow-xl transition-all ${
                req.status === 'accepted' ? 'border-success/50' : 'border-white/50 dark:border-white/10 hover:border-orange-300'
              }`}>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-3xl p-3 rounded-2xl ${
                      req.type === 'Grocery' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
                    }`}>
                      {req.type === 'Grocery' ? '🛒' : '💊'}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-text">{req.type} Request</h3>
                      <p className="text-text/60 text-sm">{req.time}</p>
                    </div>
                  </div>
                  <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                    New
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-text font-medium"><span className="text-text/50 text-sm">Items:</span> {req.items}</p>
                  <p className="text-text font-medium"><span className="text-text/50 text-sm">Area:</span> {req.area}</p>
                  
                  {req.status === 'accepted' ? (
                    <p className="text-success font-bold text-sm bg-success/10 p-2 rounded-lg mt-2 flex items-center gap-2 border border-success/20">
                      ✓ Full Address Unlocked: House 42, Sector 5
                    </p>
                  ) : (
                    <p className="text-sos font-medium text-sm bg-sos/5 p-2 rounded-lg mt-2 border border-sos/10">
                      🔒 Accept request to view full address
                    </p>
                  )}
                </div>

                {req.status === 'pending' ? (
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleAccept(req.id)}
                      className="flex-1 bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 shadow-md transition-colors"
                    >
                      Accept Request
                    </button>
                    <button className="px-6 py-3 border border-border text-text font-bold rounded-xl hover:bg-gray-100 transition-colors">
                      Decline
                    </button>
                  </div>
                ) : (
                  <button className="w-full bg-success text-white font-bold py-3 rounded-xl hover:bg-success/90 shadow-md transition-colors">
                    Mark as Delivered ✓
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="relative z-10 w-full mt-auto bg-[#020617]">
        <Footer />
      </div>
    </div>
  );
}
