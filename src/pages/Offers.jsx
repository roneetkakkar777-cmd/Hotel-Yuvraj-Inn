import { Link } from "react-router-dom";
import {
  TagIcon,
  CalendarIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const OFFERS = [
  {
    id: "wkday-10",
    title: "Weekday Saver",
    badge: "-10%",
    desc: "Save on Monday–Thursday stays. Ideal for business travelers in Noida.",
    window: "Valid till Dec 31",
    code: "WEEKDAY10",
    terms: ["Direct bookings only", "Subject to availability", "Taxes extra"],
    type: "weekday",
  },
  {
    id: "early-15",
    title: "Early Bird",
    badge: "-15%",
    desc: "Book 14+ days in advance and get a better rate on double rooms.",
    window: "Book 14+ days ahead",
    code: "EARLY15",
    terms: [
      "Prepaid rate",
      "Non-refundable",
      "Date changes subject to availability",
    ],
    type: "advance",
  },
  {
    id: "wknd-2n",
    title: "Weekend 2‑Night Deal",
    badge: "2N",
    desc: "Stay Fri–Sun for 2+ nights and unlock an extra perk on arrival.",
    window: "Limited time",
    code: "WKND2N",
    terms: [
      "Minimum 2 nights",
      "Direct bookings only",
      "Perk provided at check‑in",
    ],
    type: "weekend",
  },
];

function OfferCard({ o }) {
  return (
    <article className="bg-white rounded-xl border border-[#2F3A56]/10 overflow-hidden shadow-sm">
      <div className="p-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-[#2F3A56] text-white text-xs px-2 py-1">
              {o.badge}
            </span>
            <h3 className="font-semibold">{o.title}</h3>
          </div>
          <p className="mt-2 text-sm text-[#2F3A56]/80">{o.desc}</p>
          <p className="mt-1 text-xs text-[#2F3A56]/60">
            <CalendarIcon className="inline h-4 w-4 mr-1" />
            {o.window}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {o.terms.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-md bg-[#2F3A56]/5 text-[#2F3A56] px-2 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <TagIcon className="h-6 w-6 text-[#C7A15C] shrink-0" />
      </div>

      <div className="px-4 pb-4 flex items-center justify-between">
        <div className="text-sm">
          <span className="text-[#2F3A56]/60">Promo code: </span>
          <span className="font-medium tracking-wide">{o.code}</span>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-md bg-[#C7A15C] px-3 py-2 text-white text-sm hover:opacity-90"
        >
          Enquire / Book
        </Link>
      </div>
    </article>
  );
}

export default function Offers() {
  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Offers</h1>
          <p className="mt-2 text-[#2F3A56]/80">
            Book direct for the best value. Choose a weekday, early‑bird, or
            weekend offer and share the promo code during enquiry.
          </p>
        </header>

        {/* Highlights */}
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          <div className="bg-white rounded-xl border border-[#2F3A56]/10 p-4 text-sm">
            <SunIcon className="h-5 w-5 text-[#C7A15C]" />
            <p className="mt-2">
              Weekday rates help business travelers save on Mon–Thu stays.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[#2F3A56]/10 p-4 text-sm">
            <CalendarIcon className="h-5 w-5 text-[#C7A15C]" />
            <p className="mt-2">
              Advance purchase offers reward early planners with better pricing.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[#2F3A56]/10 p-4 text-sm">
            <MoonIcon className="h-5 w-5 text-[#C7A15C]" />
            <p className="mt-2">
              Weekend bundles encourage longer leisure stays and extra perks.
            </p>
          </div>
        </div>

        {/* Offers grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((o) => (
            <OfferCard key={o.id} o={o} />
          ))}
        </div>

        {/* Promo code help */}
        <div className="mt-8 bg-white rounded-xl border border-[#2F3A56]/10 p-5">
          <h2 className="text-lg font-semibold">How to use a promo code</h2>
          <ol className="mt-3 list-decimal list-inside text-sm text-[#2F3A56]/80 space-y-1">
            <li>Choose an offer and note the promo code.</li>
            <li>Click Enquire / Book and share dates, guests, and the code.</li>
            <li>Receive a confirmation with the adjusted rate if eligible.</li>
          </ol>
          <p className="mt-3 text-xs text-[#2F3A56]/60">
            Offers apply to direct enquiries only and may vary by date and
            availability. Breakfast not included.
          </p>
        </div>

        {/* CTA strip */}
        <div className="mt-8 bg-[#2F3A56] text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Have dates in mind? Share them for a tailored quote.</p>
          <div className="flex gap-3">
            <a
              href="tel:+919599616249"
              className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919599616249"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15"
            >
              Chat
            </a>

            <Link
              to="/contact"
              className="rounded-md bg-[#C7A15C] px-4 py-2 text-white hover:opacity-90"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
