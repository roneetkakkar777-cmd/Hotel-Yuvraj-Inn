import { useEffect, useMemo, useState } from "react";

import heroImg from "../assets/images/hero-room.jpg";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
import lobbyImg from "../assets/images/lobby.jpg";
import bathroomImg from "../assets/images/bathroom.jpg";

const RAW_IMAGES = [
  { id: 1, src: heroImg, alt: "Hotel Yuvraj Inn — Signature Room", category: "Rooms" },
  { id: 2, src: room1, alt: "Standard Double Room", category: "Rooms" },
  { id: 3, src: room2, alt: "Deluxe Double Room", category: "Rooms" },
  { id: 4, src: room3, alt: "Executive Room", category: "Rooms" },
  { id: 5, src: lobbyImg, alt: "Hotel Lobby & Reception", category: "Lobby" },
  { id: 6, src: bathroomImg, alt: "Modern Ensuite Bathroom", category: "Bathrooms" },
];

const CATEGORIES = ["All", "Rooms", "Bathrooms", "Lobby", "Corridors", "Exterior"];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl transition-colors hover:bg-white/20 z-10"
      >
        ×
      </button>
      <div className="h-full w-full grid place-items-center px-4 py-12">
        <div className="relative max-w-5xl w-full">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
          />
          <div className="mt-4 flex items-center justify-between text-white/70 text-sm px-1">
            <span className="font-medium">{img.alt}</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
              {index + 1} / {images.length}
            </span>
          </div>
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 px-3 py-4 text-white/70 hover:text-white text-3xl transition-colors"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 px-3 py-4 text-white/70 hover:text-white text-3xl transition-colors"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(-1);

  const images = useMemo(() => {
    let list = RAW_IMAGES;
    if (category !== "All") list = list.filter((i) => i.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((i) => i.alt.toLowerCase().includes(q));
    }
    return list;
  }, [category, query]);

  const openAt = (idx) => setActive(idx);
  const close = () => setActive(-1);
  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Our Property</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Photo <span className="gold-text">Gallery</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Browse our rooms and spaces. Click any image to view full size.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        {/* Controls */}
        <div className="glass-card rounded-2xl border border-[#1A2540]/8 p-5 shadow-sm mb-8 grid md:grid-cols-3 gap-4">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3.5 py-2 text-sm rounded-xl border font-medium transition-all duration-200 ${
                  category === c
                    ? "bg-[#1A2540] text-white border-[#1A2540]"
                    : "bg-white text-[#1A2540]/70 border-[#1A2540]/15 hover:border-[#C9973A]/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search photos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-[#1A2540]/15 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 focus:border-[#C9973A] transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => openAt(idx)}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[#1A2540]/8 shadow-sm card-hover focus:outline-none focus:ring-2 focus:ring-[#C9973A]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-white font-semibold">{img.alt}</span>
              </div>
              <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-lg bg-black/40 text-white/80 backdrop-blur-sm font-medium">
                {img.category}
              </span>
            </button>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-16 text-[#1A2540]/40">
            <p>No photos match your search.</p>
          </div>
        )}

        <p className="mt-8 text-sm text-center text-[#1A2540]/40">
          More photos coming soon. For a virtual tour, feel free to{" "}
          <a href="tel:+919990917830" className="text-[#C9973A] font-medium hover:underline">call us</a>.
        </p>
      </section>

      {active >= 0 && (
        <Lightbox
          images={images}
          index={active}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}
