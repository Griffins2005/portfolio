import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/json-ld";
import { siteName } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Experience",
  description: `Professional experience and internships — ${siteName}: LTSCT software engineering intern, CRAIIVE full-stack intern, AI4ALL, and Cornell teaching assistant.`,
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ]}
      />
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b-2 border-gray-900 pb-4 gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Experience
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Professional roles, technical skills, and coursework
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-3">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-10 sm:mb-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm sm:text-base">
            01
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Professional Experience
          </h2>
        </div>
        <div className="space-y-16">
          {/* LTSCT */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Larsen &amp; Toubro Semiconductor Technologies (LTSCT)
            </h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Software Engineering Intern</p>
            <p className="text-gray-600 mb-1">Bengaluru, India</p>
            <p className="text-sm text-gray-500 mb-4">June 2026 – August 2026</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Developed a plugin-based Python test automation framework that executed 500+ official NIST test vectors at 100% conformance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Built an AI debugging layer that automatically triaged every test failure and traced its root cause across the pipeline.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Projected a 70% reduction in engineer debugging time versus manual log inspection through automated AI-driven failure triage.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Automated extraction and parsing of test vectors across JSON, CSV, and TXT formats into standards-aligned validation reports.</span>
              </li>
            </ul>
          </div>

          {/* CRAIIVE */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <a href="https://craive.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                CRAIIVE
              </a>
            </h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Software Engineering Intern, Full-Stack</p>
            <p className="text-gray-600 mb-1">AI Food-Inventory Startup | Ithaca, NY</p>
            <p className="text-sm text-gray-500 mb-4">September 2025 – May 2026</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Integrated a Gemini API pipeline generating recipe suggestions from live inventory data across 3 production Flutter app screens.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Optimized Firebase schema and indexing strategy, improving query reliability and cutting latency in recipe-generation workflows.</span>
              </li>
            </ul>
          </div>

          {/* AI4ALL */}
          <div className="border-l-2 border-gray-200 pl-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">AI4ALL</h3>
              <p className="text-gray-600">Remote</p>
            </div>
            
            {/* Position 1: Accelerator */}
            <div className="mb-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Accelerator</p>
                  <p className="text-sm text-gray-500">Jan 2026 - Mar 2026</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Advancing through comprehensive 7-week AI industry career readiness training focused on internship preparation with AI-specific technical interview mastery</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Optimizing application materials including industry-ready resume, LinkedIn, and GitHub portfolio with targeted feedback from AI industry mentors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Participating in mock technical interviews to strengthen communication, problem-solving skills, and technical competency for competitive AI internship applications</span>
                </li>
              </ul>
            </div>
            
            {/* Position 2: AI Ignite Fellow */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">AI Ignite Fellow</p>
                  <p className="text-sm text-gray-500">Sep 2025 - Dec 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Collaborated with Group 2D to develop Trust-Based Product Analysis Model, a machine learning project analyzing Amazon product data to predict purchase volume achieving 96.05% accuracy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Completed intensive 13-week AI Technical Portfolio Project building human-centered solutions grounded in real-world needs and public good through nationwide student collaboration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Engaged in weekly technical workshops led by AI4ALL instructors covering advanced AI and machine learning concepts, industry panels with professionals, and peer mentorship</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Mastered responsible AI principles including fairness and bias mitigation, data privacy, AI safety and security, and transparency in model development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Teaching Assistant */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cornell Ann S. Bowers College of Computing &amp; Information Science</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Teaching Assistant — Intro to Web Development</p>
            <p className="text-gray-600 mb-1">Ithaca, NY</p>
            <p className="text-sm text-gray-500 mb-4">August 2025 – December 2025</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Led weekly lab sections for 40+ students covering HTML, CSS, and JavaScript; office-hour support lifted class average by 10%.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Co-designed grading rubrics and automated evaluation scripts with course staff, reducing assignment turnaround time by 30%.</span>
              </li>
            </ul>
          </div>

          {/* Cornell AMRC */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessible Media Resource Center, Student Disability Services</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Project Coordinator</p>
            <p className="text-gray-600 mb-1">Cornell University | Ithaca, NY</p>
            <p className="text-sm text-gray-500 mb-4">May 2025 – Present</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Managed project workflows, assignment scheduling, and quality-control proofreading, delivering accessible formats to students.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8 border-t-2 border-gray-900">
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold">
            02
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid with Creative Layout */}
        <div className="grid md:grid-cols-[1.2fr_1.5fr_1fr] gap-8 mb-16">
          {/* Languages */}
          <div className="p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "TypeScript", "JavaScript", "SQL", "Dart"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-gray-200 hover:border-gray-900 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gray-900 text-white rounded-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "FastAPI", "Django", "Flutter", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm border border-gray-700 hover:bg-gray-700 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 border-2 border-gray-900 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Developer Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Git", "Docker", "Linux", "CI/CD", "PostgreSQL", "MongoDB", "Firebase"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200 hover:border-gray-900 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["LangGraph", "React Query", "HuggingFace Transformers", "Pandas"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-gray-200 hover:border-gray-900 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coursework Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8 border-t border-gray-100">
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 font-bold">
            03
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Relevant Coursework
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Design & Web Programming",
            "Object-Oriented Programming and Data Structures",
            "Intro to Data Science",
            "Data Structures and Functional Programming",
            "Linear Algebra for Data Science",
          ].map((course, index) => (
            <div key={course} className="group p-6 border-l-4 border-gray-200 hover:border-gray-900 bg-white hover:bg-gray-50 transition-all">
              <div className="flex items-start space-x-4">
                <span className="text-sm font-mono text-gray-600 group-hover:text-gray-900 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{course}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
