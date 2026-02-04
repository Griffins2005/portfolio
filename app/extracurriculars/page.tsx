"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ExtracurricularsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const activities = [
    {
      id: 1,
      title: "AfroTech Conference 2025",
      date: "November 2025",
      location: "Houston, TX",
      imageDescription: "At AfroTech with Cornell students from Underrepresented Minorities in Computing and Kenyans at AfroTech",
      images: ["/afrotech-1.png", "/afrotech-2.png"],
    },
    {
      id: 2,
      title: "Cornell Blockchain Conference",
      date: "April 2025",
      location: "Cornell Tech, Roosevelt Island, New York",
      imageDescription: "Cornell Blockchain conference at Cornell Tech campus",
      images: ["/blockchain-conf-1.jpg", "/blockchain-conf-2.jpg"],
    },
    {
      id: 3,
      title: "SMART Program",
      date: "January 2025",
      location: "Kenya",
      imageDescription: "Field visits and understanding the carbon market by talking to stakeholders and community members in Laikipia and Nairobi, Kenya with Student Multidisciplinary Applied Research Teams",
      images: ["/smart-1.jpg", "/smart-2.jpg", "/smart-3.jpg"],
    },
    {
      id: 4,
      title: "East Africans Students Together (EAST)",
      date: "Treasurer",
      location: "Cornell University",
      imageDescription: "Representing EAST at Black Life on the Hill (BLOTH) and AFCORNELL - field event organized by EAST",
      images: ["/east-1.jpg", "/east-2.jpg"],
    },
    {
      id: 5,
      title: "Red Bud Cooperative House",
      date: "Fall 2024",
      location: "Robert Treman State Park, Ithaca",
      imageDescription: "Mega camping trip with the Red Bud Cooperative house community",
      images: ["/redbud-1.jpg", "/redbud-2.jpg"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex items-end justify-between border-b-2 border-gray-900 pb-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Extracurriculars
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Conferences, excursions, and activities that shape my journey
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Activities Carousel */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Carousel Frame */}
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="relative">
            {/* Current Activity */}
            {activities.map((activity, index) => (
              <div key={activity.id} className={index === currentSlide ? "block" : "hidden"}>
                {/* Activity Header */}
                <div className="text-center mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                    <span>{activity.date}</span>
                    <span>•</span>
                    <span>{activity.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 max-w-2xl mx-auto">{activity.imageDescription}</p>
                </div>

                {/* Image Grid */}
                <div className={`grid grid-cols-1 gap-4 mx-auto ${
                  activity.images.length === 2 
                    ? 'md:grid-cols-2 max-w-4xl' 
                    : activity.images.length === 3 
                    ? 'md:grid-cols-3 max-w-6xl' 
                    : 'md:grid-cols-2 max-w-4xl'
                }`}>
                  {activity.images.map((image, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src={image}
                        alt={`${activity.title} - Photo ${idx + 1}`}
                        fill
                        className="object-cover"
                        priority={index === currentSlide && idx === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Carousel Navigation */}
            {activities.length > 1 && (
              <div className="mt-10">
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-full bg-gray-50 border border-gray-200 hover:border-gray-900 hover:bg-gray-100 transition-all"
                    aria-label="Previous activity"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-900" />
                  </button>
                  
                  <div className="flex gap-2">
                    {activities.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentSlide
                            ? "bg-gray-900 w-8"
                            : "bg-gray-300 w-2 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to activity ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-full bg-gray-50 border border-gray-200 hover:border-gray-900 hover:bg-gray-100 transition-all"
                    aria-label="Next activity"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-900" />
                  </button>
                </div>

                {/* Counter */}
                <div className="text-center mt-4 text-sm text-gray-500">
                  {currentSlide + 1} / {activities.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
