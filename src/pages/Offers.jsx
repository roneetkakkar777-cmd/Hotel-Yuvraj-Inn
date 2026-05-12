import { Link } from "react-router-dom";
import { ArrowRightIcon, TagIcon, CalendarIcon, SunIcon, MoonIcon, PhoneIcon } from "@heroicons/react/24/outline";

const OFFERS = [
  {
    id: "wkday-10",
    title: "Weekday Saver",
    badge: "-10%",
    badgeColor: "bg-blue-600",
    desc: "Save 10% on Monday–Thursday stays. Ideal for business travelers visiting Indirapuram.",
    window: "Valid till Dec 31",
    code: "WEEKDAY10",
    terms: ["Direct bookings only", "Subject to availability", "Taxes extra"],
    type: "weekday",
  },
  {
    id: "early-15",
    title: "Early Bird",
    badge: "-15%",
    badgeColor: "bg-green-600",
    desc: "Book 14+ days in advance and get a better rate on double rooms.",
    window: "Book 14+ days ahead",
    code: "EARLY15",
    terms: ["Prepaid rate", "Non-refundable", "Date changes subject to availability"],
    type: "advance",
  },
  {
    id: "wknd-2n",
    title: "Weekend 2-Night Deal",
    badge: "2N",
    badgeColor: "bg-purple-600",
    desc: "Stay Fri–Sun for 2+ nights and unlock an extra perk on arrival.",
    window: "Limited time",
    code: "WKND2N",
    terms: ["Minimum 2 nights", "Direct bookings only", "Perk provided at check-in"],
    type: "weekend",
  },
];

function OfferCard({ o }) {
  return (
    <article className="card-hover bg-white rounded-2xl border border-[#1A2540]/8 overflow-hidden shadow-sm">
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex items-center rounded-full ${o.badgeColor} text-white text-xs px-3 py-1.5 font-bold tracking-wide`}>
                {o.badge}
              </span>
              <h3 className="font-bold text-[#1A2540] text-lg">{o.title}</h3>
            </div>
            <p className="text-sm text-[#1A2540]/65 leading-relaxed">{o.desc}</p>
            <p className="mt-2 text-xs text-[#1A2540]/45 flex items-center gap-1.5">
              <CalendarIcon className="inline h-4 w-4 text-[#C9973A]" />
              {o.window}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {o.terms.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-lg bg-[#1A2540]/5 text-[#1A2540]/60 px-2.5 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9973A]/10 shrink-0">
            <TagIcon className="h-6 w-6 text-[#C9973A]" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-5 pt-2 border-t border-[#1A2540]/6 flex items-center justify-between">
        <div>
          <p className="text-xs text-[#1A2540]/40 mb-0.5">Promo Code</p>
          <span className="font-bold tracking-widest text-[#1A2540] text-sm bg-[#C9973A]/8 px-3 py-1.5 rounded-lg border border-[#C9973A]/20">
            {o.code}
          </span>
        </div>
        <Link
          to="/contact"
          className="gold-btn inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold"
        >
          Claim Offer <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function Offers() {
  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Special Deals</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Offers & <span className="gold-text">Deals</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Book direct for the best value. Share your promo code during enquiry for the discount.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        {/* Highlights */}
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {[
            { icon: SunIcon, title: "Weekday Savings", desc: "Mon–Thu rates help business travelers save more." },
            { icon: CalendarIcon, title: "Advance Deals", desc: "Reward early planners with better pricing." },
            { icon: MoonIcon, title: "Weekend Bundles", desc: "Longer leisure stays with extra perks on arrival." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card rounded-2xl border border-[#1A2540]/8 p-5 shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C9973A]/10 mb-3">
                <Icon className="h-5 w-5 text-[#C9973A]" />
              </div>
              <h3 className="font-bold text-[#1A2540] mb-1">{title}</h3>
              <p className="text-sm text-[#1A2540]/60">{desc}</p>
            </div>
          ))}
        </div>

        {/* Offers grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((o) => (
            <OfferCard key={o.id} o={o} />
          ))}
        </div>

        {/* How to use */}
        <div className="mt-10 glass-card rounded-2xl border border-[#1A2540]/8 p-7 shadow-sm">
          <h2 className="text-xl font-bold text-[#1A2540] mb-4">How to Use a Promo Code</h2>
          <ol className="space-y-3">
            {[
              "Choose an offer above and note the promo code.",
              "Click 'Claim Offer' and fill in your dates, guests, and the promo code.",
              "We'll confirm your booking with the adjusted rate if eligible.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#1A2540]/70">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#C9973A] text-white text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-[#1A2540]/40">
            Offers apply to direct enquiries only and may vary by date and availability.
          </p>
        </div>

        {/* CTA strip */}
        <div className="mt-8 hero-gradient rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-white">Have dates in mind?</h3>
            <p className="text-white/60 text-sm mt-1">Share them for a tailored quote with your promo code.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:+919990917830"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919990917830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 text-white px-5 py-2.5 text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
            >
              Enquire <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
