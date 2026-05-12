import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/outline";

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
    price: 999,
    amenities: ["Wi-Fi", "AC", "Ensuite", "Housekeeping", "TV"],
    area: 180,
    location: "Ground Floor",
    desc: "Clean and comfortable standard room perfect for solo travelers or couples.",
  },
  {
    id: 2,
    name: "Deluxe Double",
    images: [room2],
    capacity: 2,
    bed: "Double",
    price: 1299,
    amenities: ["Wi-Fi", "AC", "Ensuite", "Housekeeping", "TV", "Mini Fridge"],
    area: 220,
    location: "Upper Floor",
    desc: "Spacious deluxe room with premium furnishings and modern amenities.",
  },
  {
    id: 3,
    name: "Executive Room",
    images: [room3],
    capacity: 2,
    bed: "King",
    price: 1599,
    amenities: ["Wi-Fi", "AC", "Ensuite", "Housekeeping", "TV", "City View", "Work Desk"],
    area: 260,
    location: "Top Floor",
    desc: "Premium executive room with superior comfort, work desk, and city view.",
  },
];

function RoomCard({ room }) {
  return (
    <article className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-[#1A2540]/8">
      <div className="relative overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="h-52 w-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[#C9973A] text-white text-xs px-3 py-1.5 rounded-full font-semibold">
            {room.location}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-[#1A2540]/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
            ₹{room.price}/night
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-[#1A2540] text-lg">{room.name}</h3>
            <p className="mt-1 text-xs text-[#1A2540]/50">{room.capacity} guests · {room.bed} bed · {room.area} sq ft</p>
          </div>
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map(i => (
              <StarIcon key={i} className="h-3.5 w-3.5 text-[#C9973A] fill-[#C9973A]" />
            ))}
          </div>
        </div>

        <p className="mt-2 text-sm text-[#1A2540]/65 leading-relaxed">{room.desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="inline-flex items-center rounded-lg bg-[#1A2540]/5 text-[#1A2540]/70 px-2.5 py-1 text-xs font-medium"
            >
              {a}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span className="inline-flex items-center rounded-lg bg-[#C9973A]/10 text-[#C9973A] px-2.5 py-1 text-xs font-medium">
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#1A2540]/40">From</p>
            <p className="text-xl font-bold text-[#C9973A]">₹{room.price}<span className="text-xs text-[#1A2540]/40 font-normal">/night</span></p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/gallery" className="text-sm text-[#1A2540]/50 hover:text-[#C9973A] transition-colors font-medium">
              Photos
            </Link>
            <Link
              to="/contact"
              className="gold-btn inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold"
            >
              Book <ArrowRightIcon className="h-4 w-4" />
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
    if (sort === "name") list = list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "area") list = list.sort((a, b) => b.area - a.area);
    else if (sort === "price") list = list.sort((a, b) => a.price - b.price);
    return list;
  }, [query, capacity, sort]);

  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Our Accommodation</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Rooms & <span className="gold-text">Rates</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Comfortable, well-furnished rooms in Indirapuram, Ghaziabad. Book direct for the best rates.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        {/* Filter Bar */}
        <div className="glass-card rounded-2xl p-5 border border-[#1A2540]/8 shadow-sm mb-8 grid md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Search rooms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
          />
          <select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
          >
            <option value="any">Capacity: Any</option>
            <option value="1">1+ guests</option>
            <option value="2">2+ guests</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
          >
            <option value="name">Sort: Name</option>
            <option value="price">Sort: Price</option>
            <option value="area">Sort: Area</option>
          </select>
          <Link
            to="/contact"
            className="gold-btn inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
          >
            Enquire / Book <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Rooms Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#1A2540]/40">
            <p className="text-lg">No rooms match your search.</p>
            <button onClick={() => { setQuery(""); setCapacity("any"); }} className="mt-4 text-[#C9973A] hover:underline text-sm font-medium">
              Clear filters
            </button>
          </div>
        )}

        <div className="mt-8 glass-card rounded-2xl p-4 border border-[#C9973A]/20 text-sm text-[#1A2540]/70 text-center">
          💡 For fastest confirmation, call us at{" "}
          <a href="tel:+919990917830" className="text-[#C9973A] font-semibold hover:underline">
            9990917830
          </a>
          . Rates may vary by season and availability.
        </div>
      </section>
    </div>
  );
}
