import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CreditCardIcon,
  NoSymbolIcon,
  IdentificationIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

function PolicyItem({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-[#2F3A56]/10">
      <div className="flex items-start gap-3">
        <Icon className="h-6 w-6 text-[#C7A15C] shrink-0" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <div className="mt-2 text-sm text-[#2F3A56]/80">{children}</div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#2F3A56]/10">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <QuestionMarkCircleIcon className="h-5 w-5 text-[#C7A15C]" />
          <span className="font-medium">{q}</span>
        </span>
        <span className="text-[#2F3A56]/60">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pb-4 text-sm text-[#2F3A56]/80">{a}</div>}
    </div>
  );
}

export default function Policies() {
  return (
    <div className="bg-[#F7F6F3] text-[#2F3A56]">
      <section className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Policies & FAQs</h1>
          <p className="mt-2 text-[#2F3A56]/80">
            Clear, simple rules for a comfortable stay. For any questions, reach out directly.
          </p>
        </header>

        {/* Policies grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          <PolicyItem icon={ClockIcon} title="Check‑in & Check‑out">
            <ul className="list-disc ml-5 space-y-1">
              <li>Standard check‑in: 2:00 PM; check‑out: 11:00 AM.</li>
              <li>Early check‑in/late check‑out subject to availability and an additional fee.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={IdentificationIcon} title="ID & Registration">
            <ul className="list-disc ml-5 space-y-1">
              <li>Government‑issued photo ID required for all adult guests at check‑in.</li>
              <li>Local regulations may require guest registration details during arrival.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={CreditCardIcon} title="Payment & Currency">
            <ul className="list-disc ml-5 space-y-1">
              <li>Payments in INR; common cards and UPI/cash accepted where available.</li>
              <li>Security deposit or advance may be requested on select stays or busy dates.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={ClipboardDocumentCheckIcon} title="Cancellation & Modifications">
            <ul className="list-disc ml-5 space-y-1">
              <li>Flexible and advance purchase plans may have different cancellation terms.</li>
              <li>Modifications are subject to availability and prevailing rates at the time of change.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={NoSymbolIcon} title="Smoking & Alcohol">
            <ul className="list-disc ml-5 space-y-1">
              <li>Smoking is not permitted in rooms or enclosed areas; designated areas only if provided.</li>
              <li>Deep‑cleaning fees may apply for violations; follow local laws for alcohol consumption.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={UserGroupIcon} title="Visitors & Noise">
            <ul className="list-disc ml-5 space-y-1">
              <li>Registered guests only in rooms after 9:00 PM; please maintain quiet hours.</li>
              <li>Events, parties, or commercial shoots require prior written approval.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={BuildingOffice2Icon} title="Property Access">
            <ul className="list-disc ml-5 space-y-1">
              <li>Ground floor access for common areas; terrace access available during posted hours.</li>
              <li>Follow safety instructions and staff guidance in shared spaces.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={BanknotesIcon} title="Taxes & Fees">
            <ul className="list-disc ml-5 space-y-1">
              <li>Applicable government taxes are additional unless stated otherwise.</li>
              <li>Optional services and add‑ons are billed separately at the property.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={ShieldCheckIcon} title="Safety & Liability">
            <ul className="list-disc ml-5 space-y-1">
              <li>Keep valuables secure; the property is not liable for unattended items.</li>
              <li>Report any damage or maintenance issues immediately for assistance.</li>
            </ul>
          </PolicyItem>

          <PolicyItem icon={NoSymbolIcon} title="Breakfast Policy">
            <ul className="list-disc ml-5 space-y-1">
              <li>Breakfast is not included with stays.</li>
              <li>Nearby breakfast options can be suggested upon request.</li>
            </ul>
          </PolicyItem>
        </div>

        {/* FAQ */}
        <div className="mt-10 bg-white rounded-xl p-6 border border-[#2F3A56]/10">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4">
            <FaqItem
              q="What documents are needed at check‑in?"
              a="A valid government‑issued photo ID for each adult guest. Local regulations may require additional registration details."
            />
            <FaqItem
              q="Is early check‑in or late check‑out available?"
              a="Often available with prior request and subject to availability; fees may apply based on the time window."
            />
            <FaqItem
              q="Do room rates include breakfast?"
              a="No—breakfast is not included. Staff can recommend nearby breakfast spots if needed."
            />
            <FaqItem
              q="How do cancellations work?"
              a="Policies vary by rate plan and date. Flexible bookings allow cancellation within a window; advance purchase deals may be non‑refundable."
            />
            <FaqItem
              q="Can visitors come to the room?"
              a="Visitors are generally not permitted in rooms after 9:00 PM. Please confirm at reception for any special circumstances."
            />
            <FaqItem
              q="How can the best rate be obtained?"
              a="Use direct enquiry via the Offers page and share any promo code during the request to receive eligible adjustments."
            />
            <FaqItem
              q="Is parking or Wi‑Fi available?"
              a="Wi‑Fi is available. Parking availability may vary; confirm during enquiry for the dates of stay."
            />
            <FaqItem
              q="How to contact for urgent queries?"
              a={
                <span>
                  Call <a className="underline" href="tel:+919599616249">+91 95996 16249</a> or email{" "}
                  <a className="underline" href="mailto:Mannathotel218@gmail.com">Mannathotel218@gmail.com</a>.
                </span>
              }
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-[#2F3A56] text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Questions about a specific date? Share details for a precise quote.</p>
          <div className="flex gap-3">
            <a href="tel:+919599616249" className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15">
              Call Now
            </a>
            <Link to="/contact" className="rounded-md bg-[#C7A15C] px-4 py-2 text-white hover:opacity-90">
              Enquire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
