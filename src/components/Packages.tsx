"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Clock, MessageCircle } from "lucide-react";
import { packages } from "@/data/packages";
import type { TravelPackage } from "@/data/packages";
import Reveal from "./animations/reveal";

const WHATSAPP_NUMBER = "919895464357";

export default function PackageSection() {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(
    null,
  );

  const handleEnquiry = (pkg: TravelPackage) => {
    const message = `Hi Munnargram! 👋

I'm interested in the *${pkg.name}* package.

📍 Destination: ${pkg.location}
🗓 Duration: ${pkg.duration}
💰 Price: ₹${pkg.price.toLocaleString("en-IN")} per person

Could you please share more details about the trip, available dates and booking?`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Display up to 6 popular packages
  const popularPackages = packages.slice(0, 6);

  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#FAF9F2] px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D9F36A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#FF8A38]" />

              <p className="text-xs font-semibold tracking-[0.25em] text-[#68745D]">
                YOUR NEXT ADVENTURE
              </p>
            </div>

            <Reveal>
              <h2 className="font-serif text-4xl font-medium leading-tight text-[#26352A] md:text-5xl lg:text-6xl">
                Our Popular{" "}
                <span className="italic text-[#7C9639]">Journeys</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#74796D] md:text-base">
                Discover places that make you pause, experiences that make you
                smile, and journeys that stay with you forever.
              </p>
            </Reveal>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#26352A] transition-colors duration-300 hover:text-[#E87932]"
          >
            Plan your trip with us
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Packages Grid */}
        <Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {popularPackages.map((pkg, index) => (
              <article
                key={pkg.id}
                className="group overflow-hidden rounded-[24px] border border-[#26352A]/5 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(38,53,42,0.10)]"
              >
                {/* Image */}
                <div className="relative h-[270px] overflow-hidden">
                  <Image
                    src={pkg.coverImage}
                    alt={pkg.name}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  {/* Category */}
                  <div className="absolute left-5 top-5 rounded-full bg-[#D9F36A] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#26352A]">
                    {pkg.category}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium text-white">
                    <Clock size={14} />
                    {pkg.duration}
                  </div>

                  {/* Image hover icon */}
                  <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white/90 text-[#26352A] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 md:p-6">
                  {/* Location */}
                  <div className="mb-3 flex items-center gap-1.5 text-xs text-[#85897E]">
                    <MapPin size={14} className="text-[#E87932]" />
                    {pkg.location}
                  </div>

                  {/* Package Name */}
                  <h3 className="font-serif text-2xl font-medium text-[#26352A] transition-colors duration-300 group-hover:text-[#7C9639]">
                    {pkg.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-[#777C72]">
                    {pkg.shortDescription}
                  </p>

                  {/* Price */}
                  <div className="mt-5 flex items-end justify-between border-t border-[#26352A]/8 pt-4">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-[#8B9085]">
                        Starting from
                      </p>

                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="font-serif text-2xl font-semibold text-[#26352A]">
                          ₹{pkg.price.toLocaleString("en-IN")}
                        </span>

                        <span className="text-xs text-[#85897E]">/ person</span>
                      </div>
                    </div>

                    <span className="rounded-lg bg-[#F2F5E8] px-3 py-2 text-xs font-semibold text-[#71883C]">
                      Explore
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="rounded-full border border-[#26352A]/15 px-4 py-3 text-xs font-semibold text-[#26352A] transition-all duration-300 hover:border-[#D9F36A] hover:bg-[#D9F36A]/30"
                    >
                      View More Info
                    </button>

                    <button
                      onClick={() => handleEnquiry(pkg)}
                      className="group/btn flex items-center justify-center gap-1.5 rounded-full bg-[#26352A] px-3 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#E87932]"
                    >
                      <MessageCircle size={15} />
                      Enquire
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* View All Packages */}
        <div className="mt-14 flex justify-center">
          <a
            href="#packages"
            className="group inline-flex items-center gap-3 rounded-full border border-[#26352A]/15 px-7 py-4 text-sm font-semibold text-[#26352A] transition-all duration-300 hover:border-[#D9F36A] hover:bg-[#D9F36A]"
          >
            Explore All Journeys
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* Package Details Popup */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#FAF9F2]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64">
              <Image
                src={selectedPackage.coverImage}
                alt={selectedPackage.name}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#26352A] transition-colors hover:bg-[#D9F36A]"
                aria-label="Close package details"
              >
                ×
              </button>

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-semibold tracking-widest text-[#D9F36A]">
                  {selectedPackage.location.toUpperCase()}
                </p>

                <h3 className="mt-1 font-serif text-3xl text-white">
                  {selectedPackage.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-[#74796D]">
                  <Clock size={16} />
                  {selectedPackage.duration}
                </div>

                <div>
                  <p className="text-xs text-[#85897E]">Starting from</p>

                  <p className="font-serif text-2xl font-semibold text-[#26352A]">
                    ₹{selectedPackage.price.toLocaleString("en-IN")}
                    <span className="ml-1 text-sm font-normal text-[#85897E]">
                      / person
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-[#62685D]">
                {selectedPackage.description}
              </p>

              {/* Highlights */}
              <div className="mt-7">
                <h4 className="font-serif text-xl text-[#26352A]">
                  Trip Highlights
                </h4>

                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedPackage.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-[#62685D]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E87932]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="mt-7">
                <h4 className="font-serif text-xl text-[#26352A]">Itinerary</h4>

                <div className="mt-4 space-y-4">
                  {selectedPackage.itinerary.map((day) => (
                    <div key={day.day} className="rounded-2xl bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#E87932]">
                        Day {day.day}
                      </p>

                      <h5 className="mt-1 font-semibold text-[#26352A]">
                        {day.title}
                      </h5>

                      <p className="mt-2 text-sm leading-6 text-[#74796D]">
                        {day.description}
                      </p>

                      {day.activities && (
                        <ul className="mt-2 space-y-1">
                          {day.activities.map((activity) => (
                            <li
                              key={activity}
                              className="text-xs text-[#74796D]"
                            >
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="font-serif text-xl text-[#26352A]">
                    Included
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {selectedPackage.inclusions.map((item) => (
                      <li key={item} className="text-sm text-[#62685D]">
                        <span className="mr-2 text-[#71883C]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-[#26352A]">
                    Not Included
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {selectedPackage.exclusions.map((item) => (
                      <li key={item} className="text-sm text-[#62685D]">
                        <span className="mr-2 text-[#E87932]">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal WhatsApp CTA */}
              <button
                onClick={() => handleEnquiry(selectedPackage)}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#D9F36A] px-6 py-4 text-sm font-semibold text-[#26352A] transition-all duration-300 hover:bg-[#FF8A38]"
              >
                <MessageCircle size={18} />
                Enquire About This Package
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
