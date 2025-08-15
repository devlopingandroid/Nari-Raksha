import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Import logo
import logo from '../assets/images/logo.png';

function Footer() {
  const socialLinks = [
    { name: 'Facebook', href: '/social-media', icon: Facebook },
    { name: 'Twitter', href: '/social-media', icon: Twitter },
    { name: 'Instagram', href: '/social-media', icon: Instagram },
    { name: 'LinkedIn', href: '/social-media', icon: Linkedin },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Legal Information', href: '/legal' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/helpdesk' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Report Issue', href: '/report' },
  ];

  return (
    <footer className="bg-dark-900 text-white border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={logo}
                alt="Nari Raksha Logo" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="text-xl font-heading font-bold">Nari Raksha</span>
                <p className="text-sm text-gray-400 -mt-1">Women's Digital Shield</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering women, protecting dignity, ensuring justice. Nari Raksha fights digital harassment to safeguard women's honor and security worldwide.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-primary-400" />
              <span>Built with care for women&apos;s safety</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/detect" className="text-gray-300 hover:text-primary-400 transition-colors">Detect Deepfake</Link></li>
              <li><Link to="/report" className="text-gray-300 hover:text-primary-400 transition-colors">Report Content</Link></li>
              <li><Link to="/helpdesk" className="text-gray-300 hover:text-primary-400 transition-colors">Women&apos;s Safety Hub</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">Blog & Resources</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@nariraksha.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91-1800-XXX-HELP</span>
              </div>
            </div>
          </div>

          {/* Languages & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-5 h-5 text-primary-400" />
              <select className="bg-dark-800 text-white border border-dark-600 rounded-md px-3 py-1 text-sm">
                <option>English</option>
                <option>हिंदी</option>
                <option>বাংলা</option>
                <option>தமிழ்</option>
              </select>
            </div>
            <h4 className="text-md font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-dark-800"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Nari Raksha. All rights reserved. Secured by Advanced Technology & Human Care.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;