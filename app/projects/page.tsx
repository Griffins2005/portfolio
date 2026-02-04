"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Nestopia",
      category: ["fullstack", "blockchain"],
      tags: "Full-Stack • AI • Blockchain",
      description: "Engineered a full-stack rental housing platform matching renters with landlords through intelligent compatibility scoring algorithms that analyze 12+ weighted criteria including budget, location, amenities, and lifestyle preferences. Implemented JWT authentication, Google OAuth, machine learning-enhanced matching with collaborative filtering, and integrated FastAPI backend with React frontend, PostgreSQL database, and Celery background workers for daily match computations serving personalized property recommendations.",
      tech: ["React", "FastAPI", "PostgreSQL", "Celery", "ML"],
      links: [
        { label: "View Repository", url: "https://github.com/Griffins2005/Nestopia" }
      ]
    },
    {
      id: 2,
      title: "CF AI API Copilot",
      category: ["fullstack", "ai"],
      tags: "AI • Full-Stack • Edge Computing",
      description: "Built a Cloudflare-native AI assistant that ingests OpenAPI/Swagger specifications, leveraging Workers AI (Llama 3.3) with Durable Objects for persistent session memory to answer developer questions about APIs. Architected an edge-first solution featuring streaming spec ingestion, context-aware chat with digest summaries, favorite endpoints management, and a vanilla JavaScript Pages UI—delivering sub-100ms response times with zero-config deployment entirely on Cloudflare's global network.",
      tech: ["Cloudflare Workers", "Workers AI", "Durable Objects", "Llama 3.3", "Edge Computing"],
      links: [
        { label: "View Repository", url: "https://github.com/Griffins2005/cf-ai-api-copilot" }
      ]
    },
    {
      id: 3,
      title: "AI News Summarizer",
      category: ["ai"],
      tags: "AI • NLP • Machine Learning",
      description: "Created an advanced natural language processing application leveraging state-of-the-art transformer models (T5 and BART) from HuggingFace to automatically generate concise, accurate summaries of lengthy news articles while simultaneously detecting potential misinformation through sophisticated fake news classification algorithms, implementing Django REST framework for robust API endpoints, utilizing transfer learning and fine-tuning techniques to achieve 92% accuracy in fake news detection, and deploying the solution with SQLite database for efficient article storage and retrieval.",
      tech: ["Django", "HuggingFace", "T5/BART", "SQLite"],
      links: [
        { label: "View Repository", url: "https://github.com/Griffins2005/News-Summarizer" }
      ]
    },
    {
      id: 4,
      title: "Bank Marketing Analytics",
      category: ["datascience"],
      tags: "Data Science • Predictive Analytics",
      description: "Conducted comprehensive data science analysis on a massive dataset of over 40,000 banking customers to build sophisticated predictive models for targeted marketing campaign optimization, performing extensive exploratory data analysis (EDA) with advanced feature engineering, implementing multiple machine learning algorithms including Random Forest, Gradient Boosting, and Logistic Regression with rigorous hyperparameter tuning, achieving 89% prediction accuracy for customer subscription likelihood, and delivering actionable insights through compelling data visualizations with Matplotlib and Seaborn that directly informed strategic marketing decisions and increased campaign ROI by identifying high-value customer segments.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      links: [
        { label: "View Notebook", url: "https://github.com/Griffins2005/-Bank-Marketing-Campaign" }
      ]
    },
    {
      id: 5,
      title: "Trust-Based Product Analysis",
      category: ["datascience", "ai"],
      tags: "Data Science • Machine Learning • AI4ALL",
      description: "Collaborated with my 2D group at AI4ALL to build an ML-powered trust scoring system analyzing Amazon product data with 40K+ entries. Trained Random Forest and Gradient Boosting classifiers achieving 96.05% accuracy in predicting high-purchase products by quantifying trust signals including ratings, review counts, discount percentages, and seller badges. Engineered comprehensive preprocessing pipelines, performed feature importance analysis with SHAP explainability, and delivered actionable insights through data visualizations identifying Total Reviews, Product Rating, and Discounted Price as key purchase drivers.",
      tech: ["Python", "Scikit-learn", "SHAP", "Random Forest", "Pandas"],
      links: [
        { label: "View Repository", url: "https://github.com/Griffins2005/ai4all_02D" },
        { label: "Live Demo", url: "https://claude.ai/public/artifacts/9ced5d8d-c574-4e1f-82bb-7681433e2613" },
        { label: "Presentation", url: "https://docs.google.com/presentation/d/1KTfPGSjfi5jbWAycxnMIoeCZY5p_b5UXP6WmFLd6T6g/edit?usp=sharing" }
      ]
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "ai", label: "AI & ML" },
    { id: "datascience", label: "Data Science" },
    { id: "blockchain", label: "Blockchain" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b-2 border-gray-900 pb-4 mb-8 gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Projects
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Full-stack applications, ML models, and innovative solutions
            </p>
          </div>
          <div className="text-xs sm:text-sm text-gray-500">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </div>
        </div>

        {/* Filter Buttons - Creative Style */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                activeFilter === filter.id
                  ? "bg-gray-900 text-white scale-105"
                  : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-900"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-900 transition-all">
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Header */}
              <div className="mb-6 pt-2">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900 flex-shrink-0 ml-2 transition-colors" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-500">
                    {project.tags}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-100">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs border border-gray-200 hover:border-gray-900 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group/link"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
