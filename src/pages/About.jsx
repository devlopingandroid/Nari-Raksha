import React from 'react';
import { Heart, Shield, Users, Target, Award, Globe } from 'lucide-react';

// Import images
import yashImg from '../assets/images/yash.png';
import rajatImg from '../assets/images/rajat.png';
import chakshuImg from '../assets/images/chakshu.png';
import yuvrajImg from '../assets/images/yuvraj.png';
import missionImg from '../assets/images/mission.png';

function About() {
  const teamMembers = [
    {
      name: "Yash Goel",
      role: "Rnd & Full Stack Developer",
      image: yashImg
    },
    {
      name: "Rajat Pandey",
      role: "AI/Ml & Cyber Security Expert",
      image: rajatImg
    },
    {
      name: "Chakshu Arora",
      role: "Rnd  & Full Stack Developer",
      image: chakshuImg
    },
    {
      name: "Yuvraj Makani",
      role: "ML Engineer & Content Designer",
      image: yuvrajImg
    }
  ];

  const values = [
    {
      title: "Empathy First",
      description: "We approach every case with deep understanding and compassion for victims of digital harassment."
    },
    {
      title: "Privacy Protection",
      description: "Your data and identity are sacred to us. We ensure complete confidentiality and secure handling."
    },
    {
      title: "Community Support",
      description: "Building a strong network of survivors, advocates, and allies to create lasting change."
    },
    {
      title: "Justice Focused",
      description: "Relentlessly pursuing accountability and justice for victims of digital abuse and harassment."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading font-bold mb-6">
              About <span className="text-primary-400">Nari Raksha</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dedicated to protecting women's digital dignity and fighting against online harassment. 
              We believe every woman deserves to feel safe and respected in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Our <span className="text-primary-400">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Nari Raksha exists to create a safer digital world for women. We combine cutting-edge technology 
                with human compassion to detect, prevent, and eliminate digital harassment targeting women.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-dark-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Digital Protection</h3>
                  <p className="text-gray-300">Advanced AI-powered detection systems</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-dark-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Victim Support</h3>
                  <p className="text-gray-300">24/7 helpdesk and counseling services</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={missionImg}
                alt="Women empowerment and digital safety"
                className="rounded-2xl shadow-xl w-full border border-primary-600/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent rounded-2xl"></div>
              {/* Overlay stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-dark-900/80 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-400">500+</div>
                      <div className="text-sm text-gray-300">Cases Resolved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-400">24/7</div>
                      <div className="text-sm text-gray-300">Support Available</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-400">98%</div>
                      <div className="text-sm text-gray-300">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Our <span className="text-primary-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our commitment to women's digital safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark-800 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105 border border-primary-600/20 group"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Meet Our <span className="text-primary-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to creating a safer digital world for women everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-dark-900 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 border border-primary-600/20 group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-600 group-hover:border-primary-400 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-600/20 to-transparent"></div>
                  {/* Online status indicator */}
                  <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 translate-y-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-dark-900"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">{member.name}</h3>
                  <p className="text-primary-400 font-medium mb-3">{member.role}</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Our <span className="text-primary-400">Impact</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-dark-900" />
              </div>
              <div className="text-3xl font-bold text-primary-400 mb-2">1000+</div>
              <div className="text-gray-300">Women Protected</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-dark-900" />
              </div>
              <div className="text-3xl font-bold text-primary-400 mb-2">750+</div>
              <div className="text-gray-300">Cases Resolved</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-dark-900" />
              </div>
              <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-300">Support Groups</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-dark-900" />
              </div>
              <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-gray-300">Global Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-dark-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-dark-800 mb-8 opacity-90">
            Be part of the movement to create a safer digital world for women. 
            Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/helpdesk"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-900 text-primary-400 text-lg font-semibold rounded-xl hover:bg-dark-800 transform hover:scale-105 transition-all shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Support
            </a>
            <a
              href="/report"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-dark-900 text-lg font-semibold rounded-xl border-2 border-dark-900 hover:bg-dark-900 hover:text-primary-400 transform hover:scale-105 transition-all"
            >
              <Shield className="w-5 h-5 mr-2" />
              Report Content
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;