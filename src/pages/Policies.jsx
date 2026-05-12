import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
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

function PolicyItem({ icon: Icon, title, children, emoji }) {
  return (
    <div className="glass-card card-hover rounded-2xl p-5 border border-[#1A2540]/8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#C9973A]/10 shrink-0">
          <Icon className="h-6 w-6 text-[#C9973A]" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#1A2540] mb-2">{title}</h3>
          <div className="text-sm text-[#1A2540]/70 space-y-1.5">{children}</div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-[#1A2540]/8 last:border-0 transition-colors ${open ? "bg-[#C9973A]/3" : ""}`}>
      <button
        className="w-full flex items-center justify-between py-4 px-1 text-left gap-3"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <QuestionMarkCircleIcon className="h-5 w-5 text-[#C9973A] shrink-0" />
          <span className="font-semibold text-[#1A2540] text-sm">{q}</span>
        </span>
        <span
          className={`flex items-center justify-center w-7 h-7 rounded-full border border-[#C9973A]/30 text-[#C9973A] font-bold text-lg shrink-0 transition-transform duration-200 ${
            open ? "rotate-45 bg-[#C9973A] text-white border-[#C9973A]" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-4 px-1 text-sm text-[#1A2540]/70 leading-relaxed pl-9">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Policies() {
  return (
    <div className="bg-[#F9F7F2] text-[#1A2540]">
      {/* Header */}
      <section className="hero-gradient py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label">Rules & Info</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
            Policies & <span className="gold-text">FAQs</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Clear, transparent policies for a comfortable stay at Hotel Yuvraj Inn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        {/* Policies grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          <PolicyItem icon={ClockIcon} title="Check-in & Check-out">
            <p>• Standard check-in: 2:00 PM | Check-out: 11:00 AM</p>
            <p>• Early check-in / late check-out subject to availability and additional fee</p>
          </PolicyItem>

          <PolicyItem icon={IdentificationIcon} title="ID & Registration">
            <p>• Government-issued photo ID required for all adult guests at check-in</p>
            <p>• Local regulations may require guest registration details on arrival</p>
          </PolicyItem>

          <PolicyItem icon={CreditCardIcon} title="Payment & Currency">
            <p>• Payments in INR; cards, UPI, and cash accepted</p>
            <p>• Security deposit or advance may be required on select stays</p>
          </PolicyItem>

          <PolicyItem icon={ClipboardDocumentCheckIcon} title="Cancellation & Modifications">
            <p>• Flexible and advance purchase plans have different cancellation terms</p>
            <p>• Modifications are subject to availability and prevailing rates</p>
          </PolicyItem>

          <PolicyItem icon={NoSymbolIcon} title="Smoking & Alcohol">
            <p>• Smoking strictly not permitted in rooms or enclosed areas</p>
            <p>• Deep-cleaning fees may apply for violations</p>
          </PolicyItem>

          <PolicyItem icon={UserGroupIcon} title="Visitors & Noise">
            <p>• Registered guests only in rooms after 9:00 PM; quiet hours observed</p>
            <p>• Events, parties, or commercial shoots require prior written approval</p>
          </PolicyItem>

          <PolicyItem icon={BuildingOffice2Icon} title="Property Access">
            <p>• Ground floor access for common areas during posted hours</p>
            <p>• Follow safety instructions and staff guidance in shared spaces</p>
          </PolicyItem>

          <PolicyItem icon={BanknotesIcon} title="Taxes & Fees">
            <p>• Applicable government taxes are additional unless stated otherwise</p>
            <p>• Optional services are billed separately at the property</p>
          </PolicyItem>

          <PolicyItem icon={ShieldCheckIcon} title="Safety & Liability">
            <p>• Keep valuables secure; property not liable for unattended items</p>
            <p>• Report damage or maintenance issues immediately for assistance</p>
          </PolicyItem>

          <PolicyItem icon={NoSymbolIcon} title="Breakfast Policy">
            <p>• Breakfast is not included with stays</p>
            <p>• Nearby breakfast options can be suggested on request</p>
          </PolicyItem>
        </div>

        {/* FAQ */}
        <div className="mt-12 glass-card rounded-2xl p-7 border border-[#1A2540]/8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">❓</span>
            <h2 className="text-xl font-bold text-[#1A2540]">Frequently Asked Questions</h2>
          </div>
          <div>
            <FaqItem
              q="What documents are needed at check-in?"
              a="A valid government-issued photo ID for each adult guest. Local regulations may require additional registration details."
            />
            <FaqItem
              q="Is early check-in or late check-out available?"
              a="Often available with prior request and subject to availability; fees may apply based on the time window."
            />
            <FaqItem
              q="Do room rates include breakfast?"
              a="No — breakfast is not included. Our staff can recommend nearby breakfast spots if needed."
            />
            <FaqItem
              q="How do cancellations work?"
              a="Policies vary by rate plan. Flexible bookings allow cancellation within a window; advance purchase deals may be non-refundable."
            />
            <FaqItem
              q="Can visitors come to the room?"
              a="Visitors are generally not permitted in rooms after 9:00 PM. Please confirm at reception for special circumstances."
            />
            <FaqItem
              q="How can I get the best rate?"
              a="Use direct enquiry via the Offers page and share any promo code during your request to receive eligible adjustments."
            />
            <FaqItem
              q="Is parking or Wi-Fi available?"
              a="Free Wi-Fi is available in all rooms. Parking availability may vary; please confirm during enquiry for your dates."
            />
            <FaqItem
              q="How to contact for urgent queries?"
              a={
                <span>
                  Call{" "}
                  <a className="text-[#C9973A] font-semibold hover:underline" href="tel:+919990917830">
                    +91 99909 17830
                  </a>{" "}
                  or email{" "}
                  <a className="text-[#C9973A] font-semibold hover:underline" href="mailto:hotelyuvrajresidency27@gmail.com">
                    hotelyuvrajresidency27@gmail.com
                  </a>
                  .
                </span>
              }
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 hero-gradient rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-white">Questions about a specific date?</h3>
            <p className="text-white/60 text-sm mt-1">Share details for a precise quote — we respond quickly.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:+919990917830"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
            <Link to="/contact" className="gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold">
              Enquire <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
