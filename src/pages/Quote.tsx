import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Send, Calendar, Phone, CheckCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useSEO } from "../hooks/useSEO";
import emailjs from "emailjs-com";

const Quote = () => {
  useSEO({
    title: "Get a Free Quote",
    description:
      "Get a personalized quote for your real estate needs in Kenya. Free consultation and transparent pricing from BeaconTrust property experts.",
    keywords:
      "real estate quote Kenya, property consultation, free quote, real estate pricing, property services quote, BeaconTrust consultation",
  });

  const { toast } = useToast();
  const heroAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_QUOTE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_QUOTE_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
        import.meta.env.VITE_QUOTE_EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);
      toast({
        title: "Quote Request Submitted!",
        description:
          "We'll contact you within 24 hours with a detailed proposal.",
      });

      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scheduleOnlineMeeting = () => {
    toast({
      title: "Meeting Scheduler",
      description: "Redirecting to our calendar booking system...",
    });
    // In a real app, this would open a calendar booking widget
  };

  const services = [
    "Land & Legal Support",
    "Sales & Marketing",
    "Planning & Development",
    "Property Management",
    "Financial Linkages",
    "Pre-Acquisition & Advisory",
    "Complete Property Package",
  ];

  const budgetRanges = [
    "Under KSh 500,000",
    "KSh 500,000 - 1,000,000",
    "KSh 1,000,000 - 2,500,000",
    "KSh 2,500,000 - 5,000,000",
    "KSh 5,000,000 - 10,000,000",
    "Above KSh 10,000,000",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center transition-all duration-1000 ${
              heroAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Talk About Your
              <span className="text-green-200"> Real Estate Needs</span>
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              Get a personalized consultation and custom quote for your property
              project. Our experts will help you understand all costs upfront
              with complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={formAnimation.elementRef}
            className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-300 ${
              formAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8">
              {showSuccess ? (
                <div className="space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                  <h2 className="text-3xl font-bold text-green-600 mb-4">
                    Request Submitted Successfully!
                  </h2>
                  <p className="text-lg text-gray-600">
                    Thank you! Our team will contact you within 24 hours with a
                    detailed proposal.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Request Your Free Consultation
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours with a detailed proposal.
                  </p>
                </>
              )}
            </div>

            {!showSuccess && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Budget Range (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Overview / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us about your project, timeline, location preferences, and any specific requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Submitting..." : "Request Callback"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={processAnimation.elementRef}
            className={`transition-all duration-1000 delay-600 ${
              processAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Happens Next?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined consultation process ensures you get the
                information and support you need quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. We Contact You
                </h3>
                <p className="text-gray-600">
                  Within 24 hours, one of our specialists will reach out to
                  discuss your needs in detail.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. Free Consultation
                </h3>
                <p className="text-gray-600">
                  We schedule a comprehensive consultation to understand your
                  project requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. Custom Proposal
                </h3>
                <p className="text-gray-600">
                  You receive a detailed, transparent proposal with all costs
                  and timelines clearly outlined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prefer to Talk Directly?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is available for immediate consultation via phone or email.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
              <p className="text-green-400 text-lg font-medium">
                 0727 933774
              </p>
              <p className="text-gray-300 text-sm mt-2">Mon-Fri: 8AM-6PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Send className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-blue-400 text-lg font-medium">
                0759 192863
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
