import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto w-full px-4 py-24 flex-grow mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Terms of Service</h1>
        <p className="text-text/60 mb-8 font-medium">Last updated: October 2026</p>

        <div className="space-y-8 text-text/80 text-lg leading-relaxed">
          <section className="bg-sos/10 border border-sos/20 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-sos mb-3 flex items-center gap-2">
              <span>⚠️</span> Emergency Disclaimer
            </h2>
            <p className="font-bold text-text">THE BLUE POINT is NOT a replacement for official emergency services. In case of a life-threatening emergency, always call 112 or 108 immediately. Our SOS feature is a coordination tool, not a government emergency response system.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-3">1. Platform Usage</h2>
            <p>By registering, you agree to provide accurate information. The platform is designed for elderly care coordination and real-world assistance (grocery, medicine, transport). Using the SOS button for non-emergencies or pranks is strictly prohibited and will lead to account suspension.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-3">2. Verified Helpers</h2>
            <p>While we manually verify all local helpers via Admin approval, THE BLUE POINT is a coordination platform. We facilitate the connection between families and community volunteers/NGOs but are not an employer of the helpers. Financial transactions for groceries/medicines happen directly between the family and the vendor.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-3">3. User Responsibilities</h2>
            <p>Families are responsible for maintaining the accuracy of their trusted contacts and ensuring the senior's health profile is up to date.</p>
          </section>
        </div>
      </div>
      <div className="w-full bg-[#020617] mt-auto"><Footer /></div>
    </div>
  );
}
