import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-room.jpg";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import { 
  WifiIcon, 
  SparklesIcon, 
  MapPinIcon, 
  PhoneIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// ── Intersection observer hook ────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Animated counter ─────────────────────────────────
function Counter({ to, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const FEATURES = [
  { icon: WifiIcon, title: "Free Wi-Fi", desc: "High-speed internet in all rooms" },
  { icon: SparklesIcon, title: "Daily Housekeeping", desc: "Fresh rooms every day" },
  { icon: MapPinIcon, title: "Prime Location", desc: "Heart of Indirapuram" },
  { icon: CheckCircleIcon, title: "Easy Booking", desc: "Direct & instant confirmations" },
];

const TESTIMONIALS = [
  { name: "Rahul S.", rating: 5, text: "Clean, comfortable rooms at a great price. Staff was very helpful and friendly. Will stay again!" },
  { name: "Priya M.", rating: 5, text: "Excellent location in Indirapuram. Easy access to everything. Quick check-in, no hassle at all." },
  { name: "Amit K.", rating: 4, text: "Good value for money. Rooms are well-maintained. Perfect for business travelers visiting Ghaziabad." },
];

export default function Home() {
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);
  const [featRef, featInView] = useInView(0.1);
  const [roomsRef, roomsInView] = useInView(0.1);
  const [testimonialsRef, testimonialsInView] = useInView(0.1);

  return (
    <div className="bg-[#F9F7F2] text-[#1A2540] overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C9973A]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#C9973A]/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>

        <div
          ref={heroRef}
          className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center w-full"
        >
          {/* Left content */}
          <div className={`${heroInView ? "animate-fade-left" : "opacity-0"}`}>
            <span className="section-label">Welcome to</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hotel{" "}
              <span className="gold-text">Yuvraj Inn</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-lg">
              Experience comfortable and affordable stays in the heart of Indirapuram, Ghaziabad. 
              Modern rooms, premium amenities, and warm hospitality — book direct for the best rates.
            </p>

            {/* Address */}
            <div className="mt-4 flex items-start gap-2 text-white/50 text-sm">
              <MapPinIcon className="h-4 w-4 mt-0.5 text-[#C9973A] shrink-0" />
              4, Shakti Khand 4, Indirapuram, Ghaziabad, UP 201014
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="gold-btn inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold shadow-lg shadow-[#C9973A]/30"
              >
                Book Now
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a
                href="tel:+919990917830"
                className="outline-btn inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-white border-white/30 hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                Call 9990917830
              </a>
            </div>

            {/* Quick pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Free Wi-Fi", "AC Rooms", "24/7 Service", "Easy Checkout"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/15 backdrop-blur-sm"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className={`relative ${heroInView ? "animate-fade-right" : "opacity-0"} delay-200`}>
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-[#C9973A]/20 rounded-3xl blur-2xl" />
            <div className="relative">
              <img
                src={heroImg}
                alt="Hotel Yuvraj Inn room"
                className="relative w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-2xl"
                loading="eager"
              />
              {/* Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <StarIcon key={i} className="h-4 w-4 text-[#C9973A] fill-[#C9973A]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#1A2540]">4.8 / 5</span>
                </div>
                <p className="text-xs text-[#1A2540]/60 mt-0.5">Guest Rating</p>
              </div>
              {/* Quick info badge */}
              <div className="absolute -top-5 -right-5 bg-[#1A2540] rounded-2xl p-4 shadow-xl animate-float delay-300">
                <p className="text-2xl font-bold text-[#C9973A]">₹999<span className="text-xs text-white/60 font-normal">/night</span></p>
                <p className="text-xs text-white/60 mt-0.5">Starting from</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="bg-white border-b border-[#1A2540]/8 shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: 17, suffix: "+", label: "Rooms Available" },
            { value: 500, suffix: "+", label: "Happy Guests" },
            { value: 4, suffix: "★", label: "Average Rating" },
            { value: 24, suffix: "/7", label: "Support Available" },
          ].map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className={`${statsInView ? `animate-fade-up delay-${i * 100 + 100}` : "opacity-0"}`}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#C9973A]">
                {statsInView ? <Counter to={value} suffix={suffix} /> : "0"}
              </p>
              <p className="text-sm text-[#1A2540]/60 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="py-20 px-4">
        <div ref={featRef} className="mx-auto max-w-7xl">
          <div className={`text-center mb-12 ${featInView ? "animate-fade-up" : "opacity-0"}`}>
            <span className="section-label">Why Stay With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2540]">
              Comfort Meets <span className="gold-text">Affordability</span>
            </h2>
            <p className="mt-3 text-[#1A2540]/60 max-w-xl mx-auto">
              Everything you need for a perfect stay, without the premium price tag.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`glass-card card-hover rounded-2xl p-6 shadow-sm ${
                  featInView ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9973A]/10 mb-4">
                  <Icon className="h-6 w-6 text-[#C9973A]" />
                </div>
                <h3 className="font-bold text-[#1A2540]">{title}</h3>
                <p className="mt-1 text-sm text-[#1A2540]/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ROOMS ────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div ref={roomsRef} className="mx-auto max-w-7xl">
          <div className={`flex items-end justify-between mb-10 ${roomsRef ? "animate-fade-up" : "opacity-0"}`}>
            <div>
              <span className="section-label">Our Accommodation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2540]">Featured Rooms</h2>
            </div>
            <Link
              to="/rooms"
              className="hidden sm:inline-flex items-center gap-2 text-[#C9973A] text-sm font-semibold hover:gap-3 transition-all"
            >
              View All Rooms <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: room1, name: "Standard Double", price: "999", desc: "Comfortable room for 2 guests with modern amenities", tags: ["Double Bed", "AC", "Ensuite"] },
              { img: room2, name: "Deluxe Double", price: "1299", desc: "Spacious deluxe room with premium furnishings", tags: ["Double Bed", "AC", "TV", "Ensuite"] },
              { img: room3, name: "Executive Room", price: "1599", desc: "Premium room with superior comfort and style", tags: ["King Bed", "AC", "TV", "City View"] },
            ].map(({ img, name, price, desc, tags }, i) => (
              <article
                key={name}
                className={`card-hover rounded-2xl overflow-hidden shadow-sm border border-[#1A2540]/8 bg-white ${
                  roomsInView ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="h-52 w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#1A2540]/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    From ₹{price}/night
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1A2540] text-lg">{name}</h3>
                  <p className="mt-1 text-sm text-[#1A2540]/60">{desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-[#1A2540]/5 text-[#1A2540]/70 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#C9973A]">₹{price}<span className="text-sm text-[#1A2540]/40 font-normal">/night</span></span>
                    <Link
                      to="/contact"
                      className="gold-btn inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold"
                    >
                      Book <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/rooms" className="outline-btn inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
              View All Rooms <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCATION STRIP ────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-left">
            <span className="section-label">Find Us Easily</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2540]">
              Perfectly Located in{" "}
              <span className="gold-text">Indirapuram</span>
            </h2>
            <p className="mt-4 text-[#1A2540]/60 leading-relaxed">
              Located in the vibrant Shakti Khand area of Indirapuram, Ghaziabad — well-connected
              to Delhi NCR by metro and road, near shopping malls, restaurants, and business hubs.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Easy metro connectivity to Delhi & Noida",
                "Near major shopping centres",
                "Close to business districts",
                "5 min from NH-58 highway",
              ].map(pt => (
                <div key={pt} className="flex items-center gap-2 text-sm text-[#1A2540]/70">
                  <CheckCircleIcon className="h-5 w-5 text-[#C9973A] shrink-0" />
                  {pt}
                </div>
              ))}
            </div>
            <div className="mt-7 flex gap-4">
              <Link to="/location" className="outline-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
                <MapPinIcon className="h-4 w-4" /> Get Directions
              </Link>
              <Link to="/contact" className="gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-72 md:h-96 ring-1 ring-[#C9973A]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1234567890!2d77.3700!3d28.6400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c1f9b1b1b1%3A0x1234567890abcdef!2sShakti%20Khand%204%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Yuvraj Inn Location"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#1A2540]">
        <div ref={testimonialsRef} className="mx-auto max-w-7xl">
          <div className={`text-center mb-12 ${testimonialsInView ? "animate-fade-up" : "opacity-0"}`}>
            <span className="section-label">Guest Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Our Guests <span className="gold-text">Say</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, rating, text }, i) => (
              <div
                key={name}
                className={`bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${
                  testimonialsInView ? `animate-fade-up delay-${(i + 1) * 150}` : "opacity-0"
                }`}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: rating }).map((_, j) => (
                    <StarIcon key={j} className="h-4 w-4 text-[#C9973A] fill-[#C9973A]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic">"{text}"</p>
                <p className="mt-4 text-[#C9973A] font-semibold text-sm">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#C9973A] via-[#E8B84B] to-[#C9973A] bg-size-200 animate-shimmer">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready for a Comfortable Stay?
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            Book directly and get the best rates. Quick confirmations guaranteed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919990917830"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-[#C9973A] px-8 py-4 text-base font-bold hover:bg-white/90 transition-colors shadow-lg animate-pulse-gold"
            >
              <PhoneIcon className="h-5 w-5" />
              Call 9990917830
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white text-white px-8 py-4 text-base font-bold hover:bg-white/10 transition-colors"
            >
              Send Enquiry <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
