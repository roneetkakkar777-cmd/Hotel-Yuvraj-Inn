import { Link } from "react-router-dom";
import { HeartIcon, ShieldCheckIcon, SparklesIcon, MapPinIcon } from "@heroicons/react/24/outline";
import heroImg from "../assets/images/hero-room.jpg"; // swap with an About-specific photo if available

export default function About() {
  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-10 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">About Mannat Residency Hotel</h1>
          <p className="mt-4 text-[#2F3A56]/80">
            A simple, comfortable stay in Sector‑117, Noida—thoughtfully run with clarity and care. With 17 double rooms, ground‑floor access to all areas, and a quiet terrace, the focus is restful nights and easy logistics for city visits. Breakfast is not included, so stays are straightforward and priced clearly. 
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/rooms" className="inline-flex items-center rounded-md border border-[#2F3A56]/20 px-5 py-3 text-[#2F3A56] hover:bg-white">
              View Rooms
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-md bg-[#C7A15C] px-5 py-3 text-white hover:opacity-90">
              Enquire / Book
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 bg-[#6B8F71]/10 rounded-3xl blur"></div>
          <img
            src={heroImg}
            alt="About Mannat Residency Hotel"
            className="relative w-full h-80 object-cover rounded-3xl shadow"
            loading="lazy"
          />
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-[#2F3A56]/10">
        <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-xl p-6 border border-[#2F3A56]/10">
            <h2 className="text-xl font-semibold">Our story</h2>
            <p className="mt-2 text-sm text-[#2F3A56]/80">
              Mannat Residency Hotel was set up to give travelers a reliable, calm base in Noida—without unnecessary frills. The aim: clean rooms, clear policies, responsive communication, and a location that makes day plans simple. 
            </p>
            <p className="mt-2 text-sm text-[#2F3A56]/80">
              Over time, the team has refined what matters most: housekeeping standards, attentive check‑in support, and straightforward pricing that respects guest time and budget.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#2F3A56]/10">
            <h2 className="text-xl font-semibold">Where to find us</h2>
            <p className="mt-2 text-sm text-[#2F3A56]/80">
              SB‑03, Sector‑117, Noida, Uttar Pradesh 201304. The property offers ground‑floor access across common areas and a terrace for open air. 
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm">
              <MapPinIcon className="h-5 w-5" />
              <Link to="/location" className="text-[#2F3A56] hover:text-[#C7A15C]">
                See map and directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[#2F3A56]/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-xl font-semibold">What guides us</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
              <HeartIcon className="h-6 w-6 text-[#C7A15C]" />
              <h3 className="mt-3 font-semibold">Guest‑first</h3>
              <p className="mt-1 text-sm text-[#2F3A56]/80">
                Polite, responsive communication from enquiry to checkout, with clear expectations and quick confirmations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
              <ShieldCheckIcon className="h-6 w-6 text-[#C7A15C]" />
              <h3 className="mt-3 font-semibold">Consistency</h3>
              <p className="mt-1 text-sm text-[#2F3A56]/80">
                Housekeeping standards and simple rules help every stay feel predictable and comfortable.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
              <SparklesIcon className="h-6 w-6 text-[#C7A15C]" />
              <h3 className="mt-3 font-semibold">Clarity</h3>
              <p className="mt-1 text-sm text-[#2F3A56]/80">
                Breakfast is not included; pricing and policies are stated upfront to avoid surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-t border-[#2F3A56]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[#2F3A56]/10 p-4">
              <p className="text-sm text-[#2F3A56]/80">
                “Clean rooms and quick responses—easy weekend base in Noida.”
              </p>
              <p className="mt-2 text-xs text-[#2F3A56]/60">Guest review</p>
            </div>
            <div className="rounded-lg border border-[#2F3A56]/10 p-4">
              <p className="text-sm text-[#2F3A56]/80">
                “Straightforward pricing and simple check‑in—exactly what we needed.”
              </p>
              <p className="mt-2 text-xs text-[#2F3A56]/60">Guest review</p>
            </div>
            <div className="rounded-lg border border-[#2F3A56]/10 p-4">
              <p className="text-sm text-[#2F3A56]/80">
                “Ground‑floor access across areas was convenient for our parents.”
              </p>
              <p className="mt-2 text-xs text-[#2F3A56]/60">Guest review</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#2F3A56]/60">
            Reviews are illustrative; add verified guest feedback as it becomes available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2F3A56]/10 bg-[#2F3A56] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Planning a visit to Noida? Share dates for a quick quote.</p>
          <div className="flex gap-3">
            <a href="tel:+919599616249" className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15">
              Call Now
            </a>
            <Link to="/contact" className="rounded-md bg-[#C7A15C] px-4 py-2 text-white hover:opacity-90">
              Enquire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
