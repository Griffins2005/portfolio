import { BreadcrumbJsonLd } from "@/lib/json-ld";
import { activities } from "@/lib/extracurriculars";
import ExtracurricularCarousel from "./ExtracurricularCarousel";

export default function ExtracurricularsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Extracurriculars", path: "/extracurriculars" },
        ]}
      />

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

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="sr-only">Activity highlights</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
          {activities.map((item) => (
            <li key={item.id} className="p-4 bg-white border border-gray-200 rounded-xl">
              <strong className="text-gray-900">{item.title}</strong>
              <span className="block mt-1 text-gray-500">
                {item.date} · {item.location}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
