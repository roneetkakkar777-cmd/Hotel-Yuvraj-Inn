import { useState } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const data = new FormData(form);

    // NOTE: Replace YOUR_NEW_ACCESS_KEY below with your Web3Forms access key
    data.set("access_key", "YOUR_NEW_ACCESS_KEY");

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill name, email, and message." });
      return;
    }

    if (data.get("botcheck")) {
      setStatus({ type: "error", message: "Spam detected." });
      return;
    }

    data.set("subject", "New enquiry - Hotel Youvraj Inn website");
    data.set("from_name", name);
    data.set("redirect", "");

    try {
      setSubmitting(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus({ type: "success", message: "Thanks! Your enquiry was sent successfully. We'll contact you shortly." });
        form.reset();
      } else {
        setStatus({ type: "error", message: json.message || "Submission failed. Try again later." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Ready to book or have a question? We're here to help. Reach us by phone, email, or the form below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 grid gap-10 lg:grid-cols-5">
        {/* Info */}
        <div className="lg:col-span-2 space-y-5 animate-fade-left">
          {/* Hotel info */}
          <div className="glass-card rounded-2xl p-6 shadow-sm border border-[#1A2540]/8">
            <h2 className="text-xl font-bold text-[#1A2540] mb-4">Hotel Youvraj Inn</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#C9973A]/10 shrink-0">
                  <MapPinIcon className="h-5 w-5 text-[#C9973A]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1A2540]/40 uppercase tracking-wide">Address</p>
                  <p className="text-sm text-[#1A2540] mt-0.5">4, Shakti Khand 4, Indirapuram,<br />Ghaziabad, Uttar Pradesh 201014</p>
                </div>
              </div>
              <a href="tel:+919990917830" className="flex items-start gap-3 group">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#C9973A]/10 shrink-0">
                  <PhoneIcon className="h-5 w-5 text-[#C9973A]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1A2540]/40 uppercase tracking-wide">Phone</p>
                  <p className="text-sm text-[#1A2540] group-hover:text-[#C9973A] transition-colors mt-0.5">+91 99909 17830</p>
                </div>
              </a>
              <a href="mailto:hotelyuvrajresidency27@gmail.com" className="flex items-start gap-3 group">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#C9973A]/10 shrink-0">
                  <EnvelopeIcon className="h-5 w-5 text-[#C9973A]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1A2540]/40 uppercase tracking-wide">Email</p>
                  <p className="text-sm text-[#1A2540] group-hover:text-[#C9973A] transition-colors mt-0.5 break-all">hotelyuvrajresidency27@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919990917830"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass-card rounded-2xl p-5 border border-green-200/50 hover:border-green-400/50 transition-colors group shadow-sm"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500 text-white shrink-0">
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-[#1A2540] group-hover:text-green-600 transition-colors">Chat on WhatsApp</p>
              <p className="text-xs text-[#1A2540]/50 mt-0.5">Quick responses, instant support</p>
            </div>
          </a>

          {/* Booking tips */}
          <div className="glass-card rounded-2xl p-5 border border-[#1A2540]/8 shadow-sm">
            <h3 className="font-bold text-[#1A2540] mb-3">📋 Booking Tips</h3>
            <ul className="space-y-2 text-sm text-[#1A2540]/70">
              <li className="flex gap-2"><span className="text-[#C9973A]">✓</span> Mention check-in/out dates for faster quotes</li>
              <li className="flex gap-2"><span className="text-[#C9973A]">✓</span> Share your promo code from Offers page</li>
              <li className="flex gap-2"><span className="text-[#C9973A]">✓</span> Include guest count and room preference</li>
              <li className="flex gap-2"><span className="text-[#C9973A]">✓</span> Breakfast is not included in room rates</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 animate-fade-right">
          <form
            onSubmit={onSubmit}
            className="glass-card rounded-2xl p-6 md:p-8 border border-[#1A2540]/8 shadow-sm"
          >
            <h2 className="text-xl font-bold text-[#1A2540] mb-6">Send an Enquiry</h2>

            {/* Web3Forms hidden field - replace access key above */}
            <input type="hidden" name="access_key" value="YOUR_NEW_ACCESS_KEY" />
            <input type="hidden" name="from_name" value="Hotel Youvraj Inn Website" />
            <input type="hidden" name="subject" value="New enquiry - Hotel Youvraj Inn website" />
            <input type="hidden" name="redirect" value="" />

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1A2540]/70 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2540]/70 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2540]/70 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2540]/70 mb-1.5">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  placeholder="2"
                  className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2540]/70 mb-1.5">Check-in Date</label>
                <input
                  type="date"
                  name="checkin"
                  className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2540]/70 mb-1.5">Check-out Date</label>
                <input
                  type="date"
                  name="checkout"
                  className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-[#1A2540]/70 mb-1.5">Message *</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Share your dates, room preference, promo code (if any), or special requests..."
                className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all resize-none"
              />
            </div>

            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Status message */}
            {status.message && (
              <div
                className={`mt-4 rounded-xl px-4 py-3 text-sm border ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="gold-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <PaperAirplaneIcon className="h-4 w-4" />
                {submitting ? "Sending..." : "Send Enquiry"}
              </button>
              <span className="text-sm text-[#1A2540]/50">or</span>
              <a
                href="tel:+919990917830"
                className="text-sm font-semibold text-[#C9973A] hover:text-[#1A2540] transition-colors flex items-center gap-1.5"
              >
                <PhoneIcon className="h-4 w-4" />
                Call +91 99909 17830
              </a>
            </div>
          </form>

          {/* Map */}
          <div className="mt-6 rounded-2xl overflow-hidden shadow-sm ring-1 ring-[#1A2540]/8 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1234567890!2d77.3700!3d28.6400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c1f9b1b1b1%3A0x1234567890abcdef!2sShakti%20Khand%204%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Youvraj Inn Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
