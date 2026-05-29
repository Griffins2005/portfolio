import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
const exploreLinks = [
  {
    href: "/experience",
    title: "Experience",
    description: "Internships at AI4ALL, Capital One, and Cornell research roles.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Full-stack apps, ML models, and blockchain projects on GitHub.",
  },
  {
    href: "/live-desk",
    title: "Live Desk",
    description: "Real-time view of what I'm building and contributing on GitHub.",
  },
  {
    href: "/orgs",
    title: "Organizations",
    description: "Leadership in Cornell Blockchain, URMC, and campus communities.",
  },
  {
    href: "/extracurriculars",
    title: "Extracurriculars",
    description: "AfroTech, SMART Kenya, blockchain conferences, and campus life.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center space-x-2">
                <span className="text-lg sm:text-xl" aria-hidden="true">
                  🇰🇪
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  From Kenya to Cornell
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
                <span className="text-gray-900">Griffins</span>{" "}
                <span className="text-gray-400">Kiptanui</span>
                <br />
                <span className="text-gray-900">Lelgut Too</span>
              </h1>

              <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-full">
                  Data Science
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-full">
                  Full-Stack
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-full">
                  AI
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-full">
                  Blockchain
                </span>
              </div>

              <p className="text-base sm:text-lg text-gray-500 pt-2">
                Information Science at Cornell &apos;28 — building accessible,
                data-driven software with ethical AI and human-centered design.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-gray-500 tracking-wide uppercase">
                Get in Touch
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://github.com/Griffins2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-50 hover:bg-gray-900 hover:text-white transition-all"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/griffins-kiptanui-374a1a277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-50 hover:bg-gray-900 hover:text-white transition-all"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/K_Griffins8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-50 hover:bg-gray-900 hover:text-white transition-all"
                  aria-label="X profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:gkl39@cornell.edu"
                  className="p-3 rounded-full bg-gray-50 hover:bg-gray-900 hover:text-white transition-all"
                  aria-label="Email Griffins"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-yellow-50 rounded-full blur-3xl opacity-50"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -left-4 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-orange-50 rounded-full blur-3xl opacity-50"
                aria-hidden="true"
              />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl">
                <Image
                  src="/headshot.jpeg"
                  alt="Griffins Kiptanui Lelgut Too — Cornell Information Science student and software developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                About
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-gray-900 rounded-full" />
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                I&apos;m a sophomore at Cornell University studying Information
                Science, with a passion for building accessible, data-driven
                solutions that make a real impact.
              </p>
              <p>
                My work spans full-stack development, machine learning, and
                blockchain technology. I believe in creating technology that
                serves people and communities, grounded in ethical AI principles
                and human-centered design.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 mt-8 md:mt-0">
            <div className="p-6 sm:p-8 bg-gray-900 text-white rounded-2xl">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Full-Stack Development
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Building responsive web applications with React, Next.js, Django,
                and FastAPI. Focus on clean code and excellent user experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 sm:p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-colors">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Data Science &amp; ML
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Developing predictive models and analyzing data to drive
                  insights with Python and scikit-learn.
                </p>
              </div>

              <div className="p-6 sm:p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-colors">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Blockchain
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Exploring decentralized applications and smart contracts with
                  Solidity and Web3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="flex items-end justify-between border-b-2 border-gray-900 pb-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              Explore the portfolio
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Work, projects, and community involvement at Cornell and beyond.
            </p>
          </div>
        </div>
        <nav aria-label="Portfolio sections">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col justify-between p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                      {link.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900">
                    View {link.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between p-6 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold">Resume</h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    Download a PDF summary of experience, skills, and education.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  Open resume
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
