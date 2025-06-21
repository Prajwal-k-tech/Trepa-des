import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>

          {/* Copyright and Social */}
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-sm">
              © 2024 Trepa. All rights reserved.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="#twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
