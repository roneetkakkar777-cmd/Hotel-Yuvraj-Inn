import { useEffect, useMemo, useState } from "react";

// Replace with real asset imports or URLs
import heroImg from "../assets/images/hero-room.jpg";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";

const RAW_IMAGES = [
  { id: 1, src: heroImg, alt: "Hero room", category: "Rooms" },
  { id: 2, src: room1, alt: "Standard Double", category: "Rooms" },
  { id: 3, src: room2, alt: "Deluxe Double", category: "Rooms" },
  { id: 4, src: room3, alt: "Terrace‑side Double", category: "Rooms" },
  // Add bathrooms, lobby, corridor, terrace, exterior as you collect photos
];

const CATEGORIES = ["All", "Rooms", "Bathrooms", "Lobby", "Corridors", "Terrace", "Exterior"];

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
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl"
      >
        ×
      </button>
      <div className="h-full w-full grid place-items-center px-4">
        <div className="relative max-w-5xl w-full">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full max-h-[80vh] object-contain rounded-xl shadow"
          />
          <div className="mt-3 flex items-center justify-between text-white/80 text-sm px-1">
            <span>{img.alt}</span>
            <span>
              {index + 1} / {images.length}
            </span>
          </div>
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 text-white/90 hover:text-white"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 text-white/90 hover:text-white"
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
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Gallery</h1>
          <p className="mt-2 text-[#2F3A56]/80">
            Browse rooms, terrace, and shared spaces. Click any image to view full size.
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white border border-[#2F3A56]/10 rounded-xl p-4 grid md:grid-cols-3 gap-3">
          <div className="flex gap-2 flex-wrap">
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
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search e.g., Deluxe, Terrace, Bathroom"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-[#2F3A56]/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A15C]/40"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => openAt(idx)}
              className="group relative overflow-hidden rounded-xl bg-white border border-[#2F3A56]/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              <span className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-white/80 text-[#2F3A56]">
                {img.category}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#2F3A56]/60">
          Tip: Use landscape images for rooms and terrace for better grid balance.
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
