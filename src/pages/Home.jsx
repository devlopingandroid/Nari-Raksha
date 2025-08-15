import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Upload, AlertTriangle, Users, Eye, Zap, Shield } from 'lucide-react';

// Import woman image
import womenImg from '../assets/images/woman.png';
import newsImg from '../assets/images/news.png';

function Home() {
  const stats = [
    { value: '80%', label: 'of deepfake victims face social stigma', source: 'Research Study 2024' },
    { value: '94%', label: 'of deepfakes target women', source: 'Cyber Security Report' },
    { value: '10x', label: 'faster detection than manual review', source: 'Internal Testing' },
    { value: '150+', label: 'countries protected worldwide', source: 'Global Impact Report' },
  ];

  const features = [
    {
      title: 'Advanced Detection Technology',
      description: 'Sophisticated algorithms analyze facial patterns, lighting inconsistencies, and digital artifacts to identify manipulated content with 96% accuracy.',
    },
    {
      title: 'Instant Protection',
      description: 'Real-time scanning and automated takedown requests across major platforms to protect your digital identity within minutes.',
    },
    {
      title: 'Victim Support',
      description: 'Dedicated helpdesk with legal guidance, mental health resources, and step-by-step assistance for reporting and recovery.',
    },
    {
      title: 'Fast Response',
      description: 'Emergency reporting system with direct connections to cybercrime units and platform safety teams for rapid action.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-600 rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-500 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                Protect <span className="text-primary-400">Women's</span><br />
                Digital <span className="text-gradient">Honor</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced technology to combat digital harassment, protect women's dignity, and fight against non-consensual content. 
                Empowering women, safeguarding honor, ensuring justice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/detect"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-dark-900 text-lg font-semibold rounded-xl hover:bg-primary-500 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl golden-shimmer"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Check Now
                </Link>
                <Link
                  to="/report"
                  className="inline-flex items-center justify-center px-8 py-4 bg-dark-800 text-primary-400 text-lg font-semibold rounded-xl border-2 border-primary-600 hover:border-primary-500 hover:bg-dark-700 transform hover:scale-105 transition-all"
                >
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Report Fake
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative mosaic-effect">
                <img
                  src={womenImg}
                  alt="Strong Indian woman representing digital empowerment"
                  className="rounded-2xl shadow-2xl w-full animate-mosaic"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">{stat.value}</div>
                <div className="text-gray-200 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Understanding the <span className="text-primary-400">Digital Threat</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deepfakes are weaponized against women at an alarming rate, causing reputation damage, 
              mental health impacts, career destruction, and social harassment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src={newsImg}
                alt="Women's digital safety and protection concept"
                className="rounded-2xl shadow-xl w-full border border-primary-600/20 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent rounded-2xl"></div>
              {/* Overlay protection badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-primary-600/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-dark-900" />
                  <span className="text-sm font-medium text-dark-900">Protected</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Reputation Destruction</h3>
                  <p className="text-gray-300">Malicious deepfakes can destroy careers, relationships, and public image within hours of being shared online.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mental Health Impact</h3>
                  <p className="text-gray-300">Victims experience anxiety, depression, and trauma from having their digital identity violated and exploited.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Social Harassment</h3>
                  <p className="text-gray-300">Deepfakes enable cyberbullying, blackmail, and harassment campaigns targeting women and minorities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Powerful <span className="text-primary-400">Protection</span> Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced detection system combines multiple technologies to identify and eliminate deepfakes with unmatched accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105 animate-fade-in border border-primary-600/20"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Take Back Control?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of women who have protected their digital identity with Nari Raksha. 
            Start detecting and reporting deepfakes today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/detect"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-900 text-primary-400 text-lg font-semibold rounded-xl hover:bg-dark-800 transform hover:scale-105 transition-all shadow-lg"
            >
              <Upload className="w-5 h-5 mr-2" />
              Start Detection
            </Link>
            <Link
              to="/helpdesk"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-dark-900 text-lg font-semibold rounded-xl border-2 border-dark-900 hover:bg-dark-900 hover:text-primary-400 transform hover:scale-105 transition-all"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;