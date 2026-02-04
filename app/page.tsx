"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Minimalist with lots of whitespace */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="text-2xl">🇰🇪</span>
                <span>From Kenya to Cornell</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                Griffins Kiptanui<br />Lelgut Too
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Data Science • Full-Stack • AI • Blockchain
              </p>
              
              <p className="text-base text-gray-500">
                Information Science at Cornell '28
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/Griffins2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/griffins-kiptanui-374a1a277"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/K_Griffins8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all"
                aria-label="X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:gkl39@cornell.edu"
                className="p-3 border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Headshot */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl transform rotate-3"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/headshot.jpeg"
                  alt="Griffins Kiptanui Lelgut Too"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean and Minimal */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">About</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                I'm a sophomore at Cornell University studying Information Science, 
                with a passion for building accessible, data-driven solutions that 
                make a real impact.
              </p>
              <p>
                My work spans full-stack development, machine learning, and blockchain 
                technology. I believe in creating technology that serves people and 
                communities, grounded in ethical AI principles and human-centered design.
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Full-Stack Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Building responsive web applications with React, Next.js, Django, 
                and FastAPI. Focus on clean code and excellent user experience.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Data Science & ML</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing predictive models and analyzing data to drive insights. 
                Experienced with Python, scikit-learn, and responsible AI practices.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Blockchain</h3>
              <p className="text-gray-600 leading-relaxed">
                Exploring decentralized applications and smart contract development 
                with Solidity and Web3 technologies.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">UX/Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating accessible, inclusive digital experiences with Figma. 
                Committed to WCAG standards and user-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-8">
          <Link
            href="/experience"
            className="group p-8 border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:translate-x-1 transition-transform">
              Experience
            </h3>
            <p className="text-gray-600 mb-4">
              Professional roles at AI4ALL, Craiive, Cornell, and more.
            </p>
            <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-900">
              <span>View experience</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link
            href="/projects"
            className="group p-8 border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:translate-x-1 transition-transform">
              Projects
            </h3>
            <p className="text-gray-600 mb-4">
              Full-stack apps, ML models, and blockchain solutions.
            </p>
            <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-900">
              <span>View projects</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link
            href="/extracurriculars"
            className="group p-8 border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:translate-x-1 transition-transform">
              Extracurriculars
            </h3>
            <p className="text-gray-600 mb-4">
              Conferences, excursions, and activities I'm involved in.
            </p>
            <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-900">
              <span>View activities</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
