import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// Replace with real assets
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";

const ROOMS = [
  {
    id: 1,
    name: "Standard Double",
    images: [room1],
    capacity: 2,
    bed: "Double",
    price: null, // fill later
    amenities: ["Wi‑Fi", "AC", "Ensuite", "Housekeeping"],
    area: 180,
    location: "Ground Floor",
  },
  {
    id: 2,
    name: "Deluxe Double",
    images: [room2],
    capacity: 2,
    bed: "Double",
    price: null,
    amenities: ["Wi‑Fi", "AC", "Ensuite", "Housekeeping"],
    area: 220,
    location: "Upper Floor",
  },
  {
    id: 3,
    name: "Terrace‑Side Double",
    images: [room3],
    capacity: 2,
    bed: "Double",
    price: null,
    amenities: ["Wi‑Fi", "AC", "Ensuite", "Housekeeping", "Near Terrace"],
    area: 210,
    location: "Near Terrace",
  },
  // Duplicate to reach 17 entries as needed
];

function AmenityTag({ label }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#2F3A56]/5 text-[#2F3A56] px-2 py-1 text-xs">
      {label}
    </span>
  );
}

function RoomCard({ room }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#2F3A56]/10">
      <img
        src={room.images[0]}
        alt={room.name}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">{room.name}</h3>
            <p className="mt-1 text-sm text-[#2F3A56]/80">
              {room.capacity} guests · {room.bed} bed · {room.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#2F3A56]/60">From</p>
            <p className="text-[#C7A15C] font-medium">{room.price ? `₹ ${room.price}/night` : "₹ —/night"}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((a) => (
            <AmenityTag key={a} label={a} />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#2F3A56]/60">{room.area} sq ft approx</span>
          <div className="flex items-center gap-3">
            <Link to="/gallery" className="text-sm text-[#2F3A56] hover:text-[#C7A15C]">
              Photos
            </Link>
            <Link to="/contact" className="text-sm text-white bg-[#C7A15C] px-3 py-1.5 rounded-md hover:opacity-90">
              Book
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Rooms() {
  const [query, setQuery] = useState("");
  const [capacity, setCapacity] = useState("any");
  const [sort, setSort] = useState("name");

  const filtered = useMemo(() => {
    let list = ROOMS.filter((r) =>
      r.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (capacity !== "any") {
      const cap = parseInt(capacity, 10);
      list = list.filter((r) => r.capacity >= cap);
    }
    if (sort === "name") {
      list = list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "area") {
      list = list.sort((a, b) => b.area - a.area);
    }
    return list;
  }, [query, capacity, sort]);

  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Rooms & Rates</h1>
          <p className="mt-2 text-[#2F3A56]/80">
            17 double rooms designed for comfortable stays in Sector‑117, Noida. Breakfast not included.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="bg-white border border-[#2F3A56]/10 rounded-xl p-4 grid md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Search rooms"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
          />
          <select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
          >
            <option value="any">Capacity: Any</option>
            <option value="2">2+ guests</option>
            <option value="3">3+ guests</option>
            <option value="4">4+ guests</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
          >
            <option value="name">Sort: Name</option>
            <option value="area">Sort: Area</option>
          </select>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#C7A15C] px-4 py-2 text-white text-sm font-medium hover:opacity-90"
          >
            Enquire / Book
          </Link>
        </div>

        {/* Rooms Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-[#2F3A56]/60">
          Tip: Call 9599616249 for fastest confirmation. Rates vary by season and availability.
        </p>
      </section>
    </div>
  );
}
