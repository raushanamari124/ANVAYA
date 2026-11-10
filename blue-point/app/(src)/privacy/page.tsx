import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto w-full px-4 py-24 flex-grow mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Privacy Policy</h1>
        <p className="text-text/60 mb-8 font-medium">Last updated: October 2026</p>

        <div className="space-y-8 text-text/80 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-text mb-3">1. Our Commitment to Privacy (DPDP Act)</h2>
            <p>THE BLUE POINT is built on a consent-first architecture, strictly adhering to India's Digital Personal Data Protection (DPDP) Act. We believe that your health and location data belongs only to you. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-3">2. What Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Basic Info:</strong> Name, Age Group, Phone/Email, and Pincode (to connect you with local helpers).</li>
              <li><strong>Health Profile:</strong> Known illnesses and current medications (only shared with family if you turn on the toggle).</li>
              <li><strong>Emergency Data:</strong> SOS logs and trusted contact details.</li>
              <li><strong className="text-sos">Never Collected:</strong> We NEVER collect bank/UPI details, full Aadhaar numbers, religion, caste, or income.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-3">3. Consent & Control</h2>
            <p>You have complete control over your data. Using our simple granular toggles, you can decide exactly what your family members can see (e.g., medicine status, mood check-ins, live location). You can withdraw your consent or request data download/account deletion at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text mb-3">4. Verified Helpers & Security</h2>
            <p>Your exact home address is never shared with a local helper until they accept a task and are admin-verified. All data is encrypted in transit and at rest.</p>
          </section>
        </div>
      </div>
      <div className="w-full bg-[#020617] mt-auto"><Footer /></div>
    </div>
  );
}
