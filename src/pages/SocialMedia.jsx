import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function SocialMedia() {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      description: 'Connect with our community and stay updated on women\'s safety initiatives',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      description: 'Follow us for real-time updates and digital safety tips',
      color: 'text-sky-400',
      bgColor: 'bg-sky-400/10',
      borderColor: 'border-sky-400/20'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Visual stories of empowerment and digital safety awareness',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/20'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Professional network for cybersecurity and women\'s rights advocacy',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-dark-900" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-6">
            We're Working <span className="text-primary-400">On It</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our social media presence is currently under development. We're creating meaningful 
            content and building communities that truly support women's digital safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className={`${platform.bgColor} ${platform.borderColor} border rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105`}
            >
              <div className={`w-16 h-16 ${platform.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <platform.icon className={`w-8 h-8 ${platform.color}`} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{platform.name}</h3>
              <p className="text-gray-300 leading-relaxed">{platform.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-dark-800 rounded-xl p-8 border border-primary-600/20 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">What We're Building</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Educational content about digital safety</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Survivor stories and empowerment posts</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Live Q&A sessions with experts</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Community support groups</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Real-time safety alerts and tips</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Advocacy campaigns and initiatives</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-dark-900 text-lg font-semibold rounded-xl hover:bg-primary-500 transform hover:scale-105 transition-all shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/helpdesk"
            className="inline-flex items-center justify-center px-8 py-4 bg-dark-800 text-primary-400 text-lg font-semibold rounded-xl border-2 border-primary-600 hover:border-primary-500 hover:bg-dark-700 transform hover:scale-105 transition-all"
          >
            <Heart className="w-5 h-5 mr-2" />
            Get Support Now
          </Link>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">In the meantime, you can reach us directly</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:support@nariraksha.org"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              support@nariraksha.org
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="tel:+91-1800-XXX-HELP"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              +91-1800-XXX-HELP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
