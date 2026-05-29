"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Activity } from "@/lib/extracurriculars";

function gridClass(imageCount: number) {
  if (imageCount === 3) return "md:grid-cols-3 max-w-6xl";
  return "md:grid-cols-2 max-w-4xl";
}

export default function ExtracurricularCarousel({
  activities,
}: {
  activities: Activity[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activity = activities[currentSlide];

  const goToSlide = (index: number) => {
    startTransition(() => setCurrentSlide(index));
  };

  const nextSlide = () => {
    startTransition(() => setCurrentSlide((prev) => (prev + 1) % activities.length));
  };

  const prevSlide = () => {
    startTransition(() =>
      setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg">
        <div className="relative">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                {activity.title}
              </h2>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                <span>{activity.date}</span>
                <span>•</span>
                <span>{activity.location}</span>
              </div>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                {activity.imageDescription}
              </p>
            </div>

            <div
              className={`grid grid-cols-1 gap-4 mx-auto ${gridClass(activity.images.length)}`}
            >
              {activity.images.map((image, idx) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200"
                >
                  <Image
                    src={image}
                    alt={`${activity.title} - Photo ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {activities.length > 1 && (
            <div className="mt-10">
              <div className="flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-gray-50 border border-gray-200 hover:border-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Previous activity"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-900" />
                </button>

                <div className="flex gap-2">
                  {activities.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-gray-900 w-8"
                          : "bg-gray-300 w-2 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to activity ${index + 1}: ${item.title}`}
                      aria-current={index === currentSlide ? "true" : undefined}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-gray-50 border border-gray-200 hover:border-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Next activity"
                >
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                </button>
              </div>

              <div className="text-center mt-4 text-sm text-gray-500">
                {currentSlide + 1} / {activities.length}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
