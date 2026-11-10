import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 bg-[#0F172A] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary font-bold mb-6 border border-primary/30 tracking-widest uppercase text-sm">
            Our Story & Vision
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Bridging Distances, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Connecting Hearts.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            THE BLUE POINT is a free-to-use, closed-loop care coordination platform designed to bridge the gap between digital reminders and real-world physical assistance for elderly parents living alone.
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM & MISSION */}
      <section className="w-full max-w-[1200px] mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-6">
            The "Empty Nest" Crisis
          </h2>
          <div className="space-y-4 text-lg text-text/80 leading-relaxed">
            <p>
              In an era where millions of young professionals migrate to different cities or countries for better opportunities, a silent crisis grows back home. Elderly parents are left behind, facing health risks, loneliness, and daily physical struggles.
            </p>
            <p>
              While children constantly worry about their parents' well-being, there is no reliable, unified system to ensure their safety. Existing apps only send passive notifications ("Take your pill"), but they fail to answer the most critical question: <strong className="text-text">"What if they need actual physical help right now?"</strong>
            </p>
          </div>
        </div>
        <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-3xl">🎯</span> Our Mission
          </h3>
          <p className="text-lg text-text/80 leading-relaxed font-medium">
            To build a <strong>Zero-Cost, High-Trust</strong> care ecosystem where families, verified local helpers, and NGOs work together. We aim to replace "Notification Illusions" with real-world, closed-loop assistance, ensuring that no senior citizen is left stranded in an emergency or daily struggle.
          </p>
        </div>
      </section>

      {/* 3. HOW WE ARE DIFFERENT (CORE FEATURES) */}
      <section className="w-full bg-card py-20 px-4 border-y border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">What Makes Us Different?</h2>
            <p className="text-lg text-text/60">We don't just build apps; we build reliable safety nets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="text-xl font-bold text-text mb-2">Request-to-Resolution</h3>
              <p className="text-text/70">We go beyond simple reminders. A request is routed to family or verified helpers and is only completed when the physical task is actually done.</p>
            </div>
            <div className="bg-bg p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-4xl mb-4 block">🛡️</span>
              <h3 className="text-xl font-bold text-text mb-2">Honest SOS System</h3>
              <p className="text-text/70">We never falsely display "Help is on the way." Our closed-loop safety system tracks real-time acceptance from a verified responder, with a direct 112 fallback.</p>
            </div>
            <div className="bg-bg p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <span className="text-4xl mb-4 block">🔒</span>
              <h3 className="text-xl font-bold text-text mb-2">DPDP Act Compliant</h3>
              <p className="text-text/70">Privacy is not an afterthought. Seniors have absolute control over what they share with their families using simple granular consent toggles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR TECHNOLOGY & SUSTAINABILITY */}
      <section className="w-full max-w-[1200px] mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-2xl">
             <img src="/hero-bg.png" alt="Technology" className="object-cover w-full h-full" />
             <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-6">
              Built for Scale, Designed for Free
            </h2>
            <div className="space-y-4 text-lg text-text/80 leading-relaxed">
              <p>
                THE BLUE POINT is built on a modern, highly scalable, and cost-effective architecture. We utilize <strong>Next.js and Tailwind CSS</strong> for a blazing-fast frontend, hosted on <strong>Vercel</strong>. Our backend utilizes <strong>Supabase</strong> for real-time data tracking.
              </p>
              <p>
                <strong>Our Sustainability Model:</strong> The platform is 100% free for seniors. To cover our minimal server costs, we operate on a B2B micro-commission model. When families order groceries or medicines through our platform, we partner with local vendors and pharmacies to earn a small commission, making the platform self-sustaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="w-full bg-[#0F172A] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Join Us in This Mission
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Whether you are a child looking after parents, or an NGO wanting to help the elderly, there is a place for you in THE BLUE POINT.
          </p>
          <Link href="/" className="inline-flex items-center justify-center px-10 h-[60px] bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
            Get Started Now
          </Link>
        </div>
      </section>

      <div className="w-full bg-[#020617] mt-auto">
        <Footer />
      </div>
    </div>
  );
}
