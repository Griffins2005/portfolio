import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { email, socialUrls } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm font-medium text-gray-900">
              Griffins Kiptanui Lelgut Too
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Ithaca, NY · Cornell University · Information Science
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={socialUrls.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="X"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
