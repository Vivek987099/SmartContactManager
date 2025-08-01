import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Smart Contact</h2>
          <p className="text-gray-400 text-sm">
            Manage your contacts smartly — CRUD, profile pics, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className="text-gray-300 text-sm space-y-2">
            <div className="flex items-center gap-2">
              
              <a href="mailto:vivekarya@gmail.com" className="hover:text-white">
                viveksinghfzd8868965223@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
             
              <a href="https://linkedin.com/in/your-link" className="hover:text-white">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
             
              <a href="https://github.com/your-github" className="hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Smart Contact. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
