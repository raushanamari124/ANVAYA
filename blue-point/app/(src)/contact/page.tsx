import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactSupport() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      
      {/* Main Container */}
      <div className="max-w-[1000px] mx-auto w-full px-4 py-24 flex-grow mt-10">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-text mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-text/60 max-w-2xl mx-auto">
            We are here to help! Whether you need to report a problem, clarify a doubt, or simply learn more about how we care for your family.
          </p>
        </div>

        {/* Center Info Card */}
        <div className="bg-blue-50 dark:bg-primary/10 border border-blue-100 dark:border-primary/20 rounded-3xl p-10 text-center mb-12 shadow-sm relative overflow-hidden">
          <div className="w-16 h-16 bg-white dark:bg-card rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-primary text-3xl">
            💬
          </div>
          <h2 className="text-2xl font-bold text-text mb-4">How can we help you?</h2>
          <p className="text-text/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Do you have a question about setting up a profile? Did you spot a bug? Or do you want to partner with us as an NGO? 
            <br className="hidden md:block" />
            <span className="font-semibold text-primary mt-2 block">
              "Caring for our elders is not just a duty, it's a privilege. Your peace of mind is our mission."
            </span>
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Email Support */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6">
              ✉️
            </div>
            <h3 className="text-xl font-bold text-text mb-3">Email Support</h3>
            <p className="text-text/60 text-sm mb-6 leading-relaxed flex-grow">
              For queries, bug reports, or suggestions, please drop us an email. We usually reply within 24 hours.
            </p>
            {/* Gmail Link Added Here */}
            <a href="mailto:raushanamari124@gmail.com" className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              raushanamari124@gmail.com
            </a>
          </div>

          {/* Card 2: Our Channels */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6">
              💬
            </div>
            <h3 className="text-xl font-bold text-text mb-3">Our Channels</h3>
            <p className="text-text/60 text-sm mb-6 leading-relaxed flex-grow">
              Connect with us on WhatsApp for quick updates or call our senior helpline for immediate assistance.
            </p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-text font-semibold text-sm hover:text-green-500 transition-colors">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                WhatsApp Support
              </a>
              <a href="tel:+919999988888" className="flex items-center gap-2 text-text font-semibold text-sm hover:text-sos transition-colors">
                <span className="w-2 h-2 rounded-full bg-sos"></span>
                Senior Helpline (24/7)
              </a>
            </div>
          </div>

          {/* Card 3: The Team & LinkedIn */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mb-6">
              👥
            </div>
            <h3 className="text-xl font-bold text-text mb-3">The Team</h3>
            <p className="text-text/60 text-sm mb-6 leading-relaxed flex-grow">
              Dedicated to providing you with the best free care coordination tools for your loved ones.
            </p>
            
            <div className="bg-bg border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2">
              <p className="text-xs text-text/70 font-medium text-center uppercase tracking-wider">
                Built with ❤️ by
              </p>
              
              {/* LinkedIn Logo & Profile Link */}
              <a 
                href="https://www.linkedin.com/in/raushanamari124" // Yahan apna actual link daal lein agar alag ho
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0A66C2] dark:text-blue-400 font-extrabold text-lg hover:scale-105 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Raushan
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-[#020617] mt-auto"><Footer /></div>
    </div>
  );
}
