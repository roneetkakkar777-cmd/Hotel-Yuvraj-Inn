import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-room.jpg"; // replace with real asset
import room1 from "../assets/images/room1.jpg"; // replace with real asset
import room2 from "../assets/images/room2.jpg"; // replace with real asset
import room3 from "../assets/images/room3.jpg"; // replace with real asset

export default function Home() {
  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Comfortable stays in Sector‑117, Noida
            </h1>
            <p className="mt-4 text-[#2F3A56]/80">
              17 double rooms, ground‑floor access to all areas, and a relaxing
              terrace. Breakfast not included. Book direct for clarity and quick
              confirmations.
            </p>
            <div className="mt-6 flex items-center justify-center md:justify-normal gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-[#C7A15C] px-5 py-3 text-white font-medium hover:opacity-90"
              >
                Book Now
              </Link>
              <Link
                to="/rooms"
                className="inline-flex items-center rounded-md border border-[#2F3A56]/20 px-5 py-3 text-[#2F3A56] hover:bg-white"
              >
                View Rooms
              </Link>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <li className="bg-white/70 border border-[#2F3A56]/10 rounded-md px-3 py-2">
                17 Double Rooms
              </li>
              <li className="bg-white/70 border border-[#2F3A56]/10 rounded-md px-3 py-2">
                Ground Floor Areas
              </li>
              <li className="bg-white/70 border border-[#2F3A56]/10 rounded-md px-3 py-2">
                Terrace Access
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-[#6B8F71]/10 rounded-3xl blur"></div>
            <img
              src={heroImg}
              alt="Mannat Residency room"
              className="relative w-full h-72 md:h-96 object-cover rounded-3xl shadow"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t border-[#2F3A56]/10">
        <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 sm:grid-cols-3">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold">Central Noida</h3>
            <p className="mt-2 text-sm text-[#2F3A56]/80">
              SB‑03, Sector‑117, Noida 201304 with easy connectivity for
              business and city access.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold">Direct Booking</h3>
            <p className="mt-2 text-sm text-[#2F3A56]/80">
              Quick confirmations by phone 9599616249 or email
              Mannathotel218@gmail.com.
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold">Simple Policies</h3>
            <p className="mt-2 text-sm text-[#2F3A56]/80">
              Clear check‑in/out, no‑breakfast notice, and straightforward
              cancellation info.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="border-t border-[#2F3A56]/10">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Featured Rooms</h2>
            <Link
              to="/rooms"
              className="text-[#2F3A56]/80 hover:text-[#2F3A56] text-sm"
            >
              See all
            </Link>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#2F3A56]/10">
              <img
                src={room1}
                alt="Double Room"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold">Standard Double</h3>
                <p className="mt-1 text-sm text-[#2F3A56]/80">
                  2 guests · Double bed · Ensuite
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[#C7A15C] font-medium">
                    From ₹ 1000/night
                  </span>
                  <Link
                    to="/contact"
                    className="text-sm text-[#2F3A56] hover:text-[#C7A15C]"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#2F3A56]/10">
              <img
                src={room2}
                alt="Double Room"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold">Deluxe Double</h3>
                <p className="mt-1 text-sm text-[#2F3A56]/80">
                  2 guests · Larger room · Ensuite
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[#C7A15C] font-medium">
                    From ₹ 1000/night
                  </span>
                  <Link
                    to="/contact"
                    className="text-sm text-[#2F3A56] hover:text-[#C7A15C]"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#2F3A56]/10">
              <img
                src={room3}
                alt="Double Room"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold">Terrace‑Side Double</h3>
                <p className="mt-1 text-sm text-[#2F3A56]/80">
                  2 guests · Near terrace · Ensuite
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[#C7A15C] font-medium">
                    From ₹ 1000/night
                  </span>
                  <Link
                    to="/contact"
                    className="text-sm text-[#2F3A56] hover:text-[#C7A15C]"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Location snippet */}
      <section className="border-t border-[#2F3A56]/10">
        <div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Location</h2>
            <p className="mt-2 text-[#2F3A56]/80">
              SB‑03, Sector‑117, Noida, Uttar Pradesh, 201304. Easy approach for
              commuters and business travelers.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                to="/location"
                className="inline-flex items-center rounded-md border border-[#2F3A56]/20 px-4 py-2 hover:bg-white"
              >
                Get directions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-[#C7A15C] px-4 py-2 text-white hover:opacity-90"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-[#2F3A56]/10 w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.833792768994!2d77.3919867752868!3d28.5747532756963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0036039a33%3A0xff7b4684e1420e51!2sMannat%20Residency%20Hotel!5e0!3m2!1sen!2sin!4v1759942929210!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-[#2F3A56]/10 bg-[#2F3A56] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            Ready to reserve a room? Call 9599616249 or send an enquiry.
          </p>
          <div className="flex gap-3">
            <a
              href="tel:+919599616249"
              className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15"
            >
              Call Now
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
