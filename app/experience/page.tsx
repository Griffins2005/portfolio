import type { Metadata } from "next";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Internships, research, and coursework — ${siteName}: AI4ALL, Capital One, teaching, and technical skills at Cornell.`,
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: `Experience | ${siteName}`,
    description:
      "Professional experience, internships, and academic background in data science and software engineering.",
    url: "/experience",
  },
  twitter: {
    title: `Experience | ${siteName}`,
    description:
      "Roles at AI4ALL, Capital One, and Cornell — skills and impact.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
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
                  <p className="text-sm text-gray-500">Jan 2026 - Present</p>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cornell CIS</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Teaching Assistant — INFO 1300</p>
            <p className="text-gray-600 mb-1">Introduction to Web Programming | Ithaca, NY</p>
            <p className="text-sm text-gray-500 mb-4">Aug 2025 - Dec 2025</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Empower 110+ undergraduate students to master web development fundamentals including HTML5, CSS3, and JavaScript</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Lead weekly lab sessions, grade assignments with detailed feedback, and conduct one-on-one debugging sessions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Mentor students in problem-solving approaches and clean coding practices, significantly improving their technical proficiency</span>
              </li>
            </ul>
          </div>

          {/* Craiive */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <a href="https://craive.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                Craiive
              </a>
            </h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Full-Stack Intern</p>
            <p className="text-gray-600 mb-1">AI Food-Inventory Startup | Remote</p>
            <p className="text-sm text-gray-500 mb-4">Sep 2025 - Present</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Developed full-stack AI-powered food inventory application using Flutter, Dart, Firebase, and Python in fast-paced startup environment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Successfully integrated machine learning models into backend APIs and optimized schema design for scalability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Designed intuitive UX and implemented responsive frontend components, contributing to product-market fit validation</span>
              </li>
            </ul>
          </div>

          {/* Capital One */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Capital One</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Analyst Early Internship Program (AEIP) Summit</p>
            <p className="text-gray-600 mb-1">Virtual | McLean, VA</p>
            <p className="text-sm text-gray-500 mb-4">August 2025</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Competitively selected for Capital One's exclusive AEIP Summit — immersive two-day experience exploring the intersection of data, business strategy, and technology</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Engaged in intensive business case workshops, developed data-driven product recommendations, and networked with senior analysts and leadership</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Gained valuable insights into analytics-driven decision-making, customer-first product development, and Capital One's innovative culture</span>
              </li>
            </ul>
          </div>

          {/* Cornell AMRC */}
          <div className="border-l-2 border-gray-200 pl-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Cornell AMRC (Accessible Media Resource Center)</h3>
              <p className="text-gray-600">Student Disability Services | Ithaca, NY</p>
            </div>
            
            {/* Position 1: Project Coordinator */}
            <div className="mb-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Project Coordinator</p>
                  <p className="text-sm text-gray-500">May 2025 - Present</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Manage project workflows, cross-team communications, and quality control for 50+ courses per semester, ensuring 100% on-time delivery of accessible course materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Reduced turnaround time from 5 to 3 days through process optimization and workflow improvements</span>
                </li>
              </ul>
            </div>
            
            {/* Position 2: Document Conversion Specialist */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Document Conversion Specialist</p>
                  <p className="text-sm text-gray-500">Sep 2024 - May 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Converted PDF materials to accessible formats (Plain Text Word, PDF) compatible with assistive technology, ensuring accuracy and proper formatting for students with disabilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Power Learn Project */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Power Learn Project</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Full Stack Web Development</p>
            <p className="text-gray-600 mb-1">Nairobi, Kenya</p>
            <p className="text-sm text-gray-500 mb-4">Feb 2024 - Jun 2024</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Competed in 2 major hackathons, successfully building and presenting scalable, innovative web applications under tight time constraints</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Transformed technical solutions into profitable business ventures generating $4,000 in annual revenue, demonstrating entrepreneurial acumen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Mastered efficient Django backends and Dart frontends optimized for real-world deployment and user engagement</span>
              </li>
            </ul>
          </div>

          {/* DirectEd Development Foundation */}
          <div className="border-l-2 border-gray-200 pl-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">DirectEd Development Foundation</h3>
            <p className="text-lg font-medium text-gray-900 mb-1">Full Stack Web Development</p>
            <p className="text-gray-600 mb-1">Nairobi, Kenya</p>
            <p className="text-sm text-gray-500 mb-4">Apr 2023 - Aug 2023</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Completed an intensive 10-week full-stack web development boot camp utilizing the MERN stack, gaining a strong foundation in both front-end and back-end development methodologies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Developed a strong proficiency in key front-end technologies including HTML5, CSS, Tailwind CSS, and React.js, enabling the creation of dynamic, responsive, and user-friendly interfaces</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Gained practical proficiency in troubleshooting, identifying and resolving API integration errors, front-end rendering bugs, and database query issues utilizing debugging tools and systematic problem-solving methodologies</span>
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
              {["Python", "Java", "JavaScript", "TypeScript", "Dart", "OCaml", "HTML", "CSS", "SQL", "R", "Solidity"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-gray-200 hover:border-gray-900 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="p-8 bg-gray-900 text-white rounded-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Django", "FastAPI", "Flask", "React.js", "Next.js", "Node.js", "Flutter", "Cloudflare Workers", "Tailwind CSS", "Pandas", "NumPy", "scikit-learn", "SHAP", "HuggingFace", "Celery"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm border border-gray-700 hover:bg-gray-700 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="p-8 border-2 border-gray-900 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "MongoDB", "SQLite", "Redis", "Supabase", "Firebase"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200 hover:border-gray-900 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Languages */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-2xl border-2 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
            <p className="text-gray-700">Google Data Analytics Professional Certificate</p>
          </div>
          
          <div className="p-8 bg-white rounded-2xl border-2 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Spoken Languages</h3>
            <p className="text-gray-700">English • Swahili • Kalenjin</p>
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
            "Introductory Statistics",
            "Introductory Python Programming",
            "Calculus I",
            "Calculus II",
            "Design & Web Programming (HTML, CSS, JavaScript)",
            "Object-Oriented Programming and Data Structures using Java",
            "Introduction to Data Science using Python",
            "Data Structures and Functional Programming using OCaml",
            "Linear Algebra for Data Science",
            "Choices and Consequences in Computing"
          ].map((course, index) => (
            <div key={course} className="group p-6 border-l-4 border-gray-200 hover:border-gray-900 bg-white hover:bg-gray-50 transition-all">
              <div className="flex items-start space-x-4">
                <span className="text-sm font-mono text-gray-400 group-hover:text-gray-900 transition-colors">
                  {String(index + 1).padStart(2, '0')}
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
