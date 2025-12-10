import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Location() {
  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Location</h1>
          <p className="mt-2 text-[#2F3A56]/80">
            Find Mannat Residency Hotel in Sector‑117, Noida. Easy approach for commuters and business travelers.
          </p>
        </header>

        {/* Address & Contacts */}
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="mt-2 text-sm text-[#2F3A56]/80">
                SB‑03, Sector‑117, Noida, Uttar Pradesh 201304
              </p>

              <div className="mt-4 grid gap-2 text-sm">
                <a href="https://maps.google.com/?q=SB-03, Sector-117, Noida 201304" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#2F3A56] hover:text-[#C7A15C]">
                  <MapPinIcon className="h-5 w-5" />
                  Open in Google Maps
                </a>
                <a href="tel:+919599616249" className="inline-flex items-center gap-2 text-[#2F3A56] hover:text-[#C7A15C]">
                  <PhoneIcon className="h-5 w-5" />
                  +91 95996 16249
                </a>
                <a href="mailto:Mannathotel218@gmail.com" className="inline-flex items-center gap-2 text-[#2F3A56] hover:text-[#C7A15C]">
                  <EnvelopeIcon className="h-5 w-5" />
                  Mannathotel218@gmail.com
                </a>
              </div>

              <div className="mt-4 flex gap-3">
                <Link to="/contact" className="rounded-md bg-[#C7A15C] px-4 py-2 text-white text-sm hover:opacity-90">
                  Enquire / Book
                </Link>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=SB-03%2C%20Sector-117%2C%20Noida%2C%20201304"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#2F3A56]/20 px-4 py-2 text-sm hover:bg-white"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
              <h3 className="font-semibold">Travel tips</h3>
              <ul className="mt-2 text-sm text-[#2F3A56]/80 space-y-2">
                <li>Share the full address including PIN 201304 with drivers for accuracy.</li>
                <li>Plan extra time during peak traffic hours on major Noida roads.</li>
              </ul>
            </div>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-[#2F3A56]/10 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.833792768994!2d77.3919867752868!3d28.5747532756963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0036039a33%3A0xff7b4684e1420e51!2sMannat%20Residency%20Hotel!5e0!3m2!1sen!2sin!4v1759942929210!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mannat Residency Map"
              />
            </div>
            <p className="mt-2 text-xs text-[#2F3A56]/60">
              Map powered by Google Maps Embed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
