import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left: Name and Location */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-gray-900">Griffins Kiptanui Lelgut Too</p>
            <p className="text-sm text-gray-500">Ithaca, NY • Cornell University</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Griffins2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/griffins-kiptanui-374a1a277"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/K_Griffins8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="X"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:gkl39@cornell.edu"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
