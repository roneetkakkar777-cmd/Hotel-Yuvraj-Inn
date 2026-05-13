import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  WifiIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  SparklesIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  ClockIcon,
  NoSymbolIcon,
  UserGroupIcon,
  LockClosedIcon,
  FireIcon,
  BanknotesIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const SECTIONS = [
  {
    title: "In-Room Essentials",
    emoji: "🛏️",
    items: [
      { icon: WifiIcon, label: "Free High-Speed Wi-Fi" },
      { icon: TvIcon, label: "TV with Cable Channels" },
      { icon: DevicePhoneMobileIcon, label: "Multiple Charging Points" },
      { icon: SparklesIcon, label: "AC / Climate Control" },
      { icon: SparklesIcon, label: "Daily Housekeeping" },
      { icon: LockClosedIcon, label: "Private Ensuite Bathroom" },
    ],
  },
  {
    title: "Comfort & Convenience",
    emoji: "✨",
    items: [
      { icon: HomeModernIcon, label: "Ground Floor Coverage" },
      { icon: BuildingOffice2Icon, label: "Common Areas Access" },
      { icon: ClipboardDocumentListIcon, label: "Simple & Clear Policies" },
      { icon: ClockIcon, label: "Check-in: 2 PM / Check-out: 11 AM" },
      { icon: NoSymbolIcon, label: "Breakfast: Not Included" },
    ],
  },
  {
    title: "Safety & Access",
    emoji: "🔒",
    items: [
      { icon: LockClosedIcon, label: "Secure Entry & Locks" },
      { icon: FireIcon, label: "Fire Safety Equipment" },
      { icon: MapPinIcon, label: "Central Indirapuram Location" },
    ],
  },
  {
    title: "On Request",
    emoji: "📋",
    items: [
      { icon: UserGroupIcon, label: "Extra Pillow / Linen" },
      { icon: BanknotesIcon, label: "Early Check-in / Late Check-out (paid)" },
    ],
  },
];

function Amenity({ icon: Icon, label }) {
  return (
    <li className="flex items-center gap-3 p-3 rounded-xl border border-[#1A2540]/8 bg-[#F9F7F2] hover:border-[#C9973A]/30 hover:bg-[#C9973A]/5 transition-all duration-200 group">
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#C9973A]/10 shrink-0 group-hover:bg-[#C9973A]/20 transition-colors">
        <Icon className="h-4 w-4 text-[#C9973A]" />
      </div>
      <span className="text-sm text-[#1A2540]/80 font-medium">{label}</span>
    </li>
  );
}

export default function Amenities() {
  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Our <span className="gold-text">Amenities</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Everything you need for a comfortable stay at Hotel Youvraj Inn, Indirapuram.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {SECTIONS.map((section, i) => (
            <div
              key={section.title}
              className={`glass-card rounded-2xl p-6 border border-[#1A2540]/8 shadow-sm animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{section.emoji}</span>
                <h2 className="text-lg font-bold text-[#1A2540]">{section.title}</h2>
              </div>
              <ul className="grid gap-2.5">
                {section.items.map((it) => (
                  <Amenity key={it.label} icon={it.icon} label={it.label} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* House rules note */}
        <div className="mt-8 glass-card rounded-2xl p-6 border border-[#C9973A]/20 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📋</span>
            <div>
              <h3 className="font-bold text-[#1A2540] mb-2">House Rules & Timing</h3>
              <p className="text-sm text-[#1A2540]/70 leading-relaxed">
                Check-in and check-out timings, ID requirements, and cancellation policy are listed on the Policies page. 
                Please review before your stay.
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Link to="/policies" className="outline-btn inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
                  View Policies
                </Link>
                <Link to="/contact" className="gold-btn inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
                  Enquire / Book <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
