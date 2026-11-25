"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function PersonLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Fake login simulation
    setTimeout(() => {
      alert("Login Successful! Welcome to your Dashboard.");
      router.push("/person/dashboard");
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
        <div className="relative z-10 w-full max-w-lg bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl border border-white/50 dark:border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-inner">
              👴
            </div>
            <h1 className="text-4xl font-extrabold text-text mb-3">Welcome Back!</h1>
            <p className="text-lg text-text/60">Login to check your daily schedule and family updates.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email / Phone */}
            <div>
              <label className="block text-lg font-bold mb-2">Phone Number or Email</label>
              <input 
                type="text" 
                required
                className="w-full h-14 px-5 rounded-xl border border-border bg-white/50 dark:bg-black/50 focus:ring-2 focus:ring-blue-500 outline-none text-lg" 
                placeholder="Enter your phone or email" 
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-lg font-bold">Password</label>
                <Link href="#" className="text-sm text-blue-600 font-semibold hover:underline">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                required
                className="w-full h-14 px-5 rounded-xl border border-border bg-white/50 dark:bg-black/50 focus:ring-2 focus:ring-blue-500 outline-none text-lg" 
                placeholder="Enter your password" 
              />
            </div>

            {/* Login Button (Bada Button for Seniors) */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-[64px] bg-blue-600 text-white font-bold text-xl rounded-xl mt-4 hover:bg-blue-700 shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-grow h-px bg-border"></div>
            <span className="text-sm text-text/40 font-bold uppercase">OR</span>
            <div className="flex-grow h-px bg-border"></div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-text/70 text-base">
              Don't have an account? 
              <Link href="/person/register" className="text-blue-600 font-bold hover:underline ml-1">
                Create one now
              </Link>
            </p>
            <Link href="/person" className="inline-block mt-6 text-base text-text/50 hover:text-text font-semibold transition-colors">
              ← Back to Parent Portal
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
