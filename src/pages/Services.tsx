
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, FileText, Building, DollarSign, Compass, Home, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSEO } from '../hooks/useSEO';

const Services = () => {
  useSEO({
    title: 'Our Services',
    description: 'Comprehensive real estate services in Kenya - land verification, legal processing, property management, construction supervision, and more.',
    keywords: 'real estate services Kenya, land verification, property management, construction supervision, legal processing, real estate consulting'
  });

  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const differenceAnimation = useScrollAnimation();

  const serviceCategories = [
    {
      icon: Search,
      title: 'Pre-Acquisition & Advisory',
      services: [
        'Market Research & Feasibility Studies',
        'Land Sourcing & Due Diligence',
        'Legal Advisory & Property Valuation',
        'Environmental & Social Impact Assessments'
      ]
    },
    {
      icon: FileText,
      title: 'Land & Legal Services',
      services: [
        'Subdivision, Re-survey & Change of Use',
        'Title Processing & Leasehold Conversions',
        'Stamp Duty & Registration Facilitation',
        'Legal Documentation & Compliance'
      ]
    },
    {
      icon: Building,
      title: 'Sales & Marketing',
      services: [
        'Property Listing, Branding & Sales',
        'Buyer Screening & Documentation',
        'Payment Plans & Financing Options',
        'Open Houses & Property Tours'
      ]
    },
    {
      icon: DollarSign,
      title: 'Financial Linkages',
      services: [
        'Credit Advisory & Readiness Assessment',
        'Valuation & Loan Packaging',
        'Lender Introductions (Banks, SACCOs, MFIs)',
        'Financial Planning & Investment Advice'
      ]
    },
    {
      icon: Home,
      title: 'Post-Development & Property Management',
      services: [
        'Letting & Leasing Services',
        'Rent Collection & Financial Management',
        'Property Maintenance & Repairs',
        'HOA Setup, Security & Utilities Management'
      ]
    },
    {
      icon: Compass,
      title: 'Planning & Development',
      services: [
        'Architectural & Structural Design',
        'Surveying, Mapping & Site Planning',
        'Approvals (NEMA, NCA, County)',
        'Construction & Contractor Supervision'
      ]
    },
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
              Comprehensive Real Estate 
              <span className="text-green-400"> Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              BeaconTrust offers a full suite of property services — all under one roof. Whether you're 
              buying land, developing it, or managing property, we help you navigate Kenya's complex 
              real estate landscape with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={servicesAnimation.elementRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 animate-on-scroll ${servicesAnimation.isVisible ? 'visible' : ''}`}
          >
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white group cursor-pointer">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                      <IconComponent className="h-6 w-6 text-blue-600 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4 transition-colors duration-300 group-hover:text-blue-700">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 hover:rounded-lg hover:p-2 group/item">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-green-700" />
                        <span className="text-gray-700 transition-colors duration-300 group-hover/item:text-gray-900">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={processAnimation.elementRef}
            className={`animate-on-scroll ${processAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've streamlined the real estate process to make it as smooth and transparent as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We understand your needs, budget, and timeline through detailed consultation.'
                },
                {
                  step: '02',
                  title: 'Research & Due Diligence',
                  description: 'Comprehensive market research and legal verification of all properties.'
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Professional handling of all processes from documentation to completion.'
                },
                {
                  step: '04',
                  title: 'Ongoing Support',
                  description: 'Continued support and management services as needed.'
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative group cursor-pointer transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110 group-hover:shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-700">{step.title}</h3>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">{step.description}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-gray-400 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Services Are Different */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={differenceAnimation.elementRef}
            className={`animate-on-scroll ${differenceAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Why Our Services Are Different
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-400 group-hover:scale-110 group-hover:shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">100% Transparency</h3>
                <p className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  Every step is documented and communicated. No hidden processes or surprise costs.
                </p>
              </div>
              <div className="text-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-400 group-hover:scale-110 group-hover:shadow-lg">
                  <FileText className="h-8 w-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">Legal Compliance</h3>
                <p className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  All our services meet or exceed legal requirements and industry best practices.
                </p>
              </div>
              <div className="text-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-400 group-hover:scale-110 group-hover:shadow-lg">
                  <Home className="h-8 w-8 text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">End-to-End Support</h3>
                <p className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  From initial consultation to ongoing management, we're with you every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Let's discuss your real estate needs and create a customized solution that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105 hover:shadow-lg group"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105 hover:shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
