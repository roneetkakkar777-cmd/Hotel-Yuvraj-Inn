import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2F3A56] text-[#F7F6F3]">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold">Mannat Residency Hotel</h4>
          <p className="text-sm mt-2">
            SB-03, Sector-117, Noida, Uttar Pradesh 201304
          </p>
          <p className="text-sm">Phone: 9599616249</p>
          <p className="text-sm">Email: Mannathotel218@gmail.com</p>
        </div>
        <div className="text-sm grid">
          <Link to="/about">About</Link>
          <Link to="/policies">Policies & FAQs</Link>
          <Link to="/nearby">Nearby</Link>
        </div>
        <div className="text-sm">
          <p>Ground floor areas & terrace</p>
          <p>17 double rooms · Breakfast: No</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Mannat Residency. All rights reserved.
      </div>
    </footer>
  );
}
