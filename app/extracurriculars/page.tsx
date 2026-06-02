import { activities } from "@/lib/extracurriculars";
import ExtracurricularCarousel from "./ExtracurricularCarousel";

export default function ExtracurricularsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex items-end justify-between border-b-2 border-gray-900 pb-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Extracurriculars
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Conferences, excursions, and activities that shape my journey at Cornell
              and beyond — AfroTech, blockchain events, SMART Kenya, and student
              leadership.
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-3" aria-hidden="true">
            <div className="w-3 h-3 bg-gray-900 rounded-full" />
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
            <div className="w-3 h-3 bg-gray-200 rounded-full" />
          </div>
        </div>
      </section>

      <ExtracurricularCarousel activities={activities} />
    </div>
  );
}
