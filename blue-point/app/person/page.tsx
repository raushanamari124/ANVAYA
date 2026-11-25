
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function PersonPortal() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <div className="relative flex-grow flex items-center justify-center py-24 px-4 pt-32">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="/hero-bg.png" alt="Background" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-white/70 dark:bg-[#0B1120]/80 backdrop-blur-sm"></div>
        </div>

        {/* Center Card */}
        <div className="relative z-10 w-full max-w-md bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl border border-white/50 dark:border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl text-center">
          
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
            👴
          </div>
          
          <h1 className="text-3xl font-extrabold text-text mb-2">Parent Portal</h1>
          <p className="text-text/70 mb-8">How would you like to continue?</p>

          <div className="space-y-4">
            {/* Register Button */}
            <Link 
              href="/person/register" 
              className="flex flex-col items-center justify-center w-full p-5 bg-white dark:bg-gray-800 border-2 border-border hover:border-primary rounded-2xl transition-all group shadow-sm"
            >
              <h2 className="text-xl font-bold text-text group-hover:text-primary mb-1">I am a New User</h2>
              <p className="text-sm text-text/60">Create a new account</p>
            </Link>

            {/* Login Button */}
            <Link 
              href="/person/login" 
              className="flex flex-col items-center justify-center w-full p-5 bg-white dark:bg-gray-800 border-2 border-border hover:border-success rounded-2xl transition-all group shadow-sm"
            >
              <h2 className="text-xl font-bold text-text group-hover:text-success mb-1">I Have an Account</h2>
              <p className="text-sm text-text/60">Login to your dashboard</p>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <Link href="/" className="text-text/50 hover:text-text font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
export {};
