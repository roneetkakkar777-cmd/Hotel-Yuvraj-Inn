import { Link } from "react-router-dom";
import { HeartIcon, ShieldCheckIcon, SparklesIcon, MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import heroImg from "../assets/images/hero-room.jpg";
import lobbyImg from "../assets/images/lobby.jpg";

export default function About() {
  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Hero header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            About <span className="gold-text">Hotel Youvraj Inn</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            A warm, comfortable stay in the heart of Indirapuram, Ghaziabad — thoughtfully run for your comfort.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-14 grid gap-10 lg:grid-cols-2 items-center">
        <div className="animate-fade-left">
          <span className="section-label">Who We Are</span>
          <h2 className="text-3xl font-bold text-[#1A2540]">
            Your Home Away From Home
          </h2>
          <p className="mt-4 text-[#1A2540]/70 leading-relaxed">
            Hotel Youvraj Inn is a comfortable, well-maintained property located at 4, Shakti Khand 4, 
            Indirapuram, Ghaziabad — thoughtfully designed to give travelers a reliable, calm base 
            in the NCR region. We focus on clean rooms, clear policies, responsive communication, 
            and a location that makes your plans simple.
          </p>
          <p className="mt-3 text-[#1A2540]/70 leading-relaxed">
            Whether you're visiting for business or leisure, Hotel Youvraj Inn offers the perfect 
            blend of comfort and value. Our team is dedicated to making your stay memorable and hassle-free.
          </p>
          <div className="mt-7 flex gap-4">
            <Link to="/rooms" className="outline-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
              View Rooms
            </Link>
            <Link to="/contact" className="gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
              Enquire / Book <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-right">
          <div className="absolute -inset-3 bg-[#C9973A]/15 rounded-3xl blur-2xl" />
          <img
            src={heroImg}
            alt="Hotel Youvraj Inn"
            className="relative w-full h-80 object-cover rounded-3xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Story & Location */}
      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
          <div className="glass-card card-hover rounded-2xl p-7 border border-[#1A2540]/8 shadow-sm animate-fade-left">
            <h2 className="text-xl font-bold text-[#1A2540] mb-3">Our Story</h2>
            <p className="text-sm text-[#1A2540]/70 leading-relaxed">
              Hotel Youvraj Inn was established to give travelers a dependable, comfortable base 
              in Indirapuram — without unnecessary frills. Our aim is clean rooms, clear policies, 
              responsive service, and a location that makes city plans simple.
            </p>
            <p className="mt-3 text-sm text-[#1A2540]/70 leading-relaxed">
              We've refined what matters most: housekeeping standards, attentive check-in support, 
              and straightforward pricing that respects your time and budget. Every guest is 
              treated with warmth and professionalism.
            </p>
          </div>

          <div className="glass-card card-hover rounded-2xl p-7 border border-[#1A2540]/8 shadow-sm animate-fade-right">
            <h2 className="text-xl font-bold text-[#1A2540] mb-3">Where to Find Us</h2>
            <p className="text-sm text-[#1A2540]/70 leading-relaxed">
              We're located at 4, Shakti Khand 4, Indirapuram, Ghaziabad, Uttar Pradesh 201014. 
              The property offers easy access to major highways, shopping centres, metro connectivity, 
              and business districts in the NCR region.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#C9973A] font-semibold">
              <MapPinIcon className="h-5 w-5" />
              <Link to="/location" className="hover:underline">
                See map and directions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 animate-fade-up">
            <span className="section-label">Our Values</span>
            <h2 className="text-3xl font-bold text-[#1A2540]">What Guides Us</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: HeartIcon,
                title: "Guest-First",
                desc: "Polite, responsive communication from enquiry to checkout, with clear expectations and quick confirmations.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Consistency",
                desc: "Housekeeping standards and simple house rules help every stay feel predictable and comfortable.",
              },
              {
                icon: SparklesIcon,
                title: "Clarity",
                desc: "Our pricing and policies are stated upfront. No hidden fees, no surprises — just honest hospitality.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`glass-card card-hover rounded-2xl p-6 border border-[#1A2540]/8 shadow-sm animate-fade-up delay-${(i + 1) * 150}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9973A]/10 mb-4">
                  <Icon className="h-6 w-6 text-[#C9973A]" />
                </div>
                <h3 className="font-bold text-[#1A2540] mb-2">{title}</h3>
                <p className="text-sm text-[#1A2540]/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-14 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <span className="section-label">Guest Voices</span>
            <h2 className="text-3xl font-bold text-[#1A2540]">What Our Guests Say</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { text: "Clean rooms, prompt service — great weekend base in Indirapuram.", src: "Guest review" },
              { text: "Straightforward pricing and simple check-in — exactly what we needed.", src: "Guest review" },
              { text: "Friendly staff and well-maintained property. Very comfortable stay.", src: "Guest review" },
            ].map(({ text, src }, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-[#1A2540]/10 p-5 bg-[#F9F7F2] animate-fade-up delay-${(i + 1) * 100}`}
              >
                <p className="text-sm text-[#1A2540]/75 italic leading-relaxed">"{text}"</p>
                <p className="mt-3 text-xs text-[#C9973A] font-semibold">{src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Planning a Visit to Ghaziabad?</h2>
          <p className="mt-3 text-white/70">Share your dates for a quick quote — direct bookings get the best rates.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919990917830"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              Call Now
            </a>
            <Link to="/contact" className="gold-btn inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold">
              Enquire / Book <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
