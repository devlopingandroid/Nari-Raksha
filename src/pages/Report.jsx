import React, { useState } from 'react';
import { AlertTriangle, Upload, Send, Phone, Globe, Shield, FileText, Clock, CheckCircle } from 'lucide-react';

function Report() {
  const [formData, setFormData] = useState({
    reportType: '',
    urgency: 'medium',
    description: '',
    platformUrl: '',
    contactInfo: '',
    file: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const reportTypes = [
    { value: 'harassment', label: 'Non-consensual deepfake harassment' },
    { value: 'logo', label: 'Logo/brand misuse in deepfakes' },
    { value: 'misinformation', label: 'Deepfake misinformation' },
    { value: 'identity', label: 'Identity theft via deepfakes' },
    { value: 'other', label: 'Other deepfake abuse' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - General concern', color: 'text-green-600' },
    { value: 'medium', label: 'Medium - Moderate impact', color: 'text-yellow-600' },
    { value: 'high', label: 'High - Significant harm', color: 'text-orange-600' },
    { value: 'critical', label: 'Critical - Immediate danger', color: 'text-red-600' }
  ];

  const emergencyContacts = [
    {
      title: 'National Cyber Crime Helpline',
      phone: '1930',
      description: 'Report cybercrimes and get immediate assistance'
    },
    {
      title: 'Women Helpline',
      phone: '181',
      description: '24/7 support for women facing harassment'
    },
    {
      title: 'Police Emergency',
      phone: '100',
      description: 'For immediate police assistance'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-dark-900 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-800 rounded-2xl shadow-lg p-8 text-center border border-primary-600/20">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Report Submitted Successfully</h2>
            <p className="text-gray-300 mb-6">
              Thank you for reporting this content. Our team will review your submission within 24 hours. 
              You will receive updates at the contact information provided.
            </p>
            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4 mb-6">
              <p className="text-green-400 font-semibold">Report ID: NR-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p className="text-green-300 text-sm mt-1">Save this ID for tracking your report status</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Submit Another Report
              </button>
              <a
                href="/helpdesk"
                className="px-6 py-3 text-primary-400 border border-primary-600 rounded-lg hover:bg-dark-700 transition-colors"
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-white mb-6">
            Report <span className="text-red-400">Fake Content</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Help us fight deepfakes by reporting malicious content. Your report helps protect others and builds our defense database.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 rounded-2xl shadow-lg p-8 border border-primary-600/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Report Type */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Type of Report <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {reportTypes.map((type) => (
                      <label key={type.value} className="flex items-center p-3 border border-dark-600 rounded-lg hover:bg-dark-700 cursor-pointer bg-dark-900/50">
                        <input
                          type="radio"
                          name="reportType"
                          value={type.value}
                          checked={formData.reportType === type.value}
                          onChange={handleInputChange}
                          className="text-primary-600 focus:ring-primary-500"
                          required
                        />
                        <span className="ml-3 text-gray-300">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Urgency Level */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Urgency Level <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {urgencyLevels.map((level) => (
                      <label key={level.value} className="flex items-center p-3 border border-dark-600 rounded-lg hover:bg-dark-700 cursor-pointer bg-dark-900/50">
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          checked={formData.urgency === level.value}
                          onChange={handleInputChange}
                          className="text-primary-600 focus:ring-primary-500"
                        />
                        <span className={`ml-3 font-medium ${level.color}`}>{level.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Platform URL */}
                <div>
                  <label htmlFor="platformUrl" className="block text-sm font-semibold text-white mb-2">
                    Content URL/Link
                  </label>
                  <input
                    type="url"
                    id="platformUrl"
                    name="platformUrl"
                    value={formData.platformUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com/post/12345"
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-400 mt-1">Provide the direct link to the content if available</p>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-white mb-2">
                    Detailed Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Please provide details about the fake content, how it's being used, and any harm it has caused..."
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Evidence Upload
                  </label>
                  <div className="border-2 border-dashed border-dark-600 rounded-lg p-6 text-center hover:border-primary-400 transition-colors bg-dark-900/50">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-300 mb-2">Upload screenshots or files as evidence</p>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept="image/*,video/*,.pdf"
                      className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-600 file:text-dark-900 hover:file:bg-primary-500"
                    />
                  </div>
                  {formData.file && (
                    <p className="text-sm text-green-400 mt-2">File uploaded: {formData.file.name}</p>
                  )}
                </div>

                {/* Contact Info */}
                <div>
                  <label htmlFor="contactInfo" className="block text-sm font-semibold text-white mb-2">
                    Contact Information <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                  <p className="text-sm text-gray-400 mt-1">We'll use this to update you on your report status</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Report
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Emergency Contacts */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Contacts
              </h3>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="bg-dark-800/80 rounded-lg p-4 border border-red-600/20">
                    <h4 className="font-semibold text-white">{contact.title}</h4>
                    <p className="text-2xl font-bold text-red-600">{contact.phone}</p>
                    <p className="text-sm text-gray-300">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary-900/20 to-primary-800/20 border border-primary-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary-400 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="/detect"
                  className="flex items-center p-3 bg-dark-800/80 rounded-lg hover:bg-dark-700 transition-colors group border border-primary-600/20"
                >
                  <Globe className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-primary-400 group-hover:text-primary-300">Analyze Content First</span>
                </a>
                <a
                  href="/helpdesk"
                  className="flex items-center p-3 bg-dark-800/80 rounded-lg hover:bg-dark-700 transition-colors group border border-primary-600/20"
                >
                  <Shield className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-primary-400 group-hover:text-primary-300">Get Support</span>
                </a>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-dark-800 rounded-xl p-6 border border-primary-600/20">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Clock className="w-5 h-5 text-primary-400 mr-2" />
                What Happens Next?
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Our team reviews your report within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span>We contact platforms for content removal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span>You receive updates via email</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Support resources are provided if needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
