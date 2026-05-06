
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, Eye, Heart, Shield, Lightbulb, Users as UsersIcon, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSEO } from '../hooks/useSEO';

const About = () => {
  useSEO({
    title: 'About Us',
    description: 'Learn about BeaconTrust - your trusted real estate partner in Kenya. Discover our mission, values, and commitment to transparent property services.',
    keywords: 'about BeaconTrust, real estate company Kenya, trusted property services, real estate mission, property management company'
  });

  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const visionAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const differenceAnimation = useScrollAnimation();

  const values = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Uncompromising honesty and transparency in every deal.'
    },
    {
      icon: UsersIcon,
      title: 'Accessibility',
      description: 'Property solutions for every income bracket.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Technology-driven processes for modern efficiency.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'What you see is what you get. Always.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.elementRef}
            className={`text-center animate-on-scroll ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transforming Real Estate in Kenya with 
              <span className="text-green-400"> Trust and Transparency</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              We're changing how real estate works in Kenya — making it safer, simpler, and more transparent for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={storyAnimation.elementRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${storyAnimation.isVisible ? 'visible' : ''}`}
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                
                <p>
                  Kenya’s real estate sector is projected to grow from $733.4 billion in 2024 to $944.1 billion by 2029, driven by 
                  rapid urbanization, a growing middle class, and high demand for affordable housing (exceeding 250,000 units annually). 
                  With the government expressing unwavering commitment to continuous investment on social infrastructural projects 
                  across the country including expanding major roads and highways as well as rail and water transport, 
                  demand for land both for residential and commercial purposes is only expected to increase in the medium term. 
                  <p>
                  BeaconTrust was founded in 2025 to provide services that fit within this rapidly expanding sector. We are a 
                  Kisumu-based private real estate firm offering end-to-end services grounded in professionalism, integrity, 
                  and accountability.
                  </p>
            
                </p>
            
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                    <div className="text-gray-600">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                    <div className="text-gray-600">Client Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={visionAnimation.elementRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 animate-on-scroll ${visionAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                  <Eye className="h-6 w-6 text-blue-600 transition-all duration-300 group-hover:text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4 transition-colors duration-300 group-hover:text-blue-700">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                To be Kenya's most trusted and transparent real estate brand, replacing uncertainty 
                and inefficiency with integrity and innovation, and involving our clients every step of the way.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-green-50 hover:to-white group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                  <Target className="h-6 w-6 text-green-600 transition-all duration-300 group-hover:text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4 transition-colors duration-300 group-hover:text-green-700">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                To make real estate investment simpler, safer, smarter, faster, and cheaper — by offering 
                clear, cost-effective property solutions built on integrity and tailored to every client's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={valuesAnimation.elementRef}
            className={`animate-on-scroll ${valuesAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we serve our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110 group-hover:shadow-lg">
                      <IconComponent className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-700">{value.title}</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={differenceAnimation.elementRef}
            className={`animate-on-scroll ${differenceAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We're not just another real estate company. Here's what makes BeaconTrust different.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg group cursor-pointer">
                <CheckCircle className="h-8 w-8 text-green-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-green-300" />
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">Full Transparency</h3>
                <p className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  No hidden fees, no surprises. Every cost is disclosed upfront, and you're involved in every decision.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg group cursor-pointer">
                <Shield className="h-8 w-8 text-green-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-green-300" />
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">Complete Due Diligence</h3>
                <p className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  We verify every property through official registries and conduct thorough legal checks.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg group cursor-pointer">
                <UsersIcon className="h-8 w-8 text-green-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-green-300" />
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">Client-Centric Approach</h3>
                <p className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  Your success is our success. We tailor our services to meet your specific needs and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
