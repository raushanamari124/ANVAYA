import Footer from "@/components/Footer";

export default function ContactSupport() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto w-full px-4 py-24 flex-grow mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Contact Support</h1>
        <p className="text-lg text-text/70 mb-12">Have a question, need help, or want to partner with us? Our team is here for you.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-text mb-2 flex items-center gap-2">📞 Call Us</h3>
              <p className="text-text/70">+91 99999 88888</p>
              <p className="text-sm text-text/50 mt-1">Mon-Sat, 9:00 AM to 6:00 PM</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-text mb-2 flex items-center gap-2">✉️ Email Us</h3>
              <p className="text-text/70">support@thebluepoint.com</p>
              <p className="text-sm text-text/50 mt-1">We reply within 24 hours.</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-text mb-2 flex items-center gap-2">🤝 NGO Partnership</h3>
              <p className="text-text/70">partners@thebluepoint.com</p>
              <p className="text-sm text-text/50 mt-1">Interested in joining as a verified local helper network?</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Your Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl border border-border bg-bg outline-none focus:ring-2 focus:ring-primary" placeholder="Name" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input type="email" className="w-full h-12 px-4 rounded-xl border border-border bg-bg outline-none focus:ring-2 focus:ring-primary" placeholder="Email" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea className="w-full h-32 p-4 rounded-xl border border-border bg-bg outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="w-full h-12 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#020617] mt-auto"><Footer /></div>
    </div>
  );
}
