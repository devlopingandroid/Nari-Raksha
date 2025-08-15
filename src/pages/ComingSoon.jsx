import React from 'react';
import { Clock, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-12 h-12 text-dark-900" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-6">
            Coming <span className="text-primary-400">Soon</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're working hard to bring you this feature. Our team is dedicated to creating 
            the best possible experience for women's digital safety.
          </p>
        </div>

        <div className="bg-dark-800 rounded-xl p-8 border border-primary-600/20 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">What to Expect</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <p className="text-gray-300">Enhanced user experience with intuitive design</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <p className="text-gray-300">Advanced features for better protection</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <p className="text-gray-300">Seamless integration with existing services</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
              <p className="text-gray-300">Comprehensive support and resources</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            Get Support
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Stay updated on our progress</p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
