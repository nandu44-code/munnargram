"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./animations/reveal";
const slides = [
  {
    title: "Where the mountains\nmeet the clouds.",
    subtitle: "MUNNAR · KERALA",
    description:
      "Lose yourself in endless tea gardens, misty valleys and the quiet magic of the mountains.",
    image:
      "https://images.unsplash.com/photo-1721195807543-5c2e056b5cb7?fm=jpg&q=85&w=2200",
  },
  {
    title: "Chase the sunrise.\nFind your wild.",
    subtitle: "KOLUKKUMALAI · MUNNAR",
    description:
      "Witness the golden sunrise above the clouds from the breathtaking heights of Kolukkumalai.",
    image: "https://www.dazzlingvillamunnar.com/images/kolukkumalai.jpg",
  },
  {
    title: "Take the trail\nless travelled.",
    subtitle: "MEESAPULIMALA · KERALA",
    description:
      "Walk through mountain grasslands, explore mist-covered trails and discover the beauty of the Western Ghats.",
    image:
      "https://img.indiahighlight.com/fit-in/1090x600/ih/uploads/1776267760.jpg",
  },
  {
    title: "A little escape.\nA lot of memories.",
    subtitle: "THE WESTERN GHATS · KERALA",
    description:
      "From hidden waterfalls to breathtaking viewpoints, Kerala is waiting to be explored.",
    image:
      "https://mountainsmoto.com/wp-content/uploads/2025/09/kolukkumalai-tea-estate-give-em-apic-1024x573.jpg",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative min-h-[720px] h-screen w-full overflow-hidden bg-[#26352A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 pb-20 pt-28 md:px-12 lg:px-20">
        <div className="max-w-[850px]">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D9F36A]" />

            <p className="text-xs font-semibold tracking-[0.3em] text-[#D9F36A] md:text-sm">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Heading */}
          <Reveal>
            <h1
              key={currentSlide.title}
              className="animate-hero-text whitespace-pre-line font-serif text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              {currentSlide.title}
            </h1>
          </Reveal>

          {/* Description */}
          <p
            key={currentSlide.description}
            className="mt-6 max-w-[520px] animate-hero-text text-base leading-7 text-white/80 md:text-lg md:leading-8"
          >
            {currentSlide.description}
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#packages"
              className="group inline-flex items-center gap-3 rounded-full bg-[#D9F36A] px-7 py-4 text-sm font-semibold text-[#26352A] transition-all duration-300 hover:bg-[#FF8A38] hover:shadow-lg hover:shadow-[#FF8A38]/20"
            >
              Explore Packages
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#D9F36A] hover:bg-white/10"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-6 right-6 z-20 flex items-end justify-between md:left-12 md:right-12 lg:left-20 lg:right-20">
        {/* Slide Progress */}
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.subtitle}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group flex h-8 items-center"
            >
              <span
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-12 bg-[#D9F36A] md:w-16"
                    : "w-6 bg-white/40 hover:bg-white/80 md:w-10"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Slide Counter & Arrows */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium tracking-widest text-white">
            <span className="text-[#D9F36A]">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-white/40">/</span>
            {String(slides.length).padStart(2, "0")}
          </span>

          <div className="flex gap-2">
            <button
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#D9F36A] hover:bg-[#D9F36A] hover:text-[#26352A]"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#D9F36A] hover:bg-[#D9F36A] hover:text-[#26352A]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
        <div
          className="h-full bg-[#D9F36A] transition-all duration-700"
          style={{
            width: `${((activeSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
