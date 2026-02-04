"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ExtracurricularsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder data - you'll replace with actual content
  const activities = [
    {
      id: 1,
      title: "Conference / Event Name",
      description: "Description of the conference, what you learned, key takeaways...",
      image: "/placeholder.jpg", // Replace with actual image
      date: "Month Year",
      category: "Conference",
    },
    {
      id: 2,
      title: "Excursion / Trip Name",
      description: "Description of the excursion, activities, experiences...",
      image: "/placeholder.jpg",
      date: "Month Year",
      category: "Excursion",
    },
    // Add more activities...
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-b border-gray-100">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">
            Extracurriculars
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Conferences, excursions, and activities that have shaped my journey.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-8">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-3">
                      {activity.category}
                    </span>
                    <h2 className="text-3xl font-semibold mb-2">{activity.title}</h2>
                    <p className="text-sm text-white/80">{activity.date}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Description Below Carousel */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              {activities[currentSlide].title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {activities[currentSlide].description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-gray-900 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Posts Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-gray-100">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12">Conference Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Placeholder for embedded LinkedIn/social media posts */}
          <div className="border border-gray-200 rounded-xl p-8 min-h-[300px] flex items-center justify-center text-gray-400">
            <p>Embedded LinkedIn Post #1</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-8 min-h-[300px] flex items-center justify-center text-gray-400">
            <p>Embedded LinkedIn Post #2</p>
          </div>
        </div>
      </section>
    </div>
  );
}
