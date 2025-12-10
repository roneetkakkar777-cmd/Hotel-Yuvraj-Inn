import { useState } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const data = new FormData(form);

    // REQUIRED: replace with your Web3Forms access key
    data.set("access_key", "eb75feb4-d330-40b2-91e0-778d04c63c29");

    // Basic client-side validation
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const phone = data.get("phone")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill name, email, and message." });
      return;
    }

    // Honeypot: if filled, likely a bot
    if (data.get("botcheck")) {
      setStatus({ type: "error", message: "Spam detected." });
      return;
    }

    // Optional extra fields
    data.set("subject", "New enquiry - Mannat Hotel website");
    data.set("from_name", name);
    data.set("redirect", ""); // leave empty to handle response manually

    try {
      setSubmitting(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus({ type: "success", message: "Thanks! The enquiry was sent successfully." });
        form.reset();
      } else {
        setStatus({ type: "error", message: json.message || "Submission failed. Try again later." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8 grid gap-8 lg:grid-cols-5">
        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          <header>
            <h1 className="text-2xl md:text-3xl font-semibold">Contact</h1>
            <p className="mt-2 text-[#2F3A56]/80">
              Send dates and room needs. Direct bookings confirmed by phone or email.
            </p>
          </header>

          <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
            <h2 className="text-lg font-semibold">Mannat Residency Hotel</h2>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="inline-flex items-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                <span>SB‑03, Sector‑117, Noida, Uttar Pradesh 201304</span>
              </div>
              <a href="tel:+919599616249" className="inline-flex items-center gap-2 hover:text-[#C7A15C]">
                <PhoneIcon className="h-5 w-5" />
                <span>+91 95996 16249</span>
              </a>
              <a href="mailto:Mannathotel218@gmail.com" className="inline-flex items-center gap-2 hover:text-[#C7A15C]">
                <EnvelopeIcon className="h-5 w-5" />
                <span>Mannathotel218@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
            <h3 className="font-semibold">Booking tips</h3>
            <ul className="mt-2 text-sm text-[#2F3A56]/80 space-y-2">
              <li>Mention check‑in/out dates and guest count for faster quotes.</li>
              <li>Share any promo code from the Offers page with the enquiry.</li>
              <li>Breakfast is not included; mention if nearby options are needed.</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
            {/* Web3Forms required hidden field */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  className="mt-1 w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="mt-1 w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9XXXXXXXXX"
                  className="mt-1 w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Guests</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  placeholder="2"
                  className="mt-1 w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
                />
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Check‑in</label>
                <input
                  type="date"
                  name="checkin"
                  className="mt-1 w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Check‑out</label>
                <input
                  type="date"
                  name="checkout"
                  className="mt-1 w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Dates, no. of rooms (double), any promo code (e.g., WEEKDAY10), and special requests."
                className="mt-1 w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
              />
            </div>

            {/* Honeypot field (hidden) */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Optional additional metadata */}
            <input type="hidden" name="from_name" value="Mannat Hotel Website" />
            <input type="hidden" name="subject" value="New enquiry - Mannat Hotel website" />
            <input type="hidden" name="redirect" value="" />

            {/* Status */}
            {status.message && (
              <div
                className={`mt-4 rounded-md px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="mt-5 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-md bg-[#C7A15C] px-4 py-2 text-white text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                <PaperAirplaneIcon className="h-4 w-4" />
                {submitting ? "Sending..." : "Send Enquiry"}
              </button>
              <a href="tel:+919599616249" className="text-sm text-[#2F3A56] hover:text-[#C7A15C]">
                Or call +91 95996 16249
              </a>
            </div>
          </form>

          {/* Map preview strip */}
          <div className="mt-6 bg-white rounded-xl border border-[#2F3A56]/10 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.833792768994!2d77.3919867752868!3d28.5747532756963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0036039a33%3A0xff7b4684e1420e51!2sMannat%20Residency%20Hotel!5e0!3m2!1sen!2sin!4v1759942929210!5m2!1sen!2sin"
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mannat Residency Hotel Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
