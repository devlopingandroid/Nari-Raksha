import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, Globe, FileText, Users, Shield, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';

function Helpdesk() {
  const emergencyContacts = [
    {
      title: 'National Cyber Crime Helpline',
      phone: '1930',
      email: 'cybercrime@gov.in',
      description: '24/7 cybercrime reporting and assistance',
      available: '24/7'
    },
    {
      title: 'Women Helpline',
      phone: '181',
      email: 'help@women.gov.in', 
      description: 'Support for women facing harassment',
      available: '24/7'
    },
    {
      title: 'Police Emergency',
      phone: '100',
      email: 'emergency@police.gov.in',
      description: 'Immediate police assistance',
      available: '24/7'
    },
    {
      title: 'Mental Health Helpline',
      phone: '1860-266-2345',
      email: 'support@mentalhealth.org',
      description: 'Counseling and mental health support',
      available: '24/7'
    }
  ];

  const resources = [
    {
      category: 'Legal Guidance',
      items: [
        'IT Act 2000 - Section 66E (Privacy violation)',
        'IPC Section 354C (Voyeurism)',
        'IPC Section 509 (Insulting modesty)',
        'POCSO Act (For minors)',
        'Right to be Forgotten guidelines'
      ]
    },
    {
      category: 'Platform Reporting',
      items: [
        'Instagram: Report through Safety Center',
        'Facebook: Community Standards violation',
        'Twitter/X: Media Policy violation',
        'YouTube: Privacy complaints process',
        'TikTok: Community guidelines enforcement'
      ]
    },
    {
      category: 'Mental Health Support',
      items: [
        'Vandrevala Foundation: 1860-266-2345',
        'AASRA: 022-2754-6669',
        'Sneha India: 044-2464-0050',
        'iCall: 022-2556-3291',
        'Sangath: 0832-240-2913'
      ]
    },
    {
      category: 'Documentation Guide',
      items: [
        'Screenshot all fake content with timestamps',
        'Record platform URLs and user profiles',
        'Document spread patterns and reach',
        'Save communication attempts with platforms',
        'Maintain evidence chain for legal proceedings'
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Emergency Takedown Request',
      description: 'Submit urgent content removal request',
      action: 'Submit Now',
      className: 'bg-red-500 hover:bg-red-600',
      icon: AlertTriangle
    },
    {
      title: 'Legal Support Request', 
      description: 'Connect with legal assistance',
      action: 'Get Help',
      className: 'bg-primary-500 hover:bg-primary-600',
      icon: Shield
    },
    {
      title: 'Counseling Support',
      description: 'Mental health and emotional support',
      action: 'Talk to Someone',
      className: 'bg-accent-500 hover:bg-accent-600',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Women&apos;s Safety <span className="text-accent-500">Helpdesk</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You&apos;re not alone—take back control. Comprehensive support, legal guidance, and mental health resources 
            for deepfake victims and those seeking protection.
          </p>
        </div>

        {/* Empowering Message */}
        <div className="bg-gradient-to-r from-accent-500 to-primary-600 text-white rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">You Have the Power to Fight Back</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every report you make, every action you take, helps protect not just yourself but countless other women. 
            Your courage creates change and builds a safer digital world for everyone.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${action.className}`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{action.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{action.description}</p>
            <Link
              to="/coming-soon"
              className={`block w-full py-3 text-white font-semibold rounded-lg transition-colors text-center ${action.className}`}
            >
                {action.action}
            </Link>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Emergency Contacts */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center">
              <Phone className="w-6 h-6 mr-3 text-red-500" />
              Emergency Contacts
            </h2>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{contact.title}</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {contact.available}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-500 mr-2" />
                      <a href={`tel:${contact.phone}`} className="text-xl font-bold text-red-600 hover:text-red-700">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-500 mr-2" />
                      <a href={`mailto:${contact.email}`} className="text-primary-600 hover:text-primary-700">
                        {contact.email}
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-primary-500" />
              Support Resources
            </h2>
            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {resource.category}
                  </h3>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Takedown Form Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              Emergency Takedown Request
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Emergency Takedown:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Non-consensual intimate deepfakes</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Content causing immediate harm</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Viral spread with severe impact</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Threats or blackmail involved</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Response Process:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-700">Submit emergency form</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-700">Immediate review (within 1 hour)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-700">Platform notifications sent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                    <span className="text-gray-700">Support team contact</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  <Link to="/coming-soon" className="block w-full">
                    Submit Emergency Request
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Need More Support?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our dedicated support team is here to help you through every step of the process. 
            From technical assistance to emotional support, we&apos;re committed to your safety and recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@deepshield.org"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Support Team
            </a>
            <a
              href="/report"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              File a Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helpdesk;