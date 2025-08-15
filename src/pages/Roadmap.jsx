import React from 'react';
import { CheckCircle, Clock, Zap, Globe, Shield, Users, Brain, Smartphone } from 'lucide-react';

function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & Core Detection",
      status: "completed",
      timeline: "Q1 2024",
      description: "Established core deepfake detection technology with advanced algorithms",
      features: [
        "Basic deepfake detection engine",
        "Web platform launch",
        "User registration system",
        "Initial reporting mechanism"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Enhanced Detection & Support",
      status: "completed",
      timeline: "Q2 2024",
      description: "Improved accuracy and added comprehensive victim support services",
      features: [
        "96% detection accuracy achieved",
        "Victim support helpdesk",
        "Legal guidance resources",
        "Mental health support integration"
      ]
    },
    {
      phase: "Phase 3",
      title: "Global Expansion & Partnerships",
      status: "completed",
      timeline: "Q3-Q4 2024",
      description: "Expanded services globally and established key partnerships",
      features: [
        "150+ countries coverage",
        "Law enforcement partnerships",
        "Multi-language support",
        "24/7 emergency response"
      ]
    },
    {
      phase: "Phase 4",
      title: "Advanced AI & Real-time Protection",
      status: "in-progress",
      timeline: "Q1 2025",
      description: "Next-generation AI models and real-time scanning capabilities",
      features: [
        "Real-time social media scanning",
        "Advanced neural network models",
        "Automated takedown requests",
        "Proactive threat detection"
      ]
    },
    {
      phase: "Phase 5",
      title: "Mobile Apps & Browser Extensions",
      status: "planned",
      timeline: "Q2 2025",
      description: "Mobile applications and browser extensions for comprehensive protection",
      features: [
        "iOS and Android mobile apps",
        "Chrome and Firefox extensions",
        "Offline detection capabilities",
        "Push notification alerts"
      ]
    },
    {
      phase: "Phase 6",
      title: "Community Platform & Education",
      status: "planned",
      timeline: "Q3 2025",
      description: "Building a community platform for survivors and educational resources",
      features: [
        "Survivor community forum",
        "Educational content library",
        "Peer support networks",
        "Awareness campaigns"
      ]
    },
    {
      phase: "Phase 7",
      title: "Global Justice Network",
      status: "planned",
      timeline: "Q4 2025",
      description: "Comprehensive legal network and automated justice mechanisms",
      features: [
        "Global legal partner network",
        "Automated evidence collection",
        "Cross-border case tracking",
        "Justice outcome monitoring"
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'in-progress':
        return <Zap className="w-6 h-6 text-primary-400" />;
      case 'planned':
        return <Clock className="w-6 h-6 text-gray-400" />;
      default:
        return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-green-400 bg-green-400/10';
      case 'in-progress':
        return 'border-primary-400 bg-primary-400/10';
      case 'planned':
        return 'border-gray-400 bg-gray-400/10';
      default:
        return 'border-gray-400 bg-gray-400/10';
    }
  };

  const futureVision = [
    {
      icon: Brain,
      title: "AI-Powered Prevention",
      description: "Predictive algorithms that prevent deepfake creation before it happens"
    },
    {
      icon: Globe,
      title: "Global Legal Framework",
      description: "Unified international laws and enforcement mechanisms for digital harassment"
    },
    {
      icon: Shield,
      title: "Digital Identity Protection",
      description: "Comprehensive digital identity verification and protection systems"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Empowered communities of survivors leading the fight against digital abuse"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading font-bold mb-6">
              Our <span className="text-primary-400">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Charting the path to a safer digital world for women. See how we're evolving our technology 
              and expanding our impact to protect women's dignity worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-600"></div>
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 ${getStatusColor(item.status)}`}>
                    {getStatusIcon(item.status)}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-dark-900 rounded-xl p-8 border border-primary-600/20 hover:border-primary-600/40 transition-colors">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <div className="text-sm text-primary-400 font-medium mb-1">{item.phase}</div>
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <div className="text-sm text-gray-400">{item.timeline}</div>
                        </div>
                        <div className={`mt-4 lg:mt-0 px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                          item.status === 'in-progress' ? 'bg-primary-400/20 text-primary-400' :
                          'bg-gray-400/20 text-gray-400'
                        }`}>
                          {item.status === 'completed' ? 'Completed' :
                           item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Future <span className="text-primary-400">Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Looking beyond our current roadmap, here's our vision for the future of women's digital safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureVision.map((vision, index) => (
              <div
                key={index}
                className="bg-dark-800 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105 border border-primary-600/20"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                  <vision.icon className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{vision.title}</h3>
                <p className="text-gray-300 leading-relaxed">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              2025 <span className="text-primary-400">Goals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ambitious targets for making the digital world safer for women everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-400 mb-4">1M+</div>
              <div className="text-xl font-semibold text-white mb-2">Women Protected</div>
              <div className="text-gray-300">Expanding our reach to protect over one million women globally</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-400 mb-4">99%</div>
              <div className="text-xl font-semibold text-white mb-2">Detection Accuracy</div>
              <div className="text-gray-300">Achieving near-perfect accuracy in deepfake detection</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-400 mb-4">24h</div>
              <div className="text-xl font-semibold text-white mb-2">Response Time</div>
              <div className="text-gray-300">Maximum response time for emergency takedown requests</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-dark-900 mb-6">
            Be Part of Our Journey
          </h2>
          <p className="text-xl text-dark-800 mb-8 opacity-90">
            Join us as we build a safer digital future for women. Your support and participation 
            help us achieve these ambitious goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/helpdesk"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-900 text-primary-400 text-lg font-semibold rounded-xl hover:bg-dark-800 transform hover:scale-105 transition-all shadow-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </a>
            <a
              href="/detect"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-dark-900 text-lg font-semibold rounded-xl border-2 border-dark-900 hover:bg-dark-900 hover:text-primary-400 transform hover:scale-105 transition-all"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Try Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;
