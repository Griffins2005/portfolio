"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Code, 
  Database, 
  Palette,
  ExternalLink,
  Briefcase,
  Award,
  Users,
  Heart,
  Globe,
  Twitter
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "coursework", "projects", "skills"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-gray-800 dark:text-gray-200"
            >
              GL
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "experience", "coursework", "projects", "skills"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-red-700 dark:hover:text-red-400 ${
                    activeSection === item ? "text-red-800 dark:text-red-500 font-semibold" : "text-gray-600 dark:text-gray-400"
                  }`}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero & About Section Combined */}
      <section id="home" className="min-h-screen py-32 bg-white dark:bg-gray-950 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[350px_1fr] gap-20 items-start">
            {/* Headshot - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px]">
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-red-700 dark:border-red-600 shadow-2xl">
        <Image
                    src="/headshot.jpeg"
                    alt="Griffins Kiptanui Lelgut Too"
                    fill
                    className="object-cover"
          priority
        />
                </div>
              </div>
            </motion.div>

            {/* Main Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                <span className="text-2xl">🇰🇪</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">From Kenya to Cornell</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                Griffins Kiptanui Lelgut Too
              </h1>
              
              <p className="text-xl sm:text-2xl text-red-800 dark:text-red-600 mb-6 font-medium">
                Data Science • Full-Stack • AI • Blockchain
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                Information Science at Cornell '28
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                Building accessible tech — from full-stack apps to ML models
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-20">
                <motion.a
                  href="https://github.com/Griffins2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-300 border border-gray-900 dark:border-gray-200"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/griffins-kiptanui-374a1a277"
            target="_blank"
            rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-red-700 dark:bg-red-600 text-white rounded-lg hover:bg-red-800 dark:hover:bg-red-700"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>

                <motion.a
                  href="https://x.com/K_Griffins8"
            target="_blank"
            rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-300 border border-gray-900 dark:border-gray-200"
                  aria-label="Visit X profile"
                >
                  <Twitter className="w-5 h-5" />
                  X
                </motion.a>
                
                <motion.a
                  href="mailto:gkl39@cornell.edu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                  aria-label="Send email"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Skills and Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            
            {/* Skills Cards */}
            <div className="grid grid-cols-2 gap-8 mb-20">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-red-50 dark:bg-gray-900 border border-red-200 dark:border-gray-800 rounded-lg"
              >
                <Code className="w-10 h-10 text-red-700 dark:text-red-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">Full-Stack Dev</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">React, Django, Next.js</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg"
              >
                <Database className="w-10 h-10 text-red-700 dark:text-red-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">Data Science</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Python, ML, Analytics</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg"
              >
                <Palette className="w-10 h-10 text-red-700 dark:text-red-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">UX/Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Figma, Accessibility</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-red-50 dark:bg-gray-900 border border-red-200 dark:border-gray-800 rounded-lg"
              >
                <Globe className="w-10 h-10 text-red-700 dark:text-red-600 mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">Blockchain</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Solidity, Web3.js</p>
              </motion.div>
            </div>
            
            {/* Values */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded">Accessibility</span>
              <span className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded">Community</span>
              <span className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded">Clean Code</span>
              <span className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded">Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Experience</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Combining technical excellence with meaningful community impact
            </p>
            
            {/* Professional Experience */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-red-800 dark:text-red-600 border-b border-gray-200 dark:border-gray-800 pb-2">
                Professional Experience
              </h3>
              <div className="space-y-6">
              {/* AI Ignite Fellow */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">AI4ALL</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Ignite Fellow</p>
                    <p className="text-gray-600 dark:text-gray-400">Remote</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Sep 2025 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Selected for prestigious AI Ignite Fellowship focused on ethical AI development and community-driven machine learning initiatives
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Collaborate with industry mentors and fellows to design AI solutions that prioritize fairness, interpretability, and measurable social impact
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Conduct applied research exploring responsible AI practices and data ethics in real-world applications
                  </li>
                </ul>
              </motion.div>

              {/* Teaching Assistant */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Cornell CIS</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Teaching Assistant — INFO 1300</p>
                    <p className="text-gray-600 dark:text-gray-400">Introduction to Web Programming | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Aug 2025 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Empower 110+ undergraduate students to master web development fundamentals including HTML5, CSS3, and JavaScript
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Lead weekly lab sessions, grade assignments with detailed feedback, and conduct one-on-one debugging sessions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Mentor students in problem-solving approaches and clean coding practices, significantly improving their technical proficiency
                  </li>
                </ul>
              </motion.div>

              {/* Craiive Intern */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Craiive</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Full-Stack Intern</p>
                    <p className="text-gray-600 dark:text-gray-400">AI Food-Inventory Startup | Remote</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Sep 2025 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Developed full-stack AI-powered food inventory application using Flutter, Dart, Firebase, and Python in fast-paced startup environment
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Successfully integrated machine learning models into backend APIs and optimized schema design for scalability
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Designed intuitive UX and implemented responsive frontend components, contributing to product-market fit validation
                  </li>
                </ul>
              </motion.div>

              {/* Capital One */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Capital One</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Analyst Early Internship Program (AEIP) Summit</p>
                    <p className="text-gray-600 dark:text-gray-400">Virtual | McLean, VA</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    August 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Competitively selected for Capital One's exclusive AEIP Summit — immersive two-day experience exploring the intersection of data, business strategy, and technology
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Engaged in intensive business case workshops, developed data-driven product recommendations, and networked with senior analysts and leadership
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Gained valuable insights into analytics-driven decision-making, customer-first product development, and Capital One's innovative culture
                  </li>
                </ul>
              </motion.div>

              {/* Cornell AMRC */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Cornell AMRC</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Document Conversion Specialist → Project Coordinator</p>
                    <p className="text-gray-600 dark:text-gray-400">Student Disability Services | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Sep 2024 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Promoted from Document Conversion Specialist to Project Coordinator, demonstrating strong leadership in academic accessibility operations
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Orchestrate project workflows, cross-team communications, and quality control for 50+ courses each semester, ensuring 100% on-time delivery
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Reduced average turnaround time from 5 days to 3 days through process optimization and Python automation scripts for content conversion
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Champion accessibility and inclusion, directly impacting students with disabilities' academic success at Cornell
                  </li>
                </ul>
              </motion.div>

              {/* Codsoft */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">CodSoft</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Web Development Intern</p>
                    <p className="text-gray-600 dark:text-gray-400">Remote</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Jan 2025 - Feb 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Architected and deployed full-featured web applications with advanced functionality including user authentication, payment gateway integration, and real-time features
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Demonstrated proficiency in full-stack development using React.js, Node.js, Express.js, MongoDB, and modern web technologies
                  </li>
                </ul>
              </motion.div>

              {/* Power Learn Project */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Power Learn Project</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Full Stack Web Development</p>
                    <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Feb 2024 - Jun 2024
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Competed in 2 major hackathons, successfully building and presenting scalable, innovative web applications under tight time constraints
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Transformed technical solutions into profitable business ventures generating $4,000 in annual revenue, demonstrating entrepreneurial acumen
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Mastered efficient Django backends and Dart frontends optimized for real-world deployment and user engagement
                  </li>
                </ul>
              </motion.div>
            </div>
            </div>

            {/* Community Engagement & Leadership */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-red-800 dark:text-red-600 border-b border-gray-200 dark:border-gray-800 pb-2">
                Community Engagement & Leadership
              </h3>
              <div className="space-y-6">

              {/* Cornell Blockchain Club */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Cornell Blockchain Club</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Explorer → Full Member</p>
                    <p className="text-gray-600 dark:text-gray-400">Cornell University | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    2024 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Progressed from Explorer to Full Member, demonstrating exceptional commitment and technical proficiency in blockchain technology
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Actively engage in cutting-edge research and development of decentralized applications, smart contract programming with Solidity, and blockchain protocol analysis
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Collaborate with talented peers on innovative blockchain projects, attend technical workshops with industry leaders, and contribute to Cornell's vibrant Web3 ecosystem
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Participate in hackathons and blockchain competitions, building practical solutions that explore the transformative potential of decentralized technologies
                  </li>
                </ul>
              </motion.div>

              {/* First Generation Student Union */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">First Generation Student Union</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Member</p>
                    <p className="text-gray-600 dark:text-gray-400">Cornell University | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    2024 - Present
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Active member supporting first-generation college students through peer mentorship, academic resources, and community building initiatives.
                </p>
              </motion.div>

              {/* Cornell East Africans Together Club */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Cornell East Africans Together Club</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Treasurer</p>
                    <p className="text-gray-600 dark:text-gray-400">Cornell University | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    2024 - Present
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage club finances, budget allocation, and fundraising initiatives while coordinating cultural showcases and mentorship programs celebrating East African heritage.
                </p>
              </motion.div>

              {/* NSBE */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">NSBE Cornell</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Member</p>
                    <p className="text-gray-600 dark:text-gray-400">National Society of Black Engineers | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    2024 - Present
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Active member engaging with the nation's largest student-managed organization focused on increasing Black engineers' success in STEM through professional development and community outreach.
                </p>
              </motion.div>

              {/* Underrepresented Minorities in Computing */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Underrepresented Minorities in Computing</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Member</p>
                    <p className="text-gray-600 dark:text-gray-400">Cornell University | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    2024 - Present
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Build community and foster belonging for underrepresented students in computing through inclusive programming and advocacy initiatives promoting diversity in tech.
                </p>
              </motion.div>

              {/* Cornell Rotaract */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">Cornell Rotaract</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Member</p>
                    <p className="text-gray-600 dark:text-gray-400">Cornell University | Ithaca, NY</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    2024 - Present
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Participate in service projects and community initiatives focused on creating positive change locally and globally while developing leadership skills.
                </p>
              </motion.div>

              {/* ColorStack */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">ColorStack</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Member</p>
                    <p className="text-gray-600 dark:text-gray-400">National Community Network | Remote</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Nov 2024 - Present
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Active member of the nation's largest community empowering Black and Latinx students in tech, connecting with 10,000+ members through hackathons and career development opportunities.
                </p>
              </motion.div>

              {/* CodePath */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-600">CodePath</h3>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Student Fellow</p>
                    <p className="text-gray-600 dark:text-gray-400">Technical Interview Prep Program | Remote</p>
                  </div>
                  <span className="text-sm bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-600 px-3 py-1 rounded border border-red-200 dark:border-red-800">
                    Feb 2025 - May 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Completed intensive Technical Interview Prep (TIP 101) program mastering data structures, algorithms, and problem-solving strategies
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Strengthened Python proficiency through weekly LeetCode-style challenges, peer programming sessions, and mock technical interviews
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-700 dark:text-red-600">•</span>
                    Collaborated with diverse cohort of students preparing for software engineering interviews at top tech companies
                  </li>
                </ul>
              </motion.div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Relevant Coursework Section */}
      <section id="coursework" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Relevant Coursework</h2>

            <div className="max-w-3xl mx-auto">
              <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Introductory Statistics
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Introduction to Computing with Python
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Calculus I
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Design & Web Programming
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Object-Oriented Programming in Java
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Calculus II
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Introduction to Data Science
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 dark:text-red-600">•</span>
                  Choices and Consequences in Computing
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Portfolio</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Dive into my portfolio to discover the diverse projects I've had the pleasure of working on. From concept to completion, each project demonstrates my commitment to excellence and my ability to bring ideas to life.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: "all", label: "ALL" },
                { id: "fullstack", label: "FULLSTACK" },
                { id: "ai", label: "AI" },
                { id: "datascience", label: "DATA SCIENCE" },
                { id: "blockchain", label: "BLOCKCHAIN" },
                { id: "uxui", label: "UX/UI" }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setProjectFilter(filter.id)}
                  className={`px-6 py-2 font-semibold transition-colors ${
                    projectFilter === filter.id
                      ? "text-red-700 dark:text-red-600 border-b-2 border-red-700 dark:border-red-600"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Nestopia */}
              {(projectFilter === "all" || projectFilter === "fullstack" || projectFilter === "blockchain") && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -3 }}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Nestopia</h3>
                    <ExternalLink className="w-5 h-5 text-red-700 dark:text-red-600" />
                  </div>
                  <p className="text-sm text-red-800 dark:text-red-600 font-semibold mb-3">
                    Blockchain • Full-Stack • AI
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Built a revolutionary decentralized rental marketplace exclusively for Cornell students, featuring an intelligent AI-powered recommendation engine that matches students with their ideal housing based on preferences, budget, and lifestyle, while leveraging blockchain technology with Solidity smart contracts and Web3.js integration to enable secure, transparent, tokenized payment transactions with zero intermediary fees and complete transaction immutability.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">React</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Django</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Supabase</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Solidity</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Web3.js</span>
                  </div>
                  <a 
                    href="https://github.com/Griffins2005/Nestopia"
          target="_blank"
          rel="noopener noreferrer"
                    className="text-red-800 dark:text-red-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    View Repository <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              )}

              {/* AI News Summarizer */}
              {(projectFilter === "all" || projectFilter === "ai") && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -3 }}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">AI News Summarizer</h3>
                    <ExternalLink className="w-5 h-5 text-red-700 dark:text-red-600" />
                  </div>
                  <p className="text-sm text-red-800 dark:text-red-600 font-semibold mb-3">
                    AI • NLP • Machine Learning
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Created an advanced natural language processing application leveraging state-of-the-art transformer models (T5 and BART) from HuggingFace to automatically generate concise, accurate summaries of lengthy news articles while simultaneously detecting potential misinformation through sophisticated fake news classification algorithms, implementing Django REST framework for robust API endpoints, utilizing transfer learning and fine-tuning techniques to achieve 92% accuracy in fake news detection, and deploying the solution with SQLite database for efficient article storage and retrieval.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Django</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">HuggingFace</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">T5/BART</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">SQLite</span>
                  </div>
                  <a 
                    href="https://github.com/Griffins2005/News-Summarizer"
          target="_blank"
          rel="noopener noreferrer"
                    className="text-red-800 dark:text-red-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    View Repository <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              )}

              {/* Bank Marketing Campaign */}
              {(projectFilter === "all" || projectFilter === "datascience") && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -3 }}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Bank Marketing Analytics</h3>
                    <ExternalLink className="w-5 h-5 text-red-700 dark:text-red-600" />
                  </div>
                  <p className="text-sm text-red-800 dark:text-red-600 font-semibold mb-3">
                    Data Science • Predictive Analytics
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Conducted comprehensive data science analysis on a massive dataset of over 40,000 banking customers to build sophisticated predictive models for targeted marketing campaign optimization, performing extensive exploratory data analysis (EDA) with advanced feature engineering, implementing multiple machine learning algorithms including Random Forest, Gradient Boosting, and Logistic Regression with rigorous hyperparameter tuning, achieving 89% prediction accuracy for customer subscription likelihood, and delivering actionable insights through compelling data visualizations with Matplotlib and Seaborn that directly informed strategic marketing decisions and increased campaign ROI by identifying high-value customer segments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Python</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Pandas</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Scikit-learn</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Matplotlib</span>
                  </div>
                  <a 
                    href="https://github.com/Griffins2005/-Bank-Marketing-Campaign"
          target="_blank"
          rel="noopener noreferrer"
                    className="text-red-800 dark:text-red-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    View Notebook <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              )}

              {/* Cornell CIS Website Redesign */}
              {(projectFilter === "all" || projectFilter === "uxui") && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -3 }}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Cornell CIS Redesign</h3>
                    <ExternalLink className="w-5 h-5 text-red-700 dark:text-red-600" />
                  </div>
                  <p className="text-sm text-red-800 dark:text-red-600 font-semibold mb-3">
                    UX/UI • Accessibility
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Led a comprehensive accessibility-first redesign of the Cornell College of Information Science website, conducting extensive user research with diverse student populations, creating detailed personas and user journey maps, implementing WCAG 2.1 AAA compliance standards throughout the design, utilizing Figma for high-fidelity prototypes and interactive mockups, rigorously testing color contrast ratios and keyboard navigation patterns using Stark accessibility toolkit, implementing Tailwind CSS for responsive design across all device sizes, and delivering a modern, inclusive digital experience that improved site usability scores by 45% while ensuring equal access for users with disabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Figma</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Tailwind</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Stark</span>
                  </div>
                  <p className="text-red-800 dark:text-red-600 flex items-center gap-1 font-medium">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </p>
                </motion.div>
              )}

              {/* Ithaca Apple Harvest */}
              {(projectFilter === "all" || projectFilter === "uxui") && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -3 }}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Apple Harvest Festival</h3>
                    <ExternalLink className="w-5 h-5 text-red-700 dark:text-red-600" />
                  </div>
                  <p className="text-sm text-red-800 dark:text-red-600 font-semibold mb-3">
                    UX/UI • Mobile-First
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Designed and developed a stunning mobile-first responsive website for Ithaca's beloved Apple Harvest Festival, prioritizing optimal mobile user experience through touch-friendly interfaces and streamlined navigation, implementing progressive web app principles for fast loading and offline capabilities, creating cohesive visual design in Figma that captures the festival's warm community atmosphere, hand-coding semantic HTML5 and modern CSS with Tailwind utility classes for pixel-perfect implementation, optimizing performance to achieve 98+ Google Lighthouse scores across all categories (Performance, Accessibility, Best Practices, SEO), and delivering an engaging digital platform that significantly enhanced festival attendee experience and information access.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Figma</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">HTML/CSS</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Tailwind</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-800">Lighthouse</span>
                  </div>
                  <p className="text-red-800 dark:text-red-600 flex items-center gap-1 font-medium">
                    Visit Prototype <ExternalLink className="w-4 h-4" />
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Languages */}
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-600">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "JavaScript", "TypeScript", "Dart", "HTML", "CSS", "SQL", "R", "Solidity"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-600 rounded border border-red-200 dark:border-red-800 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-600">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {["Django", "Flask", "React.js", "Next.js", "Node.js", "Flutter", "Tailwind CSS", "Pandas", "NumPy", "scikit-learn", "HuggingFace"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-600 rounded border border-red-200 dark:border-red-800 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-600">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MongoDB", "SQLite", "Supabase", "Firebase"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-600 rounded border border-red-200 dark:border-red-800 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-600">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Docker", "Vercel", "Figma", "Notion", "VS Code", "Jupyter"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-600 rounded border border-red-200 dark:border-red-800 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-600">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {["Data Science", "Machine Learning", "Full-Stack Dev", "Blockchain", "API Design", "UI/UX"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-600 rounded border border-red-200 dark:border-red-800 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-600">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Teamwork", "Agile", "Communication", "Problem-Solving"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-600 rounded border border-red-200 dark:border-red-800 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">🏆 Certifications</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">Google Data Analytics Professional Certificate</p>
              </div>
              
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">🌍 Languages</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">English • Swahili • Kalenjin</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <span>•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ithaca, NY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
