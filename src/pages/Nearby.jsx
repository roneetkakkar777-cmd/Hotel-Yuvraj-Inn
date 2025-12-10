import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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

// Helper to build Google Maps search links
function mapsSearchLink(q) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

// Seed attractions (replace/expand with real picks)
const RAW_SPOTS = [
  {
    id: "butterfly-park",
    name: "Sector 117 Butterfly Park",
    category: "Parks",
    approx: "5–10 min",
    notes: "Local green space; good for short walks.",
    address: "Sector 117, Noida",
  },
  {
    id: "dlf-mall",
    name: "DLF Mall of India (Sec‑18)",
    category: "Shopping",
    approx: "25–35 min",
    notes: "Large mall; dining and retail hub.",
    address: "Sector 18, Noida",
  },
  {
    id: "kidzania",
    name: "KidZania Delhi NCR",
    category: "Family",
    approx: "25–35 min",
    notes: "Popular family edutainment venue.",
    address: "Near The Great India Place, Noida",
  },
  {
    id: "sec-62",
    name: "Noida Sector 62 Business Hub",
    category: "Business",
    approx: "20–30 min",
    notes: "Corporate offices and IT parks.",
    address: "Sector 62, Noida",
  },
  {
    id: "sec-51-metro",
    name: "Noida Sector 51/52 Metro",
    category: "Transit",
    approx: "10–15 min",
    notes: "Aqua/Blue line interchange nearby.",
    address: "Sector 51/52, Noida",
  },
  {
    id: "gardens-galleria",
    name: "Gardens Galleria",
    category: "Leisure",
    approx: "25–35 min",
    notes: "Dining and entertainment near Sec‑18.",
    address: "Sector 38, Noida",
  },
  {
    id: "logix-mall",
    name: "Logix City Centre",
    category: "Shopping",
    approx: "15–20 min",
    notes: "Multiplex and retail; mid‑distance.",
    address: "Sector 32, Noida",
  },
  {
    id: "supertech-north-eye",
    name: "Supertech North Eye (Landmark)",
    category: "Landmarks",
    approx: "10–15 min",
    notes: "Tall landmark near Sectors 74–79.",
    address: "Sector 74, Noida",
  },
];

const CATEGORIES = ["All", "Parks", "Shopping", "Family", "Business", "Transit", "Leisure", "Landmarks"];

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
    <article className="bg-white rounded-xl border border-[#2F3A56]/10 p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold">{spot.name}</h3>
          <p className="mt-1 text-sm text-[#2F3A56]/80">{spot.address}</p>
        </div>
        <CategoryIcon category={spot.category} className="h-6 w-6 text-[#C7A15C]" />
      </div>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm text-[#2F3A56]/80">
          <MapPinIcon className="h-4 w-4" />
          {spot.approx}
        </span>
        <a
          href={mapsSearchLink(`${spot.name} ${spot.address}`)}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[#2F3A56] hover:text-[#C7A15C]"
        >
          Open in Maps
        </a>
      </div>
      {spot.notes && <p className="text-sm text-[#2F3A56]/80">{spot.notes}</p>}
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
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Nearby</h1>
          <p className="mt-2 text-[#2F3A56]/80">
            Useful places and attractions around Sector‑117 with typical travel times. Times vary with traffic; check live maps.
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white border border-[#2F3A56]/10 rounded-xl p-4 grid md:grid-cols-3 gap-3">
          <div className="flex gap-2 flex-wrap md:col-span-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 text-sm rounded-md border ${
                  category === c
                    ? "bg-[#2F3A56] text-white border-[#2F3A56]"
                    : "bg-white text-[#2F3A56] border-[#2F3A56]/20 hover:border-[#2F3A56]/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Search e.g., Mall, Metro, Park"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((s) => (
            <SpotCard key={s.id} spot={s} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-[#2F3A56] text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Need tailored recommendations near Sector‑117 for specific plans?</p>
          <div className="flex gap-3">
            <a href="tel:+919599616249" className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15">
              Call Now
            </a>
            <Link to="/contact" className="rounded-md bg-[#C7A15C] px-4 py-2 text-white hover:opacity-90">
              Ask Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
