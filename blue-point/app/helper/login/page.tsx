
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function HelperLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Fake login simulation
    setTimeout(() => {
      alert("Login Successful! Redirecting to Helper Dashboard...");
      router.push("/helper/dashboard");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      
      {/* Main Section */}
      <div className="relative flex-grow flex items-center justify-center py-12 px-4 pt-28 md:pt-32">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="/hero-bg.png" alt="Background" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-white/70 dark:bg-[#0B1120]/85 backdrop-blur-sm"></div>
        </div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl border border-white/50 dark:border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
              🤝
            </div>
            <h1 className="text-3xl font-extrabold text-text mb-2">Helper Login</h1>
            <p className="text-text/60">Login to view and accept local requests.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email / Phone */}
            <div>
              <label className="block text-sm font-bold mb-2">Email or Phone Number</label>
              <input 
                type="text" 
                required
                className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 focus:ring-2 focus:ring-orange-500 outline-none" 
                placeholder="your@email.com" 
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold">Password</label>
                <Link href="#" className="text-xs text-orange-600 font-semibold hover:underline">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                required
                className="w-full h-12 px-4 rounded-xl border border-border bg-white/50 dark:bg-black/50 focus:ring-2 focus:ring-orange-500 outline-none" 
                placeholder="••••••••" 
              />
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-[56px] bg-orange-500 text-white font-bold text-lg rounded-xl mt-4 hover:bg-orange-600 shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? "Logging in..." : "Login to Dashboard →"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-grow h-px bg-border"></div>
            <span className="text-xs text-text/40 font-bold uppercase">OR</span>
            <div className="flex-grow h-px bg-border"></div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-text/70 text-sm">
              Want to join as a helper? 
              <Link href="/helper/register" className="text-orange-600 font-bold hover:underline ml-1">
                Apply Now
              </Link>
            </p>
            <Link href="/helper" className="inline-block mt-6 text-sm text-text/50 hover:text-text font-semibold transition-colors">
              ← Back to Helper Portal
            </Link>
          </div>

        </div>
      </div>

      <div className="relative z-10 w-full mt-auto bg-[#020617]">
        <Footer />
      </div>
    </div>
  );
}
export {};
