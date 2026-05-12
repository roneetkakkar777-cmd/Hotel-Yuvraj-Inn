import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Location() {
  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Find Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Our <span className="gold-text">Location</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Hotel Yuvraj Inn is conveniently located in Indirapuram, Ghaziabad — easy access to Delhi NCR.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-5 animate-fade-left">
            <div className="glass-card rounded-2xl p-6 border border-[#1A2540]/8 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A2540] mb-5">Address & Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C9973A]/10 shrink-0">
                    <MapPinIcon className="h-5 w-5 text-[#C9973A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A2540]/40 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-[#1A2540] leading-relaxed">
                      4, Shakti Khand 4, Indirapuram,<br />
                      Ghaziabad, Uttar Pradesh 201014
                    </p>
                  </div>
                </div>

                <a href="tel:+919990917830" className="flex items-start gap-3 group">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C9973A]/10 shrink-0">
                    <PhoneIcon className="h-5 w-5 text-[#C9973A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A2540]/40 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-sm text-[#1A2540] group-hover:text-[#C9973A] transition-colors font-medium">
                      +91 99909 17830
                    </p>
                  </div>
                </a>

                <a href="mailto:hotelyuvrajresidency27@gmail.com" className="flex items-start gap-3 group">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C9973A]/10 shrink-0">
                    <EnvelopeIcon className="h-5 w-5 text-[#C9973A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A2540]/40 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-sm text-[#1A2540] group-hover:text-[#C9973A] transition-colors break-all">
                      hotelyuvrajresidency27@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/contact"
                  className="gold-btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  Enquire / Book
                </Link>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=4+Shakti+Khand+4+Indirapuram+Ghaziabad+201014"
                  target="_blank"
                  rel="noreferrer"
                  className="outline-btn flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                  Directions
                </a>
              </div>
            </div>

            {/* Travel tips */}
            <div className="glass-card rounded-2xl p-5 border border-[#1A2540]/8 shadow-sm">
              <h3 className="font-bold text-[#1A2540] mb-3">🚗 Travel Tips</h3>
              <ul className="space-y-2 text-sm text-[#1A2540]/70">
                <li className="flex gap-2"><span className="text-[#C9973A]">•</span> Share full address with PIN 201014 to drivers</li>
                <li className="flex gap-2"><span className="text-[#C9973A]">•</span> Indirapuram Metro Station nearby (Aqua Line)</li>
                <li className="flex gap-2"><span className="text-[#C9973A]">•</span> NH-24 / NH-58 easy approach via road</li>
                <li className="flex gap-2"><span className="text-[#C9973A]">•</span> Allow extra time during peak hours</li>
              </ul>
            </div>

            {/* Nearby */}
            <div className="glass-card rounded-2xl p-5 border border-[#1A2540]/8 shadow-sm">
              <h3 className="font-bold text-[#1A2540] mb-3">📍 Nearby</h3>
              <ul className="space-y-2 text-sm text-[#1A2540]/70">
                <li className="flex justify-between"><span>Shipra Mall</span><span className="text-[#C9973A]">~5 min</span></li>
                <li className="flex justify-between"><span>Wave City Center</span><span className="text-[#C9973A]">~10 min</span></li>
                <li className="flex justify-between"><span>Hindon River</span><span className="text-[#C9973A]">~15 min</span></li>
                <li className="flex justify-between"><span>Delhi NCR (via NH)</span><span className="text-[#C9973A]">~30 min</span></li>
              </ul>
            </div>
          </div>

          {/* Map column */}
          <div className="lg:col-span-3 animate-fade-right">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#C9973A]/20 h-[480px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1234567890!2d77.3700!3d28.6400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c1f9b1b1b1%3A0x1234567890abcdef!2sShakti%20Khand%204%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Yuvraj Inn Location Map"
              />
            </div>
            <p className="mt-3 text-xs text-[#1A2540]/40 text-center">
              Map powered by Google Maps. Click 'Directions' to get turn-by-turn navigation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
