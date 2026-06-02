import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/json-ld";
import { siteName } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Organizations",
  description: `Student organizations and campus leadership — ${siteName}: Cornell Blockchain Accelerator subteam, East Africans Together, CodePath, and community roles at Cornell University.`,
  path: "/orgs",
});

export default function OrgsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Organizations", path: "/orgs" },
        ]}
      />
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b-2 border-gray-900 pb-4 gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Organizations
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Community engagement and leadership roles
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Organizations - Top 3 with full details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-10 sm:mb-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
            ★
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Featured Organizations
          </h2>
        </div>
        <div className="space-y-16">
          {/* Cornell Blockchain Club */}
          <div className="border-l-2 border-gray-200 pl-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Cornell Blockchain Club</h3>
              <p className="text-gray-600">Cornell University | Ithaca, NY</p>
            </div>
            
            {/* Position 1: Member - Accelerator Subteam */}
            <div className="mb-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Member — Accelerator Subteam</p>
                  <p className="text-sm text-gray-500">Jan 2025 - Present</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Prepared for the club acccelerator for the next semester</span>
                </li>
              </ul>
            </div>

            {/* Position 2: Member - Subteam Engineering */}
            <div className="mb-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Member — Subteam Engineering</p>
                  <p className="text-sm text-gray-500">Aug 2025 - Dec 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Built and shipped blockchain projects with the engineering subteam, contributing to smart contract development and decentralized application prototypes</span>
                </li>
              </ul>
            </div>
            
            {/* Position 3: Explorer */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Explorer</p>
                  <p className="text-sm text-gray-500">Feb 2025 - Jul 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Demonstrated exceptional commitment and technical proficiency in blockchain technology, progressing to full member status within the engineering subteam</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CodePath */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">CodePath</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Student Fellow</p>
            <p className="text-gray-600 mb-1">Technical Interview Prep Program | Remote</p>
            <p className="text-sm text-gray-500 mb-4">Feb 2025 - May 2025</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Completed intensive Technical Interview Prep (TIP 101) program mastering data structures, algorithms, and problem-solving strategies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Strengthened Python proficiency through weekly LeetCode-style challenges, peer programming sessions, and mock technical interviews</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Collaborated with diverse cohort of students preparing for software engineering interviews at top tech companies</span>
              </li>
            </ul>
          </div>

          {/* Cornell East Africans Together Club */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cornell East Africans Together Club</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Treasurer</p>
            <p className="text-gray-600 mb-1">Cornell University | Ithaca, NY</p>
            <p className="text-sm text-gray-500 mb-4">2024 - Present</p>
            <p className="text-gray-600">
              Manage club finances, budget allocation, and fundraising initiatives while coordinating cultural showcases and mentorship programs celebrating East African heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Other Memberships - Simplified */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 border-t-2 border-gray-900">
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 font-bold">
            +5
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Additional Memberships
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "First Generation Student Union, Cornell",
            "National Society of Black Engineers, Cornell",
            "Underrepresented Minorities in Computing, Cornell",
            "Cornell Rotaract",
            "ColorStack"
          ].map((org, index) => (
            <div key={org} className="group p-6 border-l-4 border-gray-200 hover:border-gray-900 bg-white hover:bg-gray-50 transition-all">
              <div className="flex items-start space-x-4">
                <span className="text-sm font-mono text-gray-400 group-hover:text-gray-900 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {org}
                  </h3>
                  <p className="text-gray-600 text-sm">Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
