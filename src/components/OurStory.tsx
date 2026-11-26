import React from "react";
import { FaInstagram, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#faf8f4] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-emerald-700 font-semibold mb-3">
            The Story Behind Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Every Journey Has{" "}
            <span className="text-emerald-700">A Beginning</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-[450px] md:h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
                alt="Beautiful mountain travel landscape"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white shadow-xl rounded-2xl p-5">
              <p className="text-sm text-gray-500">Inspired by</p>
              <h3 className="text-xl font-bold text-emerald-800">
                A Traveller's Soul
              </h3>
            </div>
          </div>

          {/* Story Side */}
          <div className="space-y-7">
            <div>
              <p className="text-gray-600 leading-8 text-lg">
                What started with a love for travelling, exploring hidden places
                and sharing unforgettable moments slowly grew into something
                bigger than just a passion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                The Story of Njan Sanchari
              </h3>

              <p className="text-gray-600 leading-8">
                Through{" "}
                <span className="font-semibold text-emerald-800">
                  Njan Sanchari
                </span>
                , our founder began sharing the beauty of destinations, the
                excitement of new adventures and the stories that every journey
                leaves behind. A simple passion for travel became a way to
                inspire others to step outside, explore more and create their
                own memories.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                And Then Came Munnargram
              </h3>

              <p className="text-gray-600 leading-8">
                That passion eventually gave birth to{" "}
                <span className="font-semibold text-emerald-800">
                  Munnargram
                </span>{" "}
                — a vision to turn travel inspiration into real experiences. We
                believe travelling isn't just about visiting places; it's about
                the people you meet, the moments you live and the stories you
                carry back home.
              </p>
            </div>

            {/* Instagram Profile */}
            <a
              href="https://www.instagram.com/njan_.sanchari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-xl">
                <FaInstagram />
              </div>

              <div>
                <p className="text-sm text-gray-500">Follow our journey</p>
                <p className="font-bold text-gray-900">@njan_.sanchari</p>
              </div>

              <FaArrowRight className="ml-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* CTA */}
            <div className="pt-3">
              <a
                href="#packages"
                className="inline-flex items-center gap-3 bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-900 transition-colors"
              >
                Explore Our Journeys
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <FaMapMarkerAlt className="text-emerald-700 text-3xl mx-auto mb-5" />

          <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic">
            "We don't just plan trips. We help you collect moments, stories and
            memories worth a lifetime."
          </p>

          <p className="mt-6 text-emerald-800 font-semibold tracking-widest uppercase text-sm">
            — The Munnargram Story
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
