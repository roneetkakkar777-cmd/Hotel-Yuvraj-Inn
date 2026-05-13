import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  BuildingStorefrontIcon,
  BuildingOffice2Icon,
  SunIcon,
  MapPinIcon,
  MusicalNoteIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

function mapsSearchLink(q) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

const RAW_SPOTS = [
  {
    id: "shipra-mall",
    name: "Shipra Mall",
    category: "Shopping",
    approx: "~5 min",
    notes: "Popular shopping destination with restaurants, cinema & retail.",
    address: "Shipra Sun City, Indirapuram",
  },
  {
    id: "wave-city",
    name: "Wave City Center",
    category: "Shopping",
    approx: "~10 min",
    notes: "Large mall with entertainment options and food court.",
    address: "NH-24, Indirapuram",
  },
  {
    id: "indirapuram-park",
    name: "Indirapuram Habitat Centre",
    category: "Parks",
    approx: "~5 min",
    notes: "Green spaces and walking paths for a morning stroll.",
    address: "Indirapuram, Ghaziabad",
  },
  {
    id: "nh24-business",
    name: "NH-24 Business Corridor",
    category: "Business",
    approx: "~5 min",
    notes: "Major business and corporate offices along NH-24.",
    address: "NH-24, Ghaziabad",
  },
  {
    id: "vaishali-metro",
    name: "Vaishali Metro Station",
    category: "Transit",
    approx: "~10 min",
    notes: "Blue Line Metro — direct connectivity to Delhi.",
    address: "Vaishali, Ghaziabad",
  },
  {
    id: "noida-sector18",
    name: "Sector 18, Noida",
    category: "Shopping",
    approx: "~20–25 min",
    notes: "Major commercial hub with malls, dining and entertainment.",
    address: "Sector 18, Noida",
  },
  {
    id: "hindon-river",
    name: "Hindon River Eco Park",
    category: "Parks",
    approx: "~15 min",
    notes: "River-side park, good for evening walks.",
    address: "Hindon River, Ghaziabad",
  },
  {
    id: "dlf-mall-noida",
    name: "DLF Mall of India",
    category: "Leisure",
    approx: "~25–30 min",
    notes: "One of the largest malls in India — dining, cinema, retail.",
    address: "Sector 18, Noida",
  },
];

const CATEGORIES = ["All", "Parks", "Shopping", "Business", "Transit", "Leisure"];

function CategoryIcon({ category, className = "h-5 w-5" }) {
  const map = {
    Parks: SunIcon,
    Shopping: ShoppingBagIcon,
    Family: AcademicCapIcon,
    Business: BuildingOffice2Icon,
    Transit: TruckIcon,
    Leisure: MusicalNoteIcon,
    Landmarks: BuildingStorefrontIcon,
  };
  const Icon = map[category] || MapPinIcon;
  return <Icon className={className} />;
}

function SpotCard({ spot }) {
  return (
    <article className="card-hover bg-white rounded-2xl border border-[#1A2540]/8 p-5 flex flex-col gap-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-[#1A2540]">{spot.name}</h3>
          <p className="mt-1 text-xs text-[#1A2540]/50">{spot.address}</p>
        </div>
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C9973A]/10 shrink-0">
          <CategoryIcon category={spot.category} className="h-5 w-5 text-[#C9973A]" />
        </div>
      </div>
      {spot.notes && <p className="text-sm text-[#1A2540]/65 leading-relaxed">{spot.notes}</p>}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9973A]">
          <MapPinIcon className="h-4 w-4" />
          {spot.approx}
        </span>
        <a
          href={mapsSearchLink(`${spot.name} ${spot.address}`)}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-[#1A2540]/50 hover:text-[#C9973A] transition-colors flex items-center gap-1"
        >
          Open Maps <ArrowRightIcon className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}

export default function Nearby() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const spots = useMemo(() => {
    let list = RAW_SPOTS;
    if (category !== "All") list = list.filter((s) => s.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q) ||
          s.notes?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [category, query]);

  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Explore Around Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Nearby <span className="gold-text">Attractions</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Useful places around Indirapuram with approximate travel times from Hotel Youvraj Inn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        {/* Controls */}
        <div className="glass-card rounded-2xl border border-[#1A2540]/8 p-5 shadow-sm mb-8 grid md:grid-cols-3 gap-4">
          <div className="flex gap-2 flex-wrap md:col-span-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 text-sm rounded-xl border font-medium transition-all duration-200 ${
                  category === c
                    ? "bg-[#1A2540] text-white border-[#1A2540] shadow-sm"
                    : "bg-white text-[#1A2540]/70 border-[#1A2540]/15 hover:border-[#C9973A]/40 hover:text-[#C9973A]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Search places..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((s) => (
            <SpotCard key={s.id} spot={s} />
          ))}
          {spots.length === 0 && (
            <div className="col-span-full text-center py-12 text-[#1A2540]/40">
              <p>No places match your search.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 hero-gradient rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-white">Need local recommendations?</h3>
            <p className="text-white/60 text-sm mt-1">Our team can help you plan your visit around Indirapuram.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:+919990917830"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
            <Link to="/contact" className="gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold">
              Ask Us <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
