import {
  WifiIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  SparklesIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  ClockIcon,
  SunIcon,
  NoSymbolIcon,
  UserGroupIcon,
  LockClosedIcon,
  FireIcon,
  BanknotesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "In-room essentials",
    items: [
      { icon: WifiIcon, label: "Free Wi‑Fi" },
      { icon: TvIcon, label: "TV (basic channels)" },
      { icon: DevicePhoneMobileIcon, label: "Charging points" },
      { icon: SunIcon, label: "AC / climate control" },
      { icon: SparklesIcon, label: "Daily housekeeping" },
      { icon: LockClosedIcon, label: "Private ensuite" },
    ],
  },
  {
    title: "Comfort & convenience",
    items: [
      { icon: HomeModernIcon, label: "Ground floor coverage" },
      { icon: BuildingOffice2Icon, label: "Terrace access" },
      { icon: ClipboardDocumentListIcon, label: "Simple policies" },
      { icon: ClockIcon, label: "Check‑in/out: posted on Policies page" },
      { icon: NoSymbolIcon, label: "Breakfast: No" },
    ],
  },
  {
    title: "Safety & access",
    items: [
      { icon: LockClosedIcon, label: "Secure entry" },
      { icon: FireIcon, label: "Basic fire safety" },
      { icon: MapPinIcon, label: "Central Sector‑117 location" },
    ],
  },
  {
    title: "On request (subject to availability)",
    items: [
      { icon: UserGroupIcon, label: "Extra pillow/linen" },
      { icon: BanknotesIcon, label: "Early check‑in/late check‑out (paid)" },
    ],
  },
];

function Amenity({ icon: Icon, label }) {
  return (
    <li className="flex items-center gap-3 p-3 rounded-lg border border-[#2F3A56]/10 bg-white">
      <Icon className="h-5 w-5 text-[#2F3A56]" />
      <span className="text-sm text-[#2F3A56]">{label}</span>
    </li>
  );
}

export default function Amenities() {
  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Amenities</h1>
          <p className="mt-2 text-[#2F3A56]/80">
            Essentials for a comfortable stay. Please note: Breakfast is not included.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {SECTIONS.map((section) => (
            <div key={section.title} className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <ul className="mt-4 grid gap-3">
                {section.items.map((it) => (
                  <Amenity key={it.label} icon={it.icon} label={it.label} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl p-5 border border-[#2F3A56]/10">
          <h3 className="font-semibold">House rules & timing</h3>
          <p className="mt-2 text-sm text-[#2F3A56]/80">
            Check‑in and check‑out timings, ID requirements, and cancellation policy are listed on the Policies page.
          </p>
          <div className="mt-4 flex gap-3">
            <Link to="/policies" className="rounded-md border border-[#2F3A56]/20 px-4 py-2 text-sm hover:bg-white">
              View Policies
            </Link>
            <Link to="/contact" className="rounded-md bg-[#C7A15C] px-4 py-2 text-sm text-white hover:opacity-90">
              Enquire / Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
